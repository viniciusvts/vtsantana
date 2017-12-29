import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Projeto } from '../../assets/Projeto';
import { AppService } from '../app.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {
  projs: Array<Projeto>;

  constructor(private _projQry: AppService) {
    this.ObtemListaProj();
  }

  ObtemListaProj(): void {
    this._projQry.getProjects()
      .subscribe((data: Projeto[]) => this.projs = data,
      error => console.log(error));
  }

  ngOnInit() {
  }

}
