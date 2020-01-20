import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RepoArray } from "../repos/repo-array";
import { environment } from 'src/environments/environment.prod';

//constants that hold the git api url and the api access tokens
const apiLink = `${environment.baseUrl}`;
const apiToken = `${environment.accessTokenRepo}`;

@Injectable({
  providedIn: "root"
})
export class GetReposService {
  repoarray: RepoArray;
  username: string;

  constructor(private http: HttpClient) {
    this.repoarray = new RepoArray("");
  }

  //function to get user input
  getName(username: string) {
    this.username = username;
  }

  //values to fetch
  getRequest() {
    interface ApiRequest {
      html_url: any;
      name: string;
      description: any;
      forks: any;
      license: any;
    }
    //make api request
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiRequest>(apiLink + this.username + apiToken)
        .toPromise()
        .then(
          response => {
            this.repoarray.repoArray = response;

            resolve();
          },
          error => {
            this.repoarray.repoArray = [];

            reject(error);
          }
        );
    });
    return promise;
  }
}
