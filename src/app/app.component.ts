import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'HolaMundo';
  usuario = 'Julen384';

// Ésta función se ejecuta cuando en el Hijo (Saludo Component) se pulse un botón.
  recibirMensajeDelHijo(evento: string){
    alert(evento);
  }


}
