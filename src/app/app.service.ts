import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projeto } from '../assets/Projeto';

@Injectable()
export class AppService {
    private _Url = '../assets/portf.json';
    constructor(private _http: HttpClient) { }

    getProject(): Observable<Projeto[]> {
        return this._http.get<Projeto[]>(this._Url);
    }
}