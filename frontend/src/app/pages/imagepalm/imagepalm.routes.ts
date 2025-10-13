import { Routes } from '@angular/router';
import { Analise } from './analise/analise';
import { Inserir } from './inserir/inserir';

export default [
    {
        path: 'analise',
        component: Analise,
        title: 'ImagePalm | Análise'
    }, {
        path: 'inserir',
        component: Inserir,
        title: 'ImagePalm | Inserir Amostra'
    }
] as Routes