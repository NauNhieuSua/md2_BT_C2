export class Person {
    private _idPerson : number
    private _fullName: string
    private _age : number;
    private _idFamily : number


    constructor(idPerson: number, fullName: string, age: number, idFamily: number) {
        this._idPerson = idPerson;
        this._fullName = fullName;
        this._age = age;
        this._idFamily = idFamily;
    }


    get idPerson(): number {
        return this._idPerson;
    }

    set idPerson(value: number) {
        this._idPerson = value;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        this._fullName = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get idFamily(): number {
        return this._idFamily;
    }

    set idFamily(value: number) {
        this._idFamily = value;
    }
    getinfo(){
        return`Họ và tên: ${this.fullName} | Tuổi : ${this.age} | CMT : ${this._idPerson} | Số nhà: ${this.idFamily}`
    }
}