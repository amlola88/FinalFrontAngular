import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MercanciaService {

  constructor(public servicio:HttpClient) { }
/**Asi creamos la opcion para registrar desde el formulario.  Creamos una funcion en este caso
 registrarMercancia con la que puedo hacer la peticion post y creamos una variable url donde guardamos 
 el ep o url que es la ruta a la BD y luego retornamos el componente en este caso servicio
 llamamos el metodo post que es el que nos permite llevar datos a la BD y entre parentesis
 capturamos o llamamos las variables que creamos en el servicio (url, dato) 

 Vinculamos front con back por medio de la direccion url de la BD.
 */
  public registrarMercancia(dato:any):Observable<any>{
   /* Esto lo creamos para tratar de buscar un error, sin embargo lo dejamos porque
   es una forma de habilitar una cabecera.  Sin embargo en el momento el error solo era que
   faltaba el http// en la direccion url.
   const httpOptions={
      headers:new HttpHeaders({
        "Access-Control-Allow-Origin":"*"
      })
    }*/
    let url="http://localhost:8081/api/v1/mercancias"
    return  this.servicio.post(url,dato,)


  }
  public buscarMercancias():Observable<any>{
    let url="http://localhost:8081/api/v1/mercancias"
    return this.servicio.get(url)
  }
}
