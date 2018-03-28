export interface Faktura {
    dataWystawienia: string;
    dataPlatnosci: string;
    formaPlatnosci: string;
    sprzedawca: string;
    klient:string;
    nrFaktury:number;
    uwagi:string;
    hide: boolean;
}