import { Aprendiz, NivelEducativo } from './aprendiz.js';
import { Curso } from './curso.js';
var cusrsos = [new Curso("Agilismo", 20, 90, true, 2019),
    new Curso("Web", 20, 90, true, 2018)];
export var aprendiz = new Aprendiz("Milton", "Beltran", "avatar.jpg", 30, NivelEducativo.POSGRADO, cusrsos);
console.log(aprendiz.cusros);
var aprendizTable = document.getElementById("aprendiz");
mostrarDatosApendiz(aprendiz);
function mostrarDatosApendiz(aprendiz) {
    var tBodyAprendiz = document.createElement("tbody");
    tBodyAprendiz.innerHTML = " <tr><td colspan=2> <img src=\"./" + aprendiz.avatar + "\" height = \"100\"></tr></td>\n    <tr><td>Nombres:</td><td>" + aprendiz.nombres + "</td></tr>\n    <tr><td>Apellidos:</td><td>" + aprendiz.apellidos + "</td></tr>\n    <tr><td>Nivel educativo:</td><td>" + aprendiz.nivelEducatiovo + "</td></tr>\n    <tr><td>Edad:</td><td>" + aprendiz.edad + "</td></tr>";
    aprendizTable.appendChild(tBodyAprendiz);
    var estadisticasTable = document.getElementById("estadisticas");
    function mostrarEstadisticas(aprendiz) {
        var numeroCertificados = aprendiz.darCursosCertificados();
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td><b>Cursos certificados</b></td></td>" + numeroCertificados + "</td>";
        estadisticasTable.appendChild(trElement);
    }
    mostrarEstadisticas(aprendiz);
    var cursosTable = document.getElementById("cursos");
    function mostarCursosAprendiz(cursos) {
        var cursosTBody = document.createElement("tbody");
        var estado = cusrsos.map(function (c) { return (c.calificacion > 60 ? 'green' : 'red'); });
        var index = 0;
        for (var _i = 0, cursos_1 = cursos; _i < cursos_1.length; _i++) {
            var curso = cursos_1[_i];
            var trElement = document.createElement("tr");
            trElement.innerHTML = " <td>" + curso.nombre + "</td>\n        <td>" + curso.horas + "</td>\n        <td style=\"color:" + estado[index] + "\">" + curso.calificacion + "</td>\n        <td>" + curso.certificado + "</td>\n        <td>" + curso.anio + "</td>\n        index++;\n        ";
            cursosTBody.appendChild(trElement);
        }
        cursosTable.appendChild(cursosTBody);
    }
    mostarCursosAprendiz(aprendiz.cusros);
    var btnFiltro = document.getElementById("boton-filtro");
    var textoBusqueda = document.getElementById("texto-busqueda");
    btnFiltro.onclick = function () {
        var text = textoBusqueda.value;
        text = (text == null) ? "" : text;
        cursosTable.getElementsByTagName("tbody")[0].remove();
        var cursosFiltrados = aprendiz.cusros.filter(function (c) { return c.nombre.match(text); });
        mostarCursosAprendiz(cursosFiltrados);
    };
}
