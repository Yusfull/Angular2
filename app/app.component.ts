import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

import {PlayersListComponent} from  './products/players-list.component';
import {ProductService} from './products/product.service';

@Component({
    selector: 'fc-app',
    template: `<div>
                   <h1>{{pageTitle}}</h1>                                                                                                                                                             
                   <fc-maneger></fc-maneger>
              </div>`,
    directives: [PlayersListComponent],
    providers:[ProductService,
                HTTP_PROVIDERS]


})
export class AppComponent {
    pageTitle: string = "Product Management ";
}