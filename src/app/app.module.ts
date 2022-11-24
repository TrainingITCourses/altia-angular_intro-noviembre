import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import {
  FormFeedbackService,
  FormLessFeedbackService,
} from "./core/services/form-feedback.service";
import { HomeModule } from "./home/home.module";
import { MainComponent } from "./main.component";

const currentCulture = "en-US";
function myFactory() {
  if (currentCulture === "en-US") {
    return new FormFeedbackService();
  } else {
    return new FormLessFeedbackService();
  }
}
@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [AppRoutingModule, BrowserModule, CoreModule, HomeModule],
  providers: [
    {
      provide: FormFeedbackService,
      useFactory: myFactory,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
