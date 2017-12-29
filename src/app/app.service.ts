import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Projeto } from '../assets/Projeto';

@Injectable()
export class AppService {
    private _Url = '../assets/portf.json';
    constructor(private _http: Http) { }

    getProjects(): Observable<Projeto[]> {
        return this._http.get(this._Url)
            .map( (response: Response) => <Projeto[]>response.json() )
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}