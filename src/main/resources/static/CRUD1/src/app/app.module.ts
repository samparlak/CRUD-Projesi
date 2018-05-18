import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'



import { AppComponent } from './app.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { FormUserComponent } from './user/form-user/form-user.component';
import { UserService } from './user/user.service';
import { UserRoutingModule } from './user/user-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    FormUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserRoutingModule,
    FormsModule
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
