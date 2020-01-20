import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";
import { SearchUsersComponent } from "./search-users/search-users.component";
import { SearchReposComponent } from "./search-repos/search-repos.component";
import { RoutingModule } from './routing/routing/routing.module';

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
    RoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
