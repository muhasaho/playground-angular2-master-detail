import {Component} from 'angular2/core'
import {OnInit} from "angular2/core";
import {Router, RouteParams} from "angular2/router";

@Component({
    selector:'person-detail',
    template:`
    <div>
        <span>Name: </span><span>{{name}}</span>
    </div>
    <div>
        <span>Age: </span><span>{{age}}</span>
    </div>
    `
})
export class PersonDetailComponent implements OnInit{

    public name: string;
    public age: number;

    constructor(
        private _routeParams:RouteParams
    ){}

    ngOnInit() {
        this.name = this._routeParams.get('name');
        this.age = parseInt(this._routeParams.get('age'));
    }
}