///<reference path="../../../node_modules/@angular/router/src/interfaces.d.ts"/>
/*
 *
 *  * Copyright 2016-2018 the original author or authors.
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

import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {ScheduleService} from './schedule.service';
import {Schedule} from './schedule';

/**
 * @author Vitaliy Fedoriv
 */

@Injectable()
export class ScheduleResolver implements Resolve<Schedule> {

  constructor(private scheduleService: ScheduleService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Schedule> | Promise<Schedule> | Schedule {
    return this.scheduleService.getVetById(route.paramMap.get('id'));
  }

}
