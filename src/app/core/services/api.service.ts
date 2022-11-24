import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Agency } from "../models/agency.interface";
import { Trip } from "../models/trip.interface";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAgencies$(): Observable<Agency[]> {
    return this.http.get<Agency[]>(`${this.apiUrl}/agencies`);
  }

  getTrips$(): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.apiUrl}/trips`);
  }
}
