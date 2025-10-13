import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  imports: [],
  templateUrl: './canvas.html'
})
export class Canvas implements AfterViewInit, OnDestroy {
    @ViewChild('canvas') 
    canvas!: ElementRef<HTMLCanvasElement>;

    ctx!: CanvasRenderingContext2D;

    @Input('desenhar')
    desenhar = (ctx: CanvasRenderingContext2D, largura: number, altura: number) => {}

    private resizeObserver: ResizeObserver;

    constructor() {
        this.resizeObserver = new ResizeObserver(entries => {
            this.canvas.nativeElement.width = entries[0].contentRect.width;
            this.canvas.nativeElement.height = entries[0].contentRect.height;
            this.refrescar();
        });
    }

    ngAfterViewInit(): void {
        const ctx = this.canvas.nativeElement.getContext('2d');
        if (!ctx) throw new Error("Falha ao pegar contexto 2d do canvas.");
        this.ctx = ctx;

        this.resizeObserver.observe(this.canvas.nativeElement.parentElement!);
    }

    ngOnDestroy(): void {
        this.resizeObserver.unobserve(this.canvas.nativeElement.parentElement!);
    }

    refrescar() {
        this.desenhar(this.ctx, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    }
}
