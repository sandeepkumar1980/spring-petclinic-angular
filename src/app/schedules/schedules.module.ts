

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {ScheduleListComponent} from './schedule-list/schedule-list.component';
import {ScheduleService} from './schedule.service';
import {SchedulesRoutingModule} from './schedules-routing.module';
import {ScheduleAddComponent} from './schedule-add/schedule-add.component';
import {ScheduleResolver} from './schedule-resolver';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    SchedulesRoutingModule
  ],
  declarations: [
    ScheduleListComponent,
    ScheduleAddComponent
  ],
  exports: [
    ScheduleListComponent,
    ScheduleAddComponent
  ],
  providers: [ScheduleService, ScheduleResolver]
})
export class SchedulesModule {
}
