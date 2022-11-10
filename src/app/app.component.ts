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
