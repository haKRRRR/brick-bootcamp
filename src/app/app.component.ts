import { Component } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';
import { CrudService } from './_services';
import { Partidas } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    user: User;
    partida: Partidas;

    constructor(private accountService: AccountService, private crudService: CrudService) {
        this.accountService.user.subscribe(x => this.user = x);
        this.crudService.partida.subscribe(x => this.partida = x)
    }

    logout() {
        this.accountService.logout();
    }
}