export enum TelefonoEnum {fijo, movil, trabajo};

export class Telefono {
    private tipo: TelefonoEnum;
    private numero: string;

    constructor(private _tipo?: TelefonoEnum, private _numero?: string){
        this.tipo = _tipo || TelefonoEnum.fijo;
        this.numero = _numero || "";
    }

    public getTipo(): string {
        return TelefonoEnum[this.tipo];
    }

    public getNumero(): string {
        return this.numero;
    }

    public setTipo(_tipo: TelefonoEnum): void {
        this.tipo = _tipo;
    }

    public setNumero(_numero: string): void {
        this.numero = _numero;
    }

    public setTelefono(_tipo: TelefonoEnum, _numero: string): void {
        this.setTipo(_tipo);
        this.setNumero(_numero);
    }
}
