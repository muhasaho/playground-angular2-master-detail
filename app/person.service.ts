import {PEOPLE} from "./people-data";
import {Injectable} from "angular2/core";

@Injectable()
export class PersonService {
    getPeople(){
        return Promise.resolve(PEOPLE);
    }
}