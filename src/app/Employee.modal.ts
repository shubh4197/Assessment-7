import {personal} from "./personal.modal";
import {Edu} from "./Educational.modal";

export class Employee
{   id:number=0;
    personal:personal;
    educational:Edu;
    constructor(id,personal,educational){
        this.id=id;
        this.personal=personal;
        this.educational=educational;
    }
}