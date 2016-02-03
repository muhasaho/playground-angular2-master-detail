import {Component, OnInit} from "angular2/core";
import {PersonService} from "./person.service";
import {Person} from "./person";

@Component({
    selector: "person-list",
    template:`
    <ul *ngFor="#person of people">
        <li (click)="onPersonClick(person)" class="person-item">{{person.name}}</li>
    </ul>
    <div *ngIf="currentPerson">
        <h3>Current Person</h3>
        <div>
            <span>Name: </span><span>{{currentPerson.name}}</span>
        </div>
        <div>
            <span>Age: </span><span>{{currentPerson.age}}</span>
        </div>
    </div>
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
    public currentPerson: Person;
    constructor(private _personService: PersonService){}

    ngOnInit(){
        this._personService.getPeople().then(people => this.people = people);
    }

    onPersonClick(person){
        this.currentPerson = person;
    }
}