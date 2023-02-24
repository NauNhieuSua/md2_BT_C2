import {Person} from "./Model/Person";
import {Family} from "./Model/Family";
import {Town} from "./Model/Town";
import {FamilyManager} from "./Manager/FamilyManager";
import {PersonManager} from "./Manager/PersonManager";
import {TownManager} from "./Manager/TownManager";
import {ITown} from "./Manager/ITown";
import {IFamily} from "./Manager/IManagerFamily";
import {IManagerPerson} from "./Manager/IManagerPerson";


// @ts-ignore
let input = require('readline-sync')

let personList = new PersonManager()
let familyList = new FamilyManager()
let townList = new TownManager()
function MainMenu() {
    let choice = -1
    do {

        console.log(`
    ------Main Menu-----
    1.Thêm mới
    2.Hiển thị
    3.Tìm kiếm
    4.Edit
    5.Xóa
    0.Thoát
    `)
        choice =+input.question('Enter choice: ')
        switch (choice){
            case 1:
                MainAddMenu()
                break;
        }

    } while (choice != 0)
}

function MainAddMenu(){
    let choice = -1
    do {

        console.log(`
    ------Main Menu Add-----
    1.Nhập thông tin khu phố
    2.Nhập thông tin nhà
    3.Nhập thông tin người
    0.Thoát
    `)
        choice =+input.question('Enter choice: ')
        switch (choice){
            case 1:

                break;
            case 2:

                break;
            case 3:
                addPerson()
                break;
        }

    } while (choice != 0)
}

function addPerson(){
    let idPerson = +input.question('Enter Id: ')
  compareIDPerson(idPerson)
    let fullName = input.question('Enter Full Name : ')
    let age = +input.question('Enter age: ')
    let idFamily = +input.question('Enter ID Family: ')

    let person = new Person(idPerson,fullName,age,idFamily)
    personList.personManager.push(person)
}

function compareIDPerson(idPerson:number){
    if(personList.personManager.length==0){
        return idPerson
    } else {
        for (let i = 0; i < personList.personManager.length; i++) {
            if(personList.personManager[i].idPerson==idPerson){
                console.log(`IDPerson nhập đã tồn tại`)
                MainAddMenu()
            }else {
                return idPerson
            }
        }
    }
}

function compareIdFamily(idFamily:number){
    if(familyList.=0){
        return idPerson
    } else {
        for (let i = 0; i < personList.personManager.length; i++) {
            if(personList.personManager[i].idPerson==idPerson){
                console.log(`IDPerson nhập đã tồn tại`)
                MainAddMenu()
            }else {
                return idPerson
            }
        }
    }
}
}


MainMenu()