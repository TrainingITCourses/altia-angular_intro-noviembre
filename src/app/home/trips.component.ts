import { Component, Input, OnInit } from "@angular/core";
import { Trip } from "../core/models/trip.interface";

@Component({
  selector: "app-trips",
  template: `
    <h3>Offering {{ trips.length }} trips</h3>
    <ul>
      <ng-container *ngFor="let trip of trips">
        <li [class]="trip.status | lowercase">
          <span>๐ญ {{ trip.destination }}</span>
          <span>๐ง๐ผโ๐ {{ trip.places | number: "0.0" }}</span>
          <span>โคด๏ธ {{ trip.startDate | date: "dd-MMM-yyyy" }}</span>
          <span>๐ธ {{ trip.flightPrice | currency }}</span>
          <span role="button" [routerLink]="['book-trip', trip.id]">
            โ๐ผ Make a booking
          </span>
        </li>
      </ng-container>
    </ul>
    <pre> {{ errorMessage }} </pre>
  `,
  styles: [
    `
      .confirmed {
        color: green;
      }
      .waiting {
        color: orange;
      }
    `,
  ],
})
export class TripsComponent implements OnInit {
  @Input() trips: Trip[] = [];
  @Input() errorMessage = "";

  ngOnInit(): void {}
}
