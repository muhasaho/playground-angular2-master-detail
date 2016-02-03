import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouterLink} from "angular2/router";

import {PersonListComponent} from "./person.list.component";
import {PersonDetailComponent} from "./person.detail";


@Component({
    selector: 'my-app',
    template: `
    <h1>Master Detail Example</h1>
    <nav>
        <a [routerLink]="['PersonList']">Person List</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/person-list', name:'PersonList', component:PersonListComponent},
    {path:'/person-detail/:name/:age', name:'PersonDetail', component:PersonDetailComponent}
])
export class AppComponent { }
