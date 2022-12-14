import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "agencies",
    loadChildren: () =>
      import("./agencies/agencies.module").then((m) => m.AgenciesModule),
  },
  {
    path: "trips",
    loadChildren: () =>
      import("./trips/trips.module").then((m) => m.TripsModule),
  },
  {
    path: "book-trip/:tripId",
    loadChildren: () =>
      import("./book-trip/book-trip.module").then((m) => m.BookTripModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
