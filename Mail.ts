export type TipoMail = "personal" | "universidad" | "trabajo";

export class Mail {
    private tipo: TipoMail;
    private direccion: string;

    constructor(private _tipo?: TipoMail, private _direccion?: string){
        this.tipo = _tipo || "personal";
        this.direccion = _direccion || "";
    }

    public getTipo(): TipoMail {
        return this.tipo;
    }

    public getDireccion(): string {
        return this.direccion;
    }

    public setTipo(_tipo: TipoMail): void {
        this.tipo = _tipo;
    }

    public setDireccion(_direccion: string): void {
        this.direccion = _direccion;
    }

    public setMail(_tipo: TipoMail, _direccion: string): void {
        this.setTipo(_tipo);
        this.setDireccion(_direccion);
    }
}
