import { Component, Input, OnChanges, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { Canvas } from '../canvas/canvas';

@Component({
    selector: 'app-mapa-de-calor',
    imports: [Canvas],
    template: '<app-canvas #canvas [desenhar]="desenhar"></app-canvas>'
})
export class MapaDeCalor implements OnChanges {

    @ViewChild('canvas') 
    private canvas!: Canvas;

    @Input()
    dados: number[] = []; // valores entre 0 e 1
    
    @Input()
    dimensoes = {x: 10, y: 10};

    @Input()
    cor0 = 'black';

    @Input()
    cor1 = 'white';

    constructor() {
        for (let i = 0; i < this.dimensoes.x * this.dimensoes.y; i++)
            this.dados.push(Math.random());
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['dados'] && this.canvas) {
            this.canvas.refrescar();
        }
    }

    desenhar = (ctx: CanvasRenderingContext2D, larg: number, altur: number) => {
        const cel = Math.round(Math.min(larg / this.dimensoes.x, altur / this.dimensoes.y));
        const centr = {
            x: larg / 2,
            y: altur / 2
        };
        const tl = {
            x: Math.floor(centr.x - cel * this.dimensoes.x / 2),
            y: Math.floor(centr.y - cel * this.dimensoes.y / 2)
        };

        //ctx.fillStyle = this.cor0;
        //ctx.fillRect(0, 0, larg, altur);

        for (let y = 0; y < this.dimensoes.y; y++) {
            for (let x = 0; x < this.dimensoes.x; x++) {
                ctx.fillStyle = `color-mix(in hsl, ${this.cor0}, ${this.cor1} ${Math.round(this.dados[y * this.dimensoes.x + x] * 100)}%)`;
                ctx.fillRect(tl.x + x * cel, tl.y + y * cel, cel, cel);
            }
        }
    }
}
