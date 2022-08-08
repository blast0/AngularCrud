import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BaseAddEditComponent } from '../base/baseAddEditComponent';
import { Employee } from '../classes/employee';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent extends BaseAddEditComponent<Employee> implements OnInit {

  //id from url
  id: string;
  //valid form or not
  valid : boolean;
  //form group
  form : FormGroup

  constructor(private activatedRoute:ActivatedRoute) {
    super();
    this.id = '0';
    this.valid = false;
    this.form = new FormGroup({
      Name : new FormControl(''),
      Age : new FormControl('')
    })
  }

  //sets content var name
  //getting record from id obtained from url
  ngOnInit(): void {
    this.setContentVarName(new Employee())
    this.activatedRoute.paramMap.subscribe((params: ParamMap)=> {
      let val = params.get('id');
      if(val != null){
        this.id = val;
        let record = this.getRecordById(this.id)
        if(record != null){
          this.form.setValue({
            Name: record.Name,
            Age: record.Age
          });
        }
      }
    })
  }

  //validating form
  validate(formValue: any){
    if(formValue.Name.trim() != '' && formValue.Age.trim() != '' && parseInt(formValue.Age.trim())>0 ){
      this.valid = true;
    }
    else{
      this.valid = false;
    }
  }
}
