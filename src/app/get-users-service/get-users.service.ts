import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserInformation } from "../users/user-information";
import { resolve } from "url";
import { environment } from 'src/environments/environment.prod';

//constants that hold the git api url and the api access tokens
const apiLink = `${environment.baseUrl}`;
const apiToken = `${environment.accessTokenUser}`;

@Injectable({
  providedIn: "root"
})
export class GetUsersService {
  user: UserInformation;
  username: string;

  //constructor to define object properties
  constructor(private http: HttpClient) {
    this.user = new UserInformation("", "", "", "", "", "", "", "", new Date());
  }

  //function to get user input
  getName(username: string) {
    this.username = username;
  }

  //values to fetch
  getRequest() {
    interface ApiRequest {
      login: string;
      name: string;
      bio: any;
      public_repos: number;
      followers: number;
      following: number;
      avatar_url: any;
      html_url: any;
    }
    //make api request
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiRequest>(apiLink + this.username + apiToken)
        .toPromise()
        .then(
          response => {
            this.user.avatar = response.avatar_url;
            this.user.userName = response.login;
            this.user.name = response.name;
            this.user.bio = response.bio;
            this.user.repositories = response.public_repos;
            this.user.followers = response.followers;
            this.user.following = response.following;
            this.user.link = response.html_url;

            resolve();
          },
          error => {
            this.user.avatar =
              "https://avatars3.githubusercontent.com/u/45266348?v=4";
            this.user.userName = "Loisa-Kitakaya";
            this.user.name = "Loisa Kitakaya";
            this.user.bio = "";
            this.user.repositories = 25;
            this.user.followers = 10;
            this.user.following = 9;
            this.user.link = "https://github.com/Loisa-Kitakaya";

            reject(error);
          }
        );
    });
    return promise;
  }
}
