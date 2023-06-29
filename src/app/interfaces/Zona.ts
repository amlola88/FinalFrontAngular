import { Mercancia } from "./Mercancia";


export interface Zona{
    id:number,
    nombre: string,
    volumenZona:number,
    mercancia:Mercancia
}