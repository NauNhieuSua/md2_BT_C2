import {Family} from "../Model/Family";
import {IFamily} from "./IManagerFamily";

export class FamilyManager implements IFamily {
    private _familyManager: Family[]
    constructor() {
        this._familyManager= []
    }
    addFamily(Family: Family) {
        this._familyManager.push(Family)
    }

    get familyManager(): Family[] {
        return this._familyManager;
    }

    set familyManager(value: Family[]) {
        this._familyManager = value;
    }
}