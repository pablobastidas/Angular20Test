import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  nombreCurso: string = "Angular 20";
  precioProducto: number = 12500;
  maxLength : number = 5;
  minChar: number = 3;
  inputType: string = "checkbox";
  miColor: string = "miColor";

  constructor(){
  }

  showMensajeBienvenida(){
    alert("Bienvenidos al sitio de Angular 20")
  }

  setNombreCurso(){
    this.nombreCurso = "Cambio del nombre del curso"
  }

  setCiudad(){
    alert("Cambio de Ciudad")
  }
}
