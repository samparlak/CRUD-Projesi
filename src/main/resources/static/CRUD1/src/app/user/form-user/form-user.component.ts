import { Component, OnInit } from "@angular/core";
import { User } from "../../shared/user.model";
import { UserService } from "../user.service";
import { Router } from "@angular/router";
import { error } from "util";

@Component({
  selector: "app-form-user",
  templateUrl: "./form-user.component.html",
  styleUrls: ["./form-user.component.css"]
})
export class FormUserComponent implements OnInit {
  private user: User;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.user = this.userService.getter();
  }

  onSave() {
    if (this.user.id == undefined) {
      this.userService.createUser(this.user).subscribe(
        res => {
          console.log("Yeni Kişi Ekleme İşlemi başarılı." + res);
          this.router.navigate(["/"]);
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.userService.updateUser(this.user).subscribe(
        res => {
          this.router.navigate(['/']);
          console.log("Düzenleme işlemi başarılı." + res);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
