import {Component} from 'angular2/core';
import {PlayersListComponent} from  './players/players-list.component';

@Component({
  selector:'fc-app',
  template : `<div>
                   <h1>{{pageTitle}}</h1>                                                                                                                                                             
                   <fc-maneger></fc-maneger>
              </div>`,
              directives: [PlayersListComponent]
})
export class AppComponent{
    pageTitle: string ="Product Management ";
}