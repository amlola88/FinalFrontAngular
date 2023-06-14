import { Component } from '@angular/core';
import { Mercancia } from '../interfaces/Mercancia';
import { MercanciaService } from '../servicios/mercancia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public mercancias:Mercancia[]=[]
 
  public constructor (public peticion:MercanciaService){
    this.peticion.buscarMercancia()
    .subscribe((respuesta)=>{
    console.log(respuesta)
    this.mercancias=respuesta
    })        
  }
}