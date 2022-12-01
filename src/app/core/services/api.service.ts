import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { environment } from "src/environments/environment";
import { Agency } from "../models/agency.interface";
import { Booking } from "../models/booking.interface";
import { Trip } from "../models/trip.interface";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAgencies$() {
    return this.http.get<Agency[]>(`${this.apiUrl}/agencies`);
  }

  getActiveAgencies$() {
    return this.getAgencies$().pipe(
      map((agencies) => agencies.filter((a) => a.status === "Actibe")),
      map((agencies) => {
        if (agencies.length > 0) return agencies;
        else throw new Error("No active agencies found");
      })
    );
  }

  postAgency$(agency: Agency) {
    return this.http.post<Agency>(`${this.apiUrl}/agencies`, agency);
  }

  deleteAgency$(agency: Agency) {
    return this.http.delete<Agency>(`${this.apiUrl}/agencies/${agency.id}`);
  }

  getTrips$() {
    return this.http.get<Trip[]>(`${this.apiUrl}/trips`);
  }

  postBooking$(booking: Booking) {
    return this.http.post<Booking>(`${this.apiUrl}/bookings`, booking);
  }
}
