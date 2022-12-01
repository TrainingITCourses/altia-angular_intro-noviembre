import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciesRoutingModule } from './agencies-routing.module';
import { AgenciesComponent } from './agencies.component';
import { AgenciesTableComponent } from './agencies-table/agencies-table.component';
import { AgencyFormComponent } from './agency-form/agency-form.component';


@NgModule({
  declarations: [
    AgenciesComponent,
    AgenciesTableComponent,
    AgencyFormComponent
  ],
  imports: [
    CommonModule,
    AgenciesRoutingModule
  ]
})
export class AgenciesModule { }
