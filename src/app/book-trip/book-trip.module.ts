import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { BookTripRoutingModule } from "./book-trip-routing.module";
import { BookTripComponent } from "./book-trip.component";
import { BookTripFormComponent } from './book-trip-form.component';

@NgModule({
  declarations: [BookTripComponent, BookTripFormComponent],
  imports: [CommonModule, BookTripRoutingModule, ReactiveFormsModule],
  providers: [],
})
export class BookTripModule {}
