import { Component } from '@angular/core';

import { Projeto } from '../../assets/Projeto';
import { AppService } from '../app.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {
  projs: Array<Projeto>;

  constructor(private _projQry: AppService) {
    this.ObtemListaProj();
  }

  ObtemListaProj(): void {
    this._projQry.getProject().subscribe(
      (data: Projeto[]) => this.projs = data, error => console.log(error)
    );
/*    this._projQry.getProjects()
      .subscribe((data: Projeto[]) => this.projs = data,
      error => console.log(error));
*/
  }

}
