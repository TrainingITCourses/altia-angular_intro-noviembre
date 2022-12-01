import { Component, OnInit } from "@angular/core";
import { Agency } from "../core/models/agency.interface";
import { ApiService } from "../core/services/api.service";

@Component({
  selector: "app-agencies",
  templateUrl: "./agencies.component.html",
  styleUrls: ["./agencies.component.css"],
})
export class AgenciesComponent implements OnInit {
  constructor(private api: ApiService) {}

  loadAgencies() {}

  onDelete(agencyId: string) {}

  onSave(agency: Agency) {}

  ngOnInit(): void {}
}
