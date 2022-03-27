"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
class Direccion {
    constructor(_calle, _numero, _piso, _letra, _codigoPostal, _poblacion, _provincia) {
        this._calle = _calle;
        this._numero = _numero;
        this._piso = _piso;
        this._letra = _letra;
        this._codigoPostal = _codigoPostal;
        this._poblacion = _poblacion;
        this._provincia = _provincia;
        this.calle = _calle || "";
        this.numero = _numero || "";
        this.piso = _piso || "";
        this.letra = _letra || "";
        this.codigoPostal = _codigoPostal || "";
        this.poblacion = _poblacion || "";
        this.provincia = _provincia || "";
    }
    getCalle() {
        return this.calle;
    }
    getNumero() {
        return this.numero;
    }
    getPiso() {
        return this.piso;
    }
    getLetra() {
        return this.letra;
    }
    getCodigoPostal() {
        return this.codigoPostal;
    }
    getPoblacion() {
        return this.poblacion;
    }
    getProvincia() {
        return this.provincia;
    }
    setCalle(_calle) {
        this.calle = _calle;
    }
    setNumero(_numero) {
        this.numero = _numero;
    }
    setPiso(_piso) {
        this.piso = _piso;
    }
    setLetra(_letra) {
        this.letra = _letra;
    }
    setCodigoPostal(_codigoPostal) {
        this.codigoPostal = _codigoPostal;
    }
    setPoblacion(_poblacion) {
        this.poblacion = _poblacion;
    }
    setProvincia(_provincia) {
        this.provincia = _provincia;
    }
    setDireccion(_calle, _numero, _piso, _letra, _codigoPostal, _poblacion, _provincia) {
        this.setCalle(_calle);
        this.setNumero(_numero);
        this.setPiso(_piso);
        this.setLetra(_letra);
        this.setCodigoPostal(_codigoPostal);
        this.setPoblacion(_poblacion);
        this.setProvincia(_provincia);
    }
}
exports.Direccion = Direccion;
//# sourceMappingURL=Direccion.js.map