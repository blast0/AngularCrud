import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EmpComponent } from './emp/emp.component';
import { DeptComponent } from './dept/dept.component';
import { AddEditEmpComponent } from './add-edit-emp/add-edit-emp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditDeptComponent } from './add-edit-dept/add-edit-dept.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EmpComponent,
    DeptComponent,
    AddEditEmpComponent,
    AddEditDeptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
