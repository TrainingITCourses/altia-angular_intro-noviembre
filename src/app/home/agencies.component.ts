import { Component, OnInit } from "@angular/core";
import { Agency } from "../core/models/agency.interface";

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
  agenciesRaw: Agency[] = [
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

  ngOnInit(): void {}
}
