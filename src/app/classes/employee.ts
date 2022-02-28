import { BaseClass } from "./baseClass";

export class Employee extends BaseClass{
    Name: string;
    Age: number;
    constructor(){
        super();
        this.Name = '';
        this.Age = 0;
    }
}