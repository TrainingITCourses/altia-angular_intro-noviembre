import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <header>
      <strong>{{ title | uppercase }}</strong>
    </header>
    <main>
      <h3>Working with {{ agencies.length }} space agencies</h3>
      <section>
        <button (click)="loadAgencies()">All agencies</button>
        <button (click)="loadFilteredAgencies()">Only actives</button>
      </section>
      <ul>
        <li *ngFor="let agency of agencies">
          <span [class]="agency.status | lowercase">{{ agency.name }}</span>
          ➖
          <span *ngIf="agency.range === 'Orbital'">{{ agency.range }} 🌍</span>
          <span *ngIf="agency.range !== 'Orbital'">{{ agency.range }} 🪐</span>
        </li>
      </ul>
      <router-outlet></router-outlet>
    </main>
    <footer>
      <p>
        <a href="{{ repoUrl }}" target="_blank">
          {{ title }}
        </a>
        made by
        <a [href]="authorUrl" target="_blank">{{ author }}</a>
      </p>
    </footer>
  `,
  styles: [
    `
      .active {
        color: green;
      }
      .pending {
        color: orange;
      }
    `,
  ],
})
export class AppComponent {
  title = "Astro Bookings";
  author = "Alberto Basalo";
  repoUrl =
    "https://github.com/TrainingITCourses/altia-angular_intro-noviembre";
  authorUrl = "https://albertobasalo.dev";
  agencies: any[] = [];
  agenciesRaw = [
    { name: "Space X", range: "Interplanetary", status: "Active" },
    { name: "Blue Origin", range: "Orbital", status: "Active" },
    { name: "Virgin Galactic", range: "Orbital", status: "Pending" },
  ];
  trips = [
    {
      id: "space-y-moon-1",
      agencyId: "space-y",
      agencyTripCode: "moon",
      destination: "The Moon",
      places: 14,
      startDate: "2023-02-01",
      endDate: "2023-03-01",
      flightPrice: 1200000,
      stayingNightPrice: 10000,
      kind: "WithStay",
      status: "Confirmed",
      extraLuggagePricePerKilo: 2000,
      premiumFoodPrice: 0,
    },
    {
      id: "space-y-mars-2",
      agencyId: "space-y",
      agencyTripCode: "mars",
      destination: "Mars",
      places: 8,
      startDate: "2024-01-01",
      endDate: "2024-05-01",
      flightPrice: 8400000,
      stayingNightPrice: 10000,
      kind: "WithStay",
      status: "Confirmed",
      extraLuggagePricePerKilo: 50000,
      premiumFoodPrice: 0,
    },
    {
      id: "green-origin-low-orbit-3",
      agencyId: "green-origin",
      agencyTripCode: "low-orbit",
      destination: "Low Orbit",
      places: 0,
      startDate: "2022-04-01",
      endDate: "2022-04-01",
      flightPrice: 320000,
      stayingNightPrice: 0,
      kind: "TripOnly",
      status: "Waiting",
      extraLuggagePricePerKilo: 0,
      premiumFoodPrice: 1000,
    },
    {
      id: "green-origin-iss-4",
      agencyId: "green-origin",
      agencyTripCode: "iss",
      destination: "ISS",
      places: 6,
      startDate: "2022-06-01",
      endDate: "2022-06-01",
      flightPrice: 800000,
      stayingNightPrice: 0,
      kind: "TripOnly",
      status: "Waiting",
      extraLuggagePricePerKilo: 0,
      premiumFoodPrice: 1000,
    },
  ];

  constructor() {
    this.loadAgencies();
  }

  loadAgencies() {
    this.agencies = this.agenciesRaw;
  }
  loadFilteredAgencies() {
    this.agencies = this.agenciesRaw.filter((a) => a.status === "Active");
  }
}
