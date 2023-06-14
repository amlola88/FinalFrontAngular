import {Zona} from "./Zona";

export interface Mercancia{
    id:number,
    nombre: string,
    descripcion:string,
    fecha:string,
    motivoDevolucion:string,
    volumen:string,
    zona:Zona    
}