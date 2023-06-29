import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  public formulario:FormGroup

  public constructor(public fabricaDatos:FormBuilder){
    this.formulario=this.inicializarFormulario()
  }

  public inicializarFormulario():FormGroup{
    return this.fabricaDatos.group({
      nombre:[''],
      descripcion:[''],
      fecha:[''],
      motivoDevolucion:[''],
      volumen:['']
    })
  }

  public capturarDatos():void{}

}
