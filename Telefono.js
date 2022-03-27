"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = exports.TelefonoEnum = void 0;
var TelefonoEnum;
(function (TelefonoEnum) {
    TelefonoEnum[TelefonoEnum["fijo"] = 0] = "fijo";
    TelefonoEnum[TelefonoEnum["movil"] = 1] = "movil";
    TelefonoEnum[TelefonoEnum["trabajo"] = 2] = "trabajo";
})(TelefonoEnum = exports.TelefonoEnum || (exports.TelefonoEnum = {}));
;
class Telefono {
    constructor(_tipo, _numero) {
        this._tipo = _tipo;
        this._numero = _numero;
        this.tipo = _tipo || TelefonoEnum.fijo;
        this.numero = _numero || "";
    }
    getTipo() {
        return TelefonoEnum[this.tipo];
    }
    getNumero() {
        return this.numero;
    }
    setTipo(_tipo) {
        this.tipo = _tipo;
    }
    setNumero(_numero) {
        this.numero = _numero;
    }
    setTelefono(_tipo, _numero) {
        this.setTipo(_tipo);
        this.setNumero(_numero);
    }
}
exports.Telefono = Telefono;
//# sourceMappingURL=Telefono.js.map