import { Component, OnInit } from "@angular/core";
import { Agency } from "../core/models/agency.interface";
import { Trip } from "../core/models/trip.interface";
import { ApiService } from "../core/services/api.service";

@Component({
  selector: "app-home",
  template: `
    <app-agencies
      [agencies]="agenciesApi"
      (load)="onLoad($event)"></app-agencies>
    <app-trips [trips]="tripsApi" [errorMessage]="errorMessageApi"> </app-trips>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  agenciesApi: Partial<Agency>[] = [];
  agenciesRawApi: Agency[] = [];
  tripsApi: Trip[] = [];
  errorMessageApi = "";

  constructor(private api: ApiService) {
    this.loadAgencies();
    this.loadTrips();
  }

  ngOnInit(): void {}

  loadAgencies() {
    console.log("Loading agencies...");
    this.api.getAgencies$().subscribe((agencies) => {
      this.agenciesRawApi = agencies;
      this.agenciesApi = agencies;
      console.log(
        "1️⃣ antes en el espacio agencies: " + this.agenciesApi.length
      );
    });
    console.log("0️⃣ antes en el tiempo agencies: " + this.agenciesApi.length);
  }

  loadTrips() {
    // this.api.getTrips$().subscribe((trips) => {
    //   this.trips = trips;
    // });
    // this.api.getTrips$().subscribe((trips) => (this.trips = trips));
    // this.api.getTrips$().subscribe(
    //   (trips) => (this.trips = trips),
    //   (error) => (this.errorMessage = error.message)
    // );
    this.api.getTrips$().subscribe({
      next: (trips) => (this.tripsApi = trips),
      error: (error) => (this.errorMessageApi = error.message),
    });
  }

  onLoad(filter: string) {
    console.log("event on load ", filter);
    if (filter === "all") {
      this.agenciesApi = [...this.agenciesRawApi];
    } else {
      this.agenciesApi = this.agenciesRawApi.filter(
        (a) => a.status === "Active"
      );
    }
  }
}
