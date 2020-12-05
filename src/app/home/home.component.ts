import { Component } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';
import { Partidas } from '@app/_models';
import { CrudService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User;
    partida: Partidas;

    constructor(private accountService: AccountService, private crudService: CrudService) {
        this.user = this.accountService.userValue;
        this.partida = this.crudService.userValue;
    }

}