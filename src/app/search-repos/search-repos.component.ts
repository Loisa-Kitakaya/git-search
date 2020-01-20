import { Component, OnInit } from "@angular/core";
import { RepositoryInformation } from "../repos/repository-information";
import { HttpClient } from "@angular/common/http";
import { RepoArray } from "../repos/repo-array";
import { GetReposService } from "../get-repos-service/get-repos.service";
import { GetUsersService } from "../get-users-service/get-users.service";
import { environment } from 'src/environments/environment.prod';

//constants that hold the git api url and the api access tokens
const apiLink = `${environment.baseUrl}`;
const apiToken = `${environment.accessTokenRepo}`;

@Component({
  selector: "app-search-repos",
  templateUrl: "./search-repos.component.html",
  styleUrls: ["./search-repos.component.css"],
  providers: [GetUsersService, GetReposService]
})
export class SearchReposComponent implements OnInit {
  repo: RepositoryInformation;
  repoarray: RepoArray;
  username: string;

  constructor(private http: HttpClient, public requestRepos: GetReposService) {
    this.repo = new RepositoryInformation("", "", "", "", "");
  }

  //function to get user input
  getName(username: string) {
    this.requestRepos.getName(this.username);
    this.requestRepos.getRequest();
    this.repoarray = this.requestRepos.repoarray;
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
            this.repo.repoLink = response.html_url;
            this.repo.repoName = response.name;
            this.repo.repoDescription = response.description;
            this.repo.repoForks = response.forks;
            this.repo.repoLicense = response.license;

            resolve();
          },
          error => {
            this.repo.repoLink = "";
            this.repo.repoName = "";
            this.repo.repoDescription = "";
            this.repo.repoForks = "";
            this.repo.repoLicense = "";

            reject(error);
          }
        );
    });
    return promise;
  }

  ngOnInit() {
    this.requestRepos.username = "Loisa-Kitakaya";
    this.requestRepos.getRequest();
    this.repoarray = this.requestRepos.repoarray;
  }

  //on any changes to the DOM properties, fetch this
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.getName;
  }
}
