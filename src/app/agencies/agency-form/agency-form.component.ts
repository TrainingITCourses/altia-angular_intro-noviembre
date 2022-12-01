import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Agency } from "src/app/core/models/agency.interface";

@Component({
  selector: "app-agency-form",
  templateUrl: "./agency-form.component.html",
  styleUrls: ["./agency-form.component.css"],
})
export class AgencyFormComponent implements OnInit {
  @Output() save = new EventEmitter<Agency>();

  constructor() {}

  onSubmit() {
    console.log("submit");
  }

  ngOnInit(): void {}
}
