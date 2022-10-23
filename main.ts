import {Aprendiz, NivelEducativo} from './aprendiz.js';
import { Curso } from './curso.js';
let cusrsos = [new Curso("Agilismo", 20,90,true,2019),
new Curso("Web", 20,90,true,2018)]
export const aprendiz = new Aprendiz("Milton","Beltran", "avatar.jpg", 30, NivelEducativo.POSGRADO, cusrsos);
console.log(aprendiz.cusros);

let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;
mostrarDatosApendiz(aprendiz)

function mostrarDatosApendiz(aprendiz: Aprendiz): void{
    let tBodyAprendiz = document.createElement("tbody");
    tBodyAprendiz.innerHTML = ` <tr><td colspan=2> <img src="./${aprendiz.avatar}" height = "100"></tr></td>
    <tr><td>Nombres:</td><td>${aprendiz.nombres}</td></tr>
    <tr><td>Apellidos:</td><td>${aprendiz.apellidos}</td></tr>
    <tr><td>Nivel educativo:</td><td>${aprendiz.nivelEducatiovo}</td></tr>
    <tr><td>Edad:</td><td>${aprendiz.edad}</td></tr>`

    aprendizTable.appendChild(tBodyAprendiz);

let estadisticasTable: HTMLElement = document.getElementById("estadisticas")!;

function mostrarEstadisticas(aprendiz: Aprendiz): void {
    let numeroCertificados: number = aprendiz.darCursosCertificados();
    let trElement:HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>Cursos certificados</b></td></td>${numeroCertificados}</td>`;
    estadisticasTable.appendChild(trElement);
    
}
mostrarEstadisticas(aprendiz);
}