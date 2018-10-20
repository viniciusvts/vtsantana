import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  guia: number;
  pagina = NumeroGuia; // Numero de guia é o enum criado para passar as páginas
  // gets e sets de guia
  setGuia(num: number): void {
    this.guia = num;
  }
  isGuia( num: number): boolean {
    if ( this.guia === num) {
      return true;
    }
    return false;
  }
  // gets e set de guia
  constructor() {
    this.setGuia(this.pagina.Home);
  }

}

export enum NumeroGuia {
    Home = 0,
    Proj = 1
}
