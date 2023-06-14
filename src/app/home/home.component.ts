import { Component } from '@angular/core';
import { Mercancia } from '../interfaces/Mercancia';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public mercancias:Mercancia[]=[]
 
  
  //quemando 4
  public mercancia1:Mercancia={
    id: 1,
    nombre: "Televisor",
    descripcion: "Televisor LED de 55 pulgadas",
    fecha: "2023-06-10",
    motivoDevolucion: "Pantalla rota",
    volumen: "1 metro",
    zona: {
      id: 2,
      nombre: "zona 2",
      tamaño: "15000",
      volumenZona: "zona 2"
    }
  }

  public mercancia2:Mercancia={
    id: 2,
    nombre: "Lavadora",
    descripcion: "Lavadora de carga frontal",
    fecha: "2023-06-11",
    motivoDevolucion: "No funciona el ciclo de centrifugado",
    volumen: "0.8 metros",
    zona: {
      id: 3,
      nombre: "zona 3",
      tamaño: "20000",
      volumenZona: "zona 3"
    }
  }

  public mercancia3:Mercancia={
    id: 3,
    nombre: "Mesa de comedor",
    descripcion: "Mesa de madera con capacidad para 6 personas",
    fecha: "2023-06-12",
    motivoDevolucion: "El tamaño no se ajusta al espacio disponible",
    volumen: "1.2 metros",
    zona: {
      id: 4,
      nombre: "zona 4",
      tamaño: "18000",
      volumenZona: "zona 4"
    }
  }

  public mercancia4:Mercancia={
    id: 4,
  nombre: "Silla de oficina",
  descripcion: "Silla ergonómica con respaldo ajustable",
  fecha: "2023-06-13",
  motivoDevolucion: "El sistema de ajuste no funciona correctamente",
  volumen: "0.5 metros",
  zona: {
    id: 5,
    nombre: "zona 5",
    tamaño: "12000",
    volumenZona: "zona 1"
    }
  }
  public mercancia5:Mercancia={
  id: 5,
  nombre: "Librero",
  descripcion: "Librero de madera con estantes ajustables",
  fecha: "2023-06-14",
  motivoDevolucion: "El acabado tiene imperfecciones",
  volumen: "0.9 metros",
  zona: {
    id: 6,
    nombre: "zona 6",
    tamaño: "10000",
    volumenZona: "zona 4"
  }
}
  public constructor (){
    this.mercancias.push(this.mercancia1)
    this.mercancias.push(this.mercancia2)
    this.mercancias.push(this.mercancia3)
    this.mercancias.push(this.mercancia4)
    this.mercancias.push(this.mercancia5)
    
    console.log(this.mercancias)
  }
}