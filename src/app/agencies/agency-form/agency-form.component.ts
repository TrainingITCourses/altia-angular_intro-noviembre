import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Agency } from "src/app/core/models/agency.interface";

@Component({
  selector: "app-agency-form",
  templateUrl: "./agency-form.component.html",
  styleUrls: ["./agency-form.component.css"],
})
export class AgencyFormComponent implements OnInit {
  @Output() save = new EventEmitter<Agency | null>();
  form: FormGroup = this.formBuilder.group({
    name: "Altia Stars",
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    console.log("submit");
    this.save.emit(null);
  }

  ngOnInit(): void {}
}
