"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
class Mail {
    constructor(_tipo, _direccion) {
        this._tipo = _tipo;
        this._direccion = _direccion;
        this.tipo = _tipo || "personal";
        this.direccion = _direccion || "";
    }
    getTipo() {
        return this.tipo;
    }
    getDireccion() {
        return this.direccion;
    }
    setTipo(_tipo) {
        this.tipo = _tipo;
    }
    setDireccion(_direccion) {
        this.direccion = _direccion;
    }
    setMail(_tipo, _direccion) {
        this.setTipo(_tipo);
        this.setDireccion(_direccion);
    }
}
exports.Mail = Mail;
//# sourceMappingURL=Mail.js.map