export class Filter {
    Search: string; //search box text value
    SortKey: string; //key or column name according to which sorting must be performed
    IsSorted: boolean; //should sort or not
    constructor(){
        this.Search = '';
        this.SortKey = '';
        this.IsSorted = false;
    }
}