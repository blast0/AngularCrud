import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseListComponent } from '../base/baseListComponent';
import { Department } from '../classes/department';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent extends BaseListComponent<Department> implements OnInit {

  form : FormGroup

  constructor(router: Router) {
    super(router);
    this.form = new FormGroup({
      Search : new FormControl(''),
      SortKey : new FormControl(''),
      IsSorted : new FormControl(false)
    })
  }

  ngOnInit(): void {
    this.setContentVarName(new Department())
  }

}
