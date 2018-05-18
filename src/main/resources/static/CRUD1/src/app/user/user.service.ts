import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../shared/user.model';




@Injectable()
export class UserService {

private user:User;



  constructor(private http:HttpClient) { }

getUsers(){
  return this.http.get<User[]>("http://localhost:8080/api/users");
}

deleteUser(id:number){
  return this.http.delete<number>("http://localhost:8080/api/user/"+id);
}

createUser(user){
  const headers=new HttpHeaders().set('Content-Type','application/json');
  return this.http.post<User>("http://localhost:8080/api/user",JSON.stringify(user),{
    headers:headers
  });
}

updateUser(user){
  const headers=new HttpHeaders().set('Content-Type','application/json');
  return this.http.put<User>("http://localhost:8080/api/user",JSON.stringify(user),{
    headers:headers
  });
  
}

  setter(user){
    this.user=user;
  }
  getter(){
    return this.user;
  }

}
