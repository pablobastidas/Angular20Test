import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {
  mostrarOcultarParrafo: boolean = false;

  nombreMes : string = "feb";

  listaCiudades: string[] = ["Santiago", "Buenos Aires", "Lima", "Bogotá", "Ciudad de México"];

  listaEstudiantes: any[] = 
  [
    {nombre: "Pablo", ciudad: "Santiago", edad: 33, activo: true},
    {nombre: "Camila", ciudad: "Santiago", edad: 28, activo: false},
    {nombre: "Mario", ciudad: "Viña del Mar", edad: 25, activo: false}
  ];

  mostrar(){
    this.mostrarOcultarParrafo = true;
  }

  ocultar(){
    this.mostrarOcultarParrafo = false;
  }

}
