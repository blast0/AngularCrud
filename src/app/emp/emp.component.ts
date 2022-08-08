import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router} from '@angular/router';
import { BaseListComponent } from '../base/baseListComponent';
import { Employee } from '../classes/employee';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent extends BaseListComponent<Employee> implements OnInit {

  form: FormGroup

  constructor(router: Router) {
    super(router);
    this.form = new FormGroup({
      Search : new FormControl(''),
      SortKey : new FormControl(''),
      IsSorted : new FormControl(false)
    })
  }

  ngOnInit(): void {
    this.setContentVarName(new Employee());
  }

}