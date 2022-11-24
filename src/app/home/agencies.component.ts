import { Component, OnInit } from "@angular/core";
import { Agency } from "../core/models/agency.interface";
import { ApiService } from "../core/services/api.service";

@Component({
  selector: "app-agencies",
  template: `
    <h3>Working with {{ agencies.length }} space agencies</h3>
    <section>
      <button (click)="loadAgencies()">All agencies</button>
      <button (click)="loadFilteredAgencies()">Only actives</button>
    </section>
    <ul>
      <li *ngFor="let agency of agencies">
        <span [class]="agency.status | lowercase">{{ agency.name }}</span>
        <span *ngIf="agency.range === 'Orbital'">{{ agency.range }} 🌍</span>
        <span *ngIf="agency.range !== 'Orbital'">{{ agency.range }} 🪐</span>
      </li>
    </ul>
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
export class AgenciesComponent implements OnInit {
  agencies: Partial<Agency>[] = [];
  agenciesRaw: Agency[] = [];

  constructor(private api: ApiService) {
    this.loadAgencies();
  }

  loadAgencies() {
    console.log("Loading agencies...");
    this.api.getAgencies$().subscribe((agencies) => {
      this.agenciesRaw = agencies;
      this.agencies = agencies;
      console.log("1️⃣ antes en el espacio agencies: " + this.agencies.length);
    });
    console.log("0️⃣ antes en el tiempo agencies: " + this.agencies.length);
  }
  loadFilteredAgencies() {
    this.agencies = this.agenciesRaw.filter((a) => a.status === "Active");
  }

  ngOnInit(): void {}
}
