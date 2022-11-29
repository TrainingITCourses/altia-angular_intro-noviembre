import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Agency } from "../core/models/agency.interface";

@Component({
  selector: "app-agencies",
  template: `
    <h3>Working with {{ agencies.length }} space agencies</h3>
    <section>
      <button (click)="onClick('all')">All agencies</button>
      <button (click)="onClick('active')">Only actives</button>
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
  @Input() agencies: Partial<Agency>[] = [];
  @Output() load: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {}

  onClick(buttonCaption: string) {
    console.log("event click", buttonCaption);
    this.load.next(buttonCaption);
  }
}
