import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-book-trip",
  template: ` <h3> Book a trip </h3> <h2> {{ tripId }} </h2>`,
  styles: [],
})
export class BookTripComponent implements OnInit {
  tripId = "unknown";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.tripId = this.route.snapshot.params["tripId"];
  }
}
