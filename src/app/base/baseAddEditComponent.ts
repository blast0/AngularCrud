import { BaseClass } from "../classes/baseClass";
import { BaseComponent } from "./baseComponent";
export class BaseAddEditComponent<T extends BaseClass> extends BaseComponent<T>{
    constructor(){
        super();
    }

    //returns record containing given id or null
    getRecordById(id:string){
        let record:T|null = null;
        if(id!=''){
            this.contentCollection = this.getRecords();
            let val = this.contentCollection.find(rec => {
                return id.valueOf() == rec.Id.toString().valueOf()
            })
            if(val!=null){
                record = val;
            }
        }
        return record;
    }

    //updates record add/edit
    //if prev record exists for given id, updates previous record
    //if no prev record exists, obtains max id from all previous records, then assigns max+1 as new id
    updateRecord(newRecord:T, id:string){
        let rec = this.getRecordById(id)
        this.contentCollection = this.getRecords();
        if(rec == null){
            if(this.contentCollection.length==0){
                newRecord.Id='1';
            }else
            {
            newRecord.Id = (Math.max.apply(Math, this.contentCollection.map(function(rec) { return parseInt(rec.Id); }))+1).toString()
            }
            this.contentCollection.splice(this.contentCollection.length,0,newRecord)
        }
        else{
            newRecord.Id = id;
            for(let i=0; i<this.contentCollection.length;i++){
                if(this.contentCollection[i].Id == id){
                    this.contentCollection.splice(i,1,newRecord);
                    break;
                }
            }
        }
        localStorage.setItem(this.contentVarName,JSON.stringify(this.contentCollection));
    }
}