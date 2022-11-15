import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { HomeModule } from "./home/home.module";
import { MainComponent } from "./main.component";

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [AppRoutingModule, BrowserModule, CoreModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
