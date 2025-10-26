import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css'
})
export class SignalEx {
  primerNombre: string = "Pablo";

  nombreCurso = signal<string>("Angular 20");

  duracionCurso = signal("15 videos");

  detalleCurso = computed(() => this.nombreCurso() + this.duracionCurso())

  constructor(){
    this.primerNombre = "Pablo Alejandro";
    console.log(this.primerNombre);

    setTimeout(() =>{
      this.nombreCurso.set("React puro");
    }, 5000
    )
    console.log(this.nombreCurso());
  }
}
