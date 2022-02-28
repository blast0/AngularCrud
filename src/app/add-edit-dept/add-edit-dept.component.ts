import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BaseAddEditComponent } from '../base/baseAddEditComponent';
import { Department } from '../classes/department';


@Component({
  selector: 'app-add-edit-dept',
  templateUrl: './add-edit-dept.component.html',
  styleUrls: ['./add-edit-dept.component.css']
})
export class AddEditDeptComponent extends BaseAddEditComponent<Department> implements OnInit {

  //id from url
  id: string;
  //result of form validation
  valid : boolean;
  //form group
  form : FormGroup

  constructor(private activatedRoute:ActivatedRoute) {
    super();
    this.id = '0';
    this.valid = false;
    this.form = new FormGroup({
      Name : new FormControl(''),
    })
  }

  //sets content var name
  //getting record from id obtained from url
  ngOnInit(): void {
    this.setContentVarName(new Department())
    this.activatedRoute.paramMap.subscribe((params: ParamMap)=> {
      let val = params.get('id');
      if(val != null){
        this.id = val;
        let record = this.getRecordById(this.id)
        if(record != null){
          this.form.setValue({
            Name: record.Name,
          });
        }
      }
    })
  }

  //validating form
  validate(formValue: any){
    if(formValue.Name.trim() != ''){
      this.valid = true;
    }
    else{
      this.valid = false;
    }
  }
}
