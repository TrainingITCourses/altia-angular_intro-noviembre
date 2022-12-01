import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Agency } from "src/app/core/models/agency.interface";

@Component({
  selector: "app-agencies-table",
  templateUrl: "./agencies-table.component.html",
  styleUrls: ["./agencies-table.component.css"],
})
export class AgenciesTableComponent implements OnInit {
  @Input() agencies: Agency[] = [];
  @Output() delete = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onDeleteClick(agencyId: string | undefined) {
    this.delete.emit(agencyId);
  }
}
