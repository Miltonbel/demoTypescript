export var NivelEducativo;
(function (NivelEducativo) {
    NivelEducativo["BACHILLERATO"] = "Bachillerato";
    NivelEducativo["UNIVERSITARIO"] = "Universitario";
    NivelEducativo["POSGRADO"] = "PosGrado";
})(NivelEducativo || (NivelEducativo = {}));
var Aprendiz = /** @class */ (function () {
    function Aprendiz(nombres, apellidos, avatar, edad, nivelEducatiovo, cusros) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.avatar = avatar;
        this.edad = edad;
        this.nivelEducatiovo = nivelEducatiovo;
        this.cusros = cusros;
    }
    Aprendiz.prototype.darCursosCertificados = function () {
        var totalCursosC = 0;
        for (var index = 0; index < this.cusros.length; index++) {
            var curso = this.cusros[index];
            if (curso.certificado) {
                totalCursosC += 1;
            }
        }
        return totalCursosC;
    };
    return Aprendiz;
}());
export { Aprendiz };
