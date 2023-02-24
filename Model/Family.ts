export class Family {
    private _idFamily : number
    private _IdTown: number

    constructor(idFamily: number, IdTown: number) {
        this._idFamily = idFamily;
        this._IdTown = IdTown;
    }


    get IdFamily(): number {
        return this._idFamily;
    }

    set IdFamily(value: number) {
        this._idFamily = value;
    }

    get IdTown(): number {
        return this._IdTown;
    }

    set IdTown(value: number) {
        this._IdTown = value;
    }
}