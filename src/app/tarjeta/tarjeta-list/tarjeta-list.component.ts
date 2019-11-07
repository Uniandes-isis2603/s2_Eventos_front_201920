
import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import { Tarjeta } from '../tarjeta';
import { TarjetaService } from '../tarjeta.service';

@Component({
    selector: 'app-tarjeta',
    templateUrl: './tarjeta-list.html',
    styleUrls: [ './tarjeta-list.css' ]
})

export class TarjetaListComponent implements OnInit {

    constructor (
        private tarjetaService: TarjetaService
    ){  }

    tarjetas: Tarjeta[];

    getTarjetas(): void{
        this.tarjetaService.getTarjetas().subscribe( tarjetas => {
            this.tarjetas = tarjetas;
        })
    }



    ngOnInit() {
        this.getTarjetas();
    }
}