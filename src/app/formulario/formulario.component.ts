import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { MercanciaService } from '../servicios/mercancia.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  public formulario:FormGroup

  public constructor(public fabricaDatos:FormBuilder, public peticion:MercanciaService ){
    this.formulario=this.inicializarFormulario()
  }

  public inicializarFormulario():FormGroup{
    return this.fabricaDatos.group({
      nombre:[''],
      descripcion:[''],
      fechaDeEntrada:[''],
      motivoDevolucion:[''],
      volumen:['']
    })
  }

  public capturarDatos():void{
    let datos= this.formulario.value
    let zona={
      id:1
    }
    datos.zona=zona
    console.log (datos)
    this.peticion.registrarMercancia(datos)
    .subscribe(respuesta=>{
      console.log(respuesta)
    })
  }

}
