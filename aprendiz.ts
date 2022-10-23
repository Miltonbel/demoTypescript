import {Curso} from './curso.js';
export enum NivelEducativo{
    BACHILLERATO = "Bachillerato",
    UNIVERSITARIO = "Universitario",
    POSGRADO = "PosGrado"
}
export class Aprendiz{
    constructor(public nombres: string, public apellidos: string,public avatar: string, public edad: number, public nivelEducatiovo: NivelEducativo, public cusros: Curso[]){
            
    }

    public darCursosCertificados(): number{
        let totalCursosC: number = 0;
        for(let index = 0; index < this.cusros.length; index++)
        {
            let curso: Curso = this.cusros[index];
            if(curso.certificado){
                totalCursosC+=1;
            }
        }
        return totalCursosC;
    }
}