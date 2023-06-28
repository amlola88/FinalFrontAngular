import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MercanciaService {

  constructor(public servicio:HttpClient) { }

  public registrarMercancia(){}
  public buscarMercancias():Observable<any>{
    let url="http://localhost:8081/api/v1/mercancias"
    return this.servicio.get(url)
  }
}
