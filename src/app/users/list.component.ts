import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { CrudService } from '@app/_services';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    partidas = null;

    constructor(private crudService: CrudService) {}

    ngOnInit() {
        this.crudService.getAll()
            .pipe(first())
            .subscribe(partidas => this.partidas = partidas);
    }
}