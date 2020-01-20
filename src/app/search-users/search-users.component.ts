import { Component, OnInit } from "@angular/core";
import { GetUsersService } from "../get-users-service/get-users.service";
import { UserInformation } from "../users/user-information";

@Component({
  selector: "app-search-users",
  templateUrl: "./search-users.component.html",
  styleUrls: ["./search-users.component.css"],
  providers: [GetUsersService]
})
export class SearchUsersComponent implements OnInit {
  user: UserInformation;
  username: string;

  constructor(private requestUser: GetUsersService) {}

  // function that injects the user service
  getName() {
    this.requestUser.getName(this.username);
    this.requestUser.getRequest();
    this.user = this.requestUser.user;
  }

  // on page load fetch this
  ngOnInit() {
    this.requestUser.username = "Loisa-Kitakaya";
    this.requestUser.getRequest();
    this.user = this.requestUser.user;
  }

  //on any changes to the DOM properties, fetch this
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.getName;
  }
}
