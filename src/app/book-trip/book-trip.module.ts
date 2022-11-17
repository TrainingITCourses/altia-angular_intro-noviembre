import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookTripRoutingModule } from './book-trip-routing.module';
import { BookTripComponent } from './book-trip.component';


@NgModule({
  declarations: [
    BookTripComponent
  ],
  imports: [
    CommonModule,
    BookTripRoutingModule
  ]
})
export class BookTripModule { }
