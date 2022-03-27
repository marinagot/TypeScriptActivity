import { Direccion } from "./Direccion";
import { Telefono, TelefonoEnum } from "./Telefono";
import { Mail } from "./Mail";

export type Color = "azul" | "rojo" | "verde" | "amarillo"; 
export type Genero = "masculino" | "femenino";

export class Persona {
    private nombre: string;
    private apellidos: string;
    private edad: string;
    private dni: string;
    private cumpleaños: Date;
    private colorFavorito: Color;
    private sexo: Genero;
    private direcciones: Direccion[];
    private mails: Mail[];
    private telefonos: Telefono[];
    private notas: string[];

    constructor(private _nombre?: string, private _apellidos?: string, private _edad?: string,
        private _dni?: string, private _cumpleaños?: Date, private _colorFavorito?: Color,
        private _sexo?: Genero){
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

    public getNombre(): string {
        return this.nombre;
    }

    public getApellidos(): string {
        return this.apellidos;
    }

    public getEdad(): string {
        return this.edad;
    }

    public getDNI(): string {
        return this.dni;
    }

    public getCumpleaños(): Date {
        return this.cumpleaños;
    }

    public getColorFavorito(): Color {
        return this.colorFavorito;
    }

    public getSexo(): Genero {
        return this.sexo;
    }

    public getDirecciones(): Direccion[]{
        return this.direcciones;
    }

    public getTelefonos(): Telefono[]{
        return this.telefonos;
    }

    public getMails(): Mail[]{
        return this.mails;
    }

    public getNotas(): string[]{
        return this.notas;
    }

    public setNombre(_nombre: string): void {
        this.nombre = _nombre;
    }

    public setApellidos(_apellidos: string): void {
        this.apellidos = _apellidos;
    } 

    public setEdad(_edad: string): void {
        this.edad = _edad;
    }

    public setDNI(_dni: string): void {
        this.dni = _dni;
    }

    public setCumpleaños(_cumpleaños: Date) {
        this.cumpleaños = _cumpleaños;
    }

    public setColorFavorito(_colorFavorito: Color): void {
        this.colorFavorito = _colorFavorito;
    }

    public setSexo(_sexo: Genero): void {
        this.sexo = _sexo;
    }

    public setDirecciones(_direcciones: Direccion[]){
        this.direcciones = _direcciones;
    }

    public setTelefonos(_telefonos: Telefono[]){
        this.telefonos = _telefonos;
    }

    public setMails(_mails: Mail[]){
        this.mails = _mails;
    }

    public setNotas(_notas: string[]){
        this.notas = _notas;
    }

    public setPersona(_nombre: string, _apellidos: string, _edad: string,
        _dni: string, _cumpleaños: Date, _colorFavorito: Color,
        _sexo: Genero, _direcciones: Direccion[], _telefonos: Telefono[],
        _mails: Mail[], _notas: string[]){
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
    
    public mostrarDirecciones(direcciones: Direccion[]): string[] {
        let  direccionAString: string;
        var direccionesAString: string[] = new Array();
        for (const direccion of direcciones) {
            direccionAString = "la calle es " + direccion.getCalle() + " número " + direccion.getNumero()
            + " piso " + direccion.getPiso() + " letra " + direccion.getLetra() + " código postal " +
            + direccion.getCodigoPostal() + " población " + direccion.getPoblacion() + " provincia " +
            direccion.getProvincia();
            direccionesAString.push(direccionAString);
        }
        return direccionesAString;
    }

    public mostrarTelefonos(telefonos: Telefono[]): string[] {
        let  telefonoAString: string;
        var telefonosAString: string[] = new Array();
        for (const telefono of telefonos) {
            telefonoAString = "el tipo es " + telefono.getTipo() + " y el número es " + telefono.getNumero();
            telefonosAString.push(telefonoAString);
        }
        return telefonosAString;
    }

    public mostrarMails(mails: Mail[]): string[] {
        let  mailAString: string;
        var mailsAString: string[] = new Array();
        for (const mail of mails) {
            mailAString = "el tipo es " + mail.getTipo() + " y la dirección es " + mail.getDireccion();
            mailsAString.push(mailAString);
        }
        return mailsAString;
    }

    public mostrarDatosPersona(): void {
        console.log("Los datos personales son: nombre " + this.getNombre() + ", apellidos " + this.getApellidos() +
        ", edad " + this.getEdad() + " años, con DNI " + this.getDNI() + ", su cumpleaños es el " 
        + this.getCumpleaños().getDate() + " de " + this.getCumpleaños().toLocaleString('default', { month: 'long' }) 
        + ", su color favorito es el " + this.getColorFavorito() + ", su sexo es " + this.getSexo()
        + ", las direcciones son " + this.mostrarDirecciones(this.getDirecciones()) + ", los teléfonos son " 
        + this.mostrarTelefonos(this.getTelefonos()) + ", los mails son " + this.mostrarMails(this.getMails())
        + " y las notas son " + this.getNotas().join(", ") + "\n");
    }

    public cambiarRegistro(): void {
        this.getDirecciones()[0].setDireccion("Calle Amoladera", "51", "4", "A", "28863", "Cobeña", "Madrid");
        console.log(this.mostrarDirecciones(this.getDirecciones()));
        this.getTelefonos()[0].setTelefono(TelefonoEnum.movil, "+34-692198494");
        console.log(this.mostrarTelefonos(this.getTelefonos()));
        this.getMails()[0].setMail("universidad", "eduardo.ponquinta@upm.es");
        console.log(this.mostrarMails(this.getMails()));
    }
}
