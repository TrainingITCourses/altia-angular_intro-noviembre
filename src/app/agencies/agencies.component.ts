import { Component, OnInit } from "@angular/core";
import { ApiService } from "../core/services/api.service";

@Component({
  selector: "app-agencies",
  templateUrl: "./agencies.component.html",
  styleUrls: ["./agencies.component.css"],
})
export class AgenciesComponent implements OnInit {
  constructor(private api: ApiService) {}

  ngOnInit(): void {}
}
