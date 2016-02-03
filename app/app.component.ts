import {Component} from 'angular2/core';
import {PersonListComponent} from "./person.list.component"

@Component({
    selector: 'my-app',
    template: `
    <h1>Master Detail Example</h1>
    <person-list></person-list>
    `,
    directives: [PersonListComponent]
})
export class AppComponent { }
