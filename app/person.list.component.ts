import {Component, OnInit} from "angular2/core";
import {PersonService} from "./person.service";
import {Person} from "./person";
import {Router, RouteParams} from 'angular2/router'

@Component({
    selector: "person-list",
    template:`
    <ul *ngFor="#person of people">
        <li (click)="onPersonClick(person)" class="person-item">{{person.name}}</li>
    </ul>
    `,
    providers: [PersonService],
    styles: [`
        .person-item{
            cursor: pointer;
        }
    `]
})
export class PersonListComponent implements OnInit{

    public people: Person[];
    constructor(
        private _personService: PersonService,
        private _router: Router
    ){}

    ngOnInit(){
        this._personService.getPeople().then(people => this.people = people);
    }

    onPersonClick(person){
        this._router.navigate(['PersonDetail', person]);
    }
}