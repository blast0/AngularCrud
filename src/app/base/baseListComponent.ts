import { Router } from "@angular/router";
import { BaseClass } from "../classes/baseClass";
import { Filter } from "../classes/filter";
import { BaseComponent } from "./baseComponent"

export class BaseListComponent<T extends BaseClass> extends BaseComponent<T>{
    
    //variable which determines maximum records displayed in a listing page
    maxContentsPerPage : number;

    constructor(private router: Router){
        super();
        this.maxContentsPerPage = 5;
    }

    //gets the current page number from session storage
    getPage(){
        let val = sessionStorage.getItem(this.contentVarName+'Page');
        let page = 1;
        if(val != null){
            page = parseInt(val);
        }
        return page;
    }
    
    //this function returns records that are to be displayed in listing page
    //this function takes all records in form of array and filter object of class filter
    //the filter object contains searchbox, sortkey and is sorted values
    //we apply filters and then return records that are to be displayed only in current page
    getRecordsByPage(contentCollection: Array<T>,filter: Filter){

        //filtering by search
        if(filter.Search.trim() != ''){
            contentCollection = contentCollection.filter(record => {
                return Object.values(record).filter(val =>{
                    return val.toString().toLowerCase().includes(filter.Search.toLowerCase());
                }).length != 0;
            })
        }

        //sorting by column key
        if(filter.IsSorted){
            function compare( a: any, b:any ) {
                let key = filter.SortKey;
                if ( a[key] < b[key] ){
                  return -1;
                }
                else if ( a[key] > b[key] ){
                  return 1;
                }
                return 0;
            }
            contentCollection.sort(compare);
        }
        let page = this.getPage()
        return contentCollection.splice(this.maxContentsPerPage*(page-1),this.maxContentsPerPage*page);
    }

    //used to remove record from collection
    removeRecord(id:string){
        this.contentCollection = this.getRecords();
        for(let i=0; i<this.contentCollection.length; i++){
            if(this.contentCollection[i].Id == id){
                this.contentCollection.splice(i,1);
                break;
            }
        }
        localStorage.setItem(this.contentVarName,JSON.stringify(this.contentCollection))
    }

    //changes page number value in session storage helps in relocating the page
    goToPage(page:number){ 
        if(page >= 1 && page <= this.getLastPage()){
            sessionStorage.setItem(this.contentVarName+'Page',page.toString());
        }
    }

    //returns the value of last page
    getLastPage(){
        let last = 0;
        let val = localStorage.getItem(this.contentVarName);
        if(val!=null){
            last = Math.floor(JSON.parse(val).length/this.maxContentsPerPage)+1;
        }
        return last;
    }
}