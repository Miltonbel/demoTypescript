import { Aprendiz, NivelEducativo } from './aprendiz.js';
export var aprendiz = new Aprendiz("Milton", "Beltran", "avatar.jpg", 30, NivelEducativo.POSGRADO);
console.log(aprendiz);
var aprendizTable = document.getElementById("aprendiz");
mostrarDatosApendiz(aprendiz);
function mostrarDatosApendiz(aprendiz) {
    var tBodyAprendiz = document.createElement("tbody");
    tBodyAprendiz.innerHTML = " <tr><td colspan=2> <img src=\"./" + aprendiz.avatar + "\" height = \"100\"></tr></td>\n    <tr><td>Nombres:</td><td>" + aprendiz.nombres + "</td></tr>\n    <tr><td>Apellidos:</td><td>" + aprendiz.apellidos + "</td></tr>\n    <tr><td>Nivel educativo:</td><td>" + aprendiz.nivelEducatiovo + "</td></tr>\n    <tr><td>Edad:</td><td>" + aprendiz.edad + "</td></tr>";
    aprendizTable.appendChild(tBodyAprendiz);
}
