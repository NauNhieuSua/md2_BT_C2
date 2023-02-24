import {Town} from "../Model/Town";
import {ITown} from "./ITown";

export class TownManager implements ITown {
    private _townManager: Town []
    constructor() {
        this._townManager=[]
    }

    addTown(Town: Town) {
    }

    get townManager(): Town[] {
        return this._townManager;
    }

    set townManager(value: Town[]) {
        this._townManager = value;
    }
}