/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */

/**
 * @author Vitaliy Fedoriv
 */

import {Routes, RouterModule} from '@angular/router';
import {ScheduleListComponent} from './schedule-list/schedule-list.component';
import {ScheduleAddComponent} from './schedule-add/schedule-add.component';
import {NgModule} from '@angular/core';
import {ScheduleResolver} from './schedule-resolver';
import {SpecResolver} from '../specialties/spec-resolver';

const scheduleRoutes: Routes = [
  {path: 'schedules', component: ScheduleListComponent},
  {path: 'schedules/add', component: ScheduleAddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(scheduleRoutes)],
  exports: [RouterModule]
})

export class SchedulesRoutingModule {
}
