"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
const Telefono_1 = require("./Telefono");
class Persona {
    constructor(_nombre, _apellidos, _edad, _dni, _cumpleaños, _colorFavorito, _sexo) {
        this._nombre = _nombre;
        this._apellidos = _apellidos;
        this._edad = _edad;
        this._dni = _dni;
        this._cumpleaños = _cumpleaños;
        this._colorFavorito = _colorFavorito;
        this._sexo = _sexo;
        this.nombre = _nombre || "";
        this.apellidos = _apellidos || "";
        this.edad = _edad || "";
        this.dni = _dni || "";
        this.cumpleaños = _cumpleaños || new Date("");
        this.colorFavorito = _colorFavorito || "azul";
        this.sexo = _sexo || "masculino";
        this.direcciones = new Array();
        this.mails = new Array();
        this.telefonos = new Array();
        this.notas = new Array();
    }
    getNombre() {
        return this.nombre;
    }
    getApellidos() {
        return this.apellidos;
    }
    getEdad() {
        return this.edad;
    }
    getDNI() {
        return this.dni;
    }
    getCumpleaños() {
        return this.cumpleaños;
    }
    getColorFavorito() {
        return this.colorFavorito;
    }
    getSexo() {
        return this.sexo;
    }
    getDirecciones() {
        return this.direcciones;
    }
    getTelefonos() {
        return this.telefonos;
    }
    getMails() {
        return this.mails;
    }
    getNotas() {
        return this.notas;
    }
    setNombre(_nombre) {
        this.nombre = _nombre;
    }
    setApellidos(_apellidos) {
        this.apellidos = _apellidos;
    }
    setEdad(_edad) {
        this.edad = _edad;
    }
    setDNI(_dni) {
        this.dni = _dni;
    }
    setCumpleaños(_cumpleaños) {
        this.cumpleaños = _cumpleaños;
    }
    setColorFavorito(_colorFavorito) {
        this.colorFavorito = _colorFavorito;
    }
    setSexo(_sexo) {
        this.sexo = _sexo;
    }
    setDirecciones(_direcciones) {
        this.direcciones = _direcciones;
    }
    setTelefonos(_telefonos) {
        this.telefonos = _telefonos;
    }
    setMails(_mails) {
        this.mails = _mails;
    }
    setNotas(_notas) {
        this.notas = _notas;
    }
    setPersona(_nombre, _apellidos, _edad, _dni, _cumpleaños, _colorFavorito, _sexo, _direcciones, _telefonos, _mails, _notas) {
        this.setNombre(_nombre);
        this.setApellidos(_apellidos);
        this.setEdad(_edad);
        this.setDNI(_dni);
        this.setCumpleaños(_cumpleaños);
        this.setColorFavorito(_colorFavorito);
        this.setSexo(_sexo);
        this.setDirecciones(_direcciones);
        this.setTelefonos(_telefonos);
        this.setMails(_mails);
        this.setNotas(_notas);
    }
    mostrarDirecciones(direcciones) {
        let direccionAString;
        var direccionesAString = new Array();
        for (const direccion of direcciones) {
            direccionAString = "la calle es " + direccion.getCalle() + " número " + direccion.getNumero()
                + " piso " + direccion.getPiso() + " letra " + direccion.getLetra() + " código postal " +
                +direccion.getCodigoPostal() + " población " + direccion.getPoblacion() + " provincia " +
                direccion.getProvincia();
            direccionesAString.push(direccionAString);
        }
        return direccionesAString;
    }
    mostrarTelefonos(telefonos) {
        let telefonoAString;
        var telefonosAString = new Array();
        for (const telefono of telefonos) {
            telefonoAString = "el tipo es " + telefono.getTipo() + " y el número es " + telefono.getNumero();
            telefonosAString.push(telefonoAString);
        }
        return telefonosAString;
    }
    mostrarMails(mails) {
        let mailAString;
        var mailsAString = new Array();
        for (const mail of mails) {
            mailAString = "el tipo es " + mail.getTipo() + " y la dirección es " + mail.getDireccion();
            mailsAString.push(mailAString);
        }
        return mailsAString;
    }
    mostrarDatosPersona() {
        console.log("Los datos personales son: nombre " + this.getNombre() + ", apellidos " + this.getApellidos() +
            ", edad " + this.getEdad() + " años, con DNI " + this.getDNI() + ", su cumpleaños es el "
            + this.getCumpleaños().getDate() + " de " + this.getCumpleaños().toLocaleString('default', { month: 'long' })
            + ", su color favorito es el " + this.getColorFavorito() + ", su sexo es " + this.getSexo()
            + ", las direcciones son " + this.mostrarDirecciones(this.getDirecciones()) + ", los teléfonos son "
            + this.mostrarTelefonos(this.getTelefonos()) + ", los mails son " + this.mostrarMails(this.getMails())
            + " y las notas son " + this.getNotas().join(", ") + "\n");
    }
    cambiarRegistro() {
        this.getDirecciones()[0].setDireccion("Calle Amoladera", "51", "4", "A", "28863", "Cobeña", "Madrid");
        console.log(this.mostrarDirecciones(this.getDirecciones()));
        this.getTelefonos()[0].setTelefono(Telefono_1.TelefonoEnum.movil, "+34-692198494");
        console.log(this.mostrarTelefonos(this.getTelefonos()));
        this.getMails()[0].setMail("universidad", "eduardo.ponquinta@upm.es");
        console.log(this.mostrarMails(this.getMails()));
    }
}
exports.Persona = Persona;
//# sourceMappingURL=Persona.js.map