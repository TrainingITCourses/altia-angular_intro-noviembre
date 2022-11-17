import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";
import { BookTripRoutingModule } from "./book-trip-routing.module";
import { BookTripComponent } from "./book-trip.component";

@NgModule({
  declarations: [BookTripComponent],
  imports: [CommonModule, BookTripRoutingModule, ReactiveFormsModule],
})
export class BookTripModule {}
