export class Direccion {
    private calle: string;
    private numero: string;
    private piso: string;
    private letra: string;
    private codigoPostal: string;
    private poblacion: string;
    private provincia: string;

    constructor(private _calle?: string, private _numero?: string, private _piso?: string,
        private _letra?: string, private _codigoPostal?: string, private _poblacion?: string,
        private _provincia?: string) {
            this.calle = _calle || "";
            this.numero = _numero || "";
            this.piso = _piso || "";
            this.letra = _letra || "";
            this.codigoPostal = _codigoPostal || "";
            this.poblacion = _poblacion || "";
            this.provincia = _provincia || "";
    }

    public getCalle(): string {
        return this.calle;
    }

    public getNumero(): string {
        return this.numero;
    }

    public getPiso(): string {
        return this.piso;
    }

    public getLetra(): string {
        return this.letra;
    }

    public getCodigoPostal(): string {
        return this.codigoPostal;
    }

    public getPoblacion(): string {
        return this.poblacion;
    }

    public getProvincia(): string {
        return this.provincia;
    }

    public setCalle(_calle: string): void {
        this.calle = _calle;
    }

    public setNumero(_numero: string): void {
        this.numero = _numero;
    }

    public setPiso(_piso: string): void {
        this.piso = _piso;
    }

    public setLetra(_letra: string): void {
        this.letra = _letra;
    }

    public setCodigoPostal(_codigoPostal: string): void {
        this.codigoPostal = _codigoPostal;
    }

    public setPoblacion(_poblacion: string): void {
        this.poblacion = _poblacion;
    }

    public setProvincia(_provincia: string): void {
        this.provincia = _provincia;
    }

    public setDireccion(_calle: string, _numero: string, _piso: string, _letra: string,
        _codigoPostal: string, _poblacion: string, _provincia: string): void {
            this.setCalle(_calle);
            this.setNumero(_numero);
            this.setPiso(_piso);
            this.setLetra(_letra);
            this.setCodigoPostal(_codigoPostal);
            this.setPoblacion(_poblacion);
            this.setProvincia(_provincia);
        }
}
