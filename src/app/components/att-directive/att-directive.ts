import { DatePipe, JsonPipe, LowerCasePipe, NgClass, NgStyle, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle, UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, JsonPipe, DatePipe],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css'
})
export class AttDirective implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  div1ClassName = signal<string>("");

  esDiv2Verde: boolean = false;

  primerNombre: string = "Pablo";

  nombreCurso: string = "ANGULAR 20 Tutorial";

  listaNumeros = [11,12,13,14,15,16,17];

  estudianteObj: any = {
    nombre : "Pablo",
    edad : 30,
    ciudad : "Concepción",
    estado : "Bio Bio"
  }

  fechaActual: Date = new Date();

  constructor(){
    console.log("Primero constructor");
  }

  setBgClass(classname : string){
    this.div1ClassName.set(classname);
  }

  toggleColorDiv2(){
    this.esDiv2Verde = ! this.esDiv2Verde;
  }

  ngOnInit(): void {
    //Para llamadas a API
    //Para suscribir
    console.log("ngOnInit");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
    
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
    
  }

  ngAfterViewInit(): void {
    //A veces para suscribirnos
    //Para la vista secundaria
    console.log("ngAfterViewInit");
    
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
    
  }

  ngOnDestroy(): void {
    //Cancelar la suscripción
    //Restringir al usuario desde la navegación
    console.log("ngOnDestroy");
    
  }

}
