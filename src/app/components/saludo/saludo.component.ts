import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {

  @Input() nombre: string = "Anónimo";
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();

  myStyle: object = {
    color: 'blue',
    fontSize: '20px',
    fontWeight: 'bold'
  }

  constructor() { }

  ngOnInit(): void {
    /* Instrucciones previas a la renderización del componente (Todo que haya aquí se iniciará aquí antes de renderizar la página.) */
    console.log("ngOnInit del componente Saludo");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CAMBIO: Valor Anterior:', changes['nombre'].previousValue);
    console.log('CAMBIO: Valor Nuevo', changes['nombre'].currentValue);

  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy El componente va a desaparecer');
  }

  /*
  * Ejemplo para gestionar un evento de tipo click en el DOM y enviar un texto al componente padre.
  */

  enviarMensajeAlPadre(): void{
    /* alert(`Hola, ${ this.nombre }. Alerta despachada desde un click de botón`) */
    this.mensajeEmitter.emit(`Hola, ${ this.nombre }. Alerta despachada desde un click de botón`);
  }


}


// Orden de ciclo de vida de los componentes:
// * 1. ngOnChanges
// * 2. ngOnInit
//   3. ngAfterContentInit
//   4. ngAfterContentChecked
//   5. ngAfterViewInit
//   6. ngAfterViewChecked
//   7. ngAfterContentChecked
//   8. ngAfterViewChecked
// * 9. ngOnDestroy
