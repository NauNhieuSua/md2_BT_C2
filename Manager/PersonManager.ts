import {Person} from "../Model/Person";
import {IManagerPerson} from "./IManagerPerson";

export class PersonManager implements IManagerPerson {
    private _personManager: Person[]

        constructor() {
        this._personManager = []
}
    addPerson(person: Person): void {
        this._personManager.push(person)
    }


    get personManager(): Person[] {
        return this._personManager;
    }

    set personManager(value: Person[]) {
        this._personManager = value;
    }
}