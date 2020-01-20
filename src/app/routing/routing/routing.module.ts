import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";


import { SearchReposComponent } from 'src/app/search-repos/search-repos.component';
import { SearchUsersComponent } from 'src/app/search-users/search-users.component';
import { WelcomePageComponent } from 'src/app/welcome-page/welcome-page.component';

const appRoutes: Routes = [
  { path: "repos", component: SearchReposComponent },
  { path: "users", component: SearchUsersComponent },
  { path: "welcome", component: WelcomePageComponent },
  { path: "", redirectTo: "/welcome", pathMatch: "full" }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class RoutingModule {}
