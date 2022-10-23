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

let cursosTable: HTMLElement = document.getElementById("cursos")!;

function mostarCursosAprendiz(cursos:Curso[]): void {
    let cursosTBody: HTMLElement = document.createElement("tbody");
    let estado : string[] = cusrsos.map(c=> (c.calificacion>60?'green':'red'));
    let index: number = 0;
    for(let curso of cursos){
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = ` <td>${curso.nombre}</td>
        <td>${curso.horas}</td>
        <td style="color:${estado[index]}">${curso.calificacion}</td>
        <td>${curso.certificado}</td>
        <td>${curso.anio}</td>
        index++;
        `;
        cursosTBody.appendChild(trElement);
    }
    cursosTable.appendChild(cursosTBody);
}
mostarCursosAprendiz(aprendiz.cusros);

let btnFiltro: HTMLElement = document.getElementById("boton-filtro")!;
let textoBusqueda: HTMLInputElement = <HTMLInputElement>document.getElementById("texto-busqueda")!;
btnFiltro.onclick = () => {
    let text: string = textoBusqueda.value;
    text = (text==null)? "": text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    let cursosFiltrados: Curso[] = aprendiz.cusros.filter(c => c.nombre.match(text));
    mostarCursosAprendiz(cursosFiltrados);
}

}