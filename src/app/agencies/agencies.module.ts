import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";
import { AgenciesRoutingModule } from "./agencies-routing.module";
import { AgenciesTableComponent } from "./agencies-table/agencies-table.component";
import { AgenciesComponent } from "./agencies.component";
import { AgencyFormComponent } from "./agency-form/agency-form.component";

@NgModule({
  declarations: [
    AgenciesComponent,
    AgenciesTableComponent,
    AgencyFormComponent,
  ],
  imports: [CommonModule, AgenciesRoutingModule, ReactiveFormsModule],
})
export class AgenciesModule {}
