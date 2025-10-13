import { Canvas } from '@/components/canvas/canvas';
import { MapaDeCalor } from '@/components/mapa-de-calor/mapa-de-calor';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from 'primeng/table';

@Component({
    selector: 'app-imagepalm-analise',
    standalone: true,
    imports: [
        TableModule,
        ButtonModule,
        MapaDeCalor,
        CommonModule
    ],
    templateUrl: 'analise.html'
})
export class Analise {
    metricas: Metrica[] = [
        {
            nome: 'Mínima',
            valor: 0
        }, {
            nome: 'Máxima',
            valor: 0
        }, {
            nome: 'Média',
            valor: 0
        }, {
            nome: 'Tam. Buffer',
            valor: 0
        }
    ];

    mapaDeCalorDimensoes = {x: 16, y: 16};
    mapaDeCalor: number[] = [];
    periodoDeAmostragemMs = 1000 / 60;

    conectado = false;

    escritor?: WritableStreamDefaultWriter<Uint8Array>;
    leitor?: ReadableStreamDefaultReader<Uint8Array>;
    buffer = new Uint8Array;

    constructor() {
        this.mapaDeCalor = [];
        for (let y = 0; y < this.mapaDeCalorDimensoes.y; y++) {
            for (let x = 0; x < this.mapaDeCalorDimensoes.x; x++) {
                this.mapaDeCalor.push(Math.random());
            }    
        }
    }

    async conectar() {
        try {
            const porta = await (navigator as any).serial.requestPort();
            await porta.open({ baudRate: 115200 });
            
            this.conectado = true;
            this.leitor = porta.readable.getReader();
            this.escritor = porta.writable.getWriter();
            
            await this.inicializarLeitura();
            await this.lacoDeLeitura();
            await this.encerrarLeitura();
            
            await this.escritor?.close().catch(() => {});
            this.escritor?.releaseLock();
            this.escritor = undefined;

            await this.leitor?.cancel();
            this.leitor?.releaseLock();
            this.leitor = undefined;

            porta.close();
        }
        catch (err) {
            console.log(err);
        }
    }
    desconectar() {
        this.conectado = false;
    }

    async inicializarLeitura() {
        // enviar mensagem de inicialização e definir periodo de amostragem
        const bufferInicializacao = new Uint8Array(5);
        let view = new DataView(bufferInicializacao.buffer);
        view.setUint8(0, MSG.INICIAR);
        view.setUint32(1, this.periodoDeAmostragemMs, true);
        await this.escritor?.write(bufferInicializacao);

        // receber dimensões do sensor
        view = new DataView((await this.ler(2)).buffer, 0, 2);
        this.mapaDeCalorDimensoes.x = view.getUint8(0);
        this.mapaDeCalorDimensoes.y = view.getUint8(1);
    }

    async encerrarLeitura() {
        await this.escritor?.write(new Uint8Array([MSG.ENCERRAR]));
    }

    async lacoDeLeitura() {
        try {
            while (this.conectado && this.leitor) {
                const pacote = await this.ler(this.mapaDeCalorDimensoes.x * this.mapaDeCalorDimensoes.y * 4);
                this.mapaDeCalor = Array.from(
                    new Float32Array(
                        pacote.buffer, 
                        0, 
                        this.mapaDeCalorDimensoes.x * this.mapaDeCalorDimensoes.y
                    )
                );
            }
        }
        catch (e) {
            console.error(e);
        }
    }

    async ler(qtd: number): Promise<Uint8Array<ArrayBuffer>> {
        if (!this.leitor) throw new Error("Leitor não inicializado");

        while (this.buffer.length < qtd) {
            const {value, done} = await this.leitor.read();
            if (value) {
                const tmp = new Uint8Array(this.buffer.length + value.length)
                tmp.set(this.buffer);
                tmp.set(value, this.buffer.length);
                this.buffer = tmp;
            }
        }
        const pacote = this.buffer.subarray(0, qtd);
        this.buffer = this.buffer.subarray(qtd);
        this.metricas[3].valor = this.buffer.length;
        return pacote;
    }
}

type Metrica = {
    nome: string,
    valor: number
}

const enum MSG {
    INICIAR,
    ENCERRAR
}
