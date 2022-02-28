import { BaseClass } from "../classes/baseClass";

export class BaseComponent<T extends BaseClass>{
    //collection array
    contentCollection : Array<T>;
    //collection variable name which is useful in getting data from local storage
    contentVarName :string

    constructor(){
        this.contentCollection = new Array<T>();
        this.contentVarName = '';
    }

    //returns array of all records 
    getRecords(){
        let val = localStorage.getItem(this.contentVarName);
        if(val != null){
            this.contentCollection = JSON.parse(val)
        }
        return this.contentCollection;
    }

    //sets the value of contentVarName, which is helpful in getting data from local storage
    //use pluralize instead of +'s' for optimal usage
    setContentVarName(t:T){
        this.contentVarName = t.constructor.name + 's';
    }
}