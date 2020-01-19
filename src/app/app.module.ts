import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";
import { SearchUsersComponent } from "./search-users/search-users.component";
import { SearchReposComponent } from "./search-repos/search-repos.component";

const appRoutes: Routes = [
  { path: "repos", component: SearchReposComponent },
  { path: "users", component: SearchUsersComponent },
  { path: "welcome", component: WelcomePageComponent },
  { path: "", redirectTo: "/welcome", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    SearchUsersComponent,
    SearchReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
