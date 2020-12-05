import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Partidas } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class CrudService {
    private partidasSubject: BehaviorSubject<Partidas>;
    public partida: Observable<Partidas>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.partidasSubject = new BehaviorSubject<Partidas>(JSON.parse(localStorage.getItem('partidas')));
        this.partida = this.partidasSubject.asObservable();
    }

    public get userValue(): Partidas {
        return this.partidasSubject.value;
    }

    getAll() {
        return this.http.get<Partidas[]>(`${environment.apiUrl}/users`);
    }
}