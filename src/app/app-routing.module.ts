import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditDeptComponent } from './add-edit-dept/add-edit-dept.component';
import { AddEditEmpComponent } from './add-edit-emp/add-edit-emp.component';
import { DeptComponent } from './dept/dept.component';
import { EmpComponent } from './emp/emp.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/menu'},
  {path:'menu', component:MenuComponent},
  {path:'emp', component:EmpComponent},
  {path:'emp/:id', component:AddEditEmpComponent},
  {path:'dept', component:DeptComponent},
  {path:'dept/:id', component:AddEditDeptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
