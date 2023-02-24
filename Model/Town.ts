export class Town {
    private _IdTown : number

    constructor(IdTown: number) {
        this._IdTown = IdTown;
    }

    get IdTown(): number {
        return this._IdTown;
    }

    set IdTown(value: number) {
        this._IdTown = value;
    }
}