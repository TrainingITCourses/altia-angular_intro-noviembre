import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AgenciesComponent } from "./agencies.component";
import { HomeComponent } from "./home.component";
import { TripsComponent } from "./trips.component";

@NgModule({
  declarations: [HomeComponent, AgenciesComponent, TripsComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomeComponent],
})
export class HomeModule {}
