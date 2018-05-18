import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user.model';
import { UserService } from '../user.service';
import { FormUserComponent } from '../form-user/form-user.component';
import {Router, ActivatedRoute} from '@angular/router'
import { error } from 'util';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

 private users:User[];

  constructor(private userService:UserService,
              private router:Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((res)=>{
      this.users=res;
      console.log(res);
    },(error)=>{
      console.log(error);
    });
  }

  deleteUser(user){
    this.userService.deleteUser(user.id).subscribe(()=>{
      this.users.splice(this.users.indexOf(user),1);
      console.log("Silme işlemi başarılı.")
    },
  (error)=>{
    console.log(error);
  });
  }

  updateUser(user){
    this.userService.setter(user);
    this.router.navigate(['/islem']);
  }

  createUser(){
    let user=new User(null,null,null);
    this.userService.setter(user);
    this.router.navigate(['/islem']);
  }

}
