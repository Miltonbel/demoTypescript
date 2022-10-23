import {Aprendiz, NivelEducativo} from './aprendiz.js';
export const aprendiz = new Aprendiz("Milton","Beltran", "avatar.jpg", 30, NivelEducativo.POSGRADO );
console.log(aprendiz)

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
}