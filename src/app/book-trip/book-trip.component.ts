import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Booking } from "../core/models/booking.interface";
import { ApiService } from "../core/services/api.service";

@Component({
  selector: "app-book-trip",
  template: `
    <h3> Book a trip </h3>
    <h2> {{ tripId }} </h2>
    <app-book-trip-form (save)="onSave($event)" [mustResetForm]="mustResetForm">
    </app-book-trip-form>
    <pre>{{ errorMessage }}</pre>
  `,
  styles: [],
  providers: [],
})
export class BookTripComponent implements OnInit {
  tripId: string = "";
  mustResetForm = false;
  errorMessage: string = "";

  // ToDo: Container presenters
  // ngIf pipe async

  constructor(
    private route: ActivatedRoute,

    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.tripId = this.route.snapshot.params["tripId"];
  }

  onSave(formValue: Partial<Booking>) {
    const booking: Booking = {
      ...formValue,
      date: new Date().toISOString(),
      id: this.tripId + "-" + formValue.customerEmail,
      status: "pending",
      tripId: this.tripId,
    } as Booking;
    console.log(booking);
    this.api.postBooking$(booking).subscribe({
      next: (booking) => (this.mustResetForm = true),
      error: (error) => (this.errorMessage = error.message),
    });
  }
}
