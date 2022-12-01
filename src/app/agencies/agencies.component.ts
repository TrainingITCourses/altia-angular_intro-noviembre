import { Component, OnInit } from "@angular/core";
import { catchError, of, tap } from "rxjs";
import { Agency } from "../core/models/agency.interface";
import { ApiService } from "../core/services/api.service";

@Component({
  selector: "app-agencies",
  templateUrl: "./agencies.component.html",
  styleUrls: ["./agencies.component.css"],
})
export class AgenciesComponent implements OnInit {
  agencies$ = this.api.getActiveAgencies$().pipe(
    tap((activeAgencies) => console.log(activeAgencies)),
    catchError((err) => {
      this.errorMessage = err.message;
      return of([]);
    })
  );
  errorMessage = "";

  constructor(private api: ApiService) {}

  onDelete(agencyId: string) {}

  onSave(agency: Agency | null) {}

  ngOnInit(): void {}
}
