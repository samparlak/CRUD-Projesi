import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { FormUserComponent } from './form-user/form-user.component';

const userRoutes:Routes=[
{path:'',component:ListUserComponent},
{path:'islem',component:FormUserComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(userRoutes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class UserRoutingModule { }
