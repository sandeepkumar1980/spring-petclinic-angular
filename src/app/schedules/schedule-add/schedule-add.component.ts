import { Component, OnInit } from '@angular/core';
import {Vet} from '../../vets/vet';
import {VetService} from 'app/vets/vet.service';
import {Schedule} from '../schedule';
import {Router} from '@angular/router';
import {ScheduleService} from '../schedule.service';

@Component({
//  selector: 'app-schedule-add',
  selector: 'app-schedule-add',
  //templateUrl: './schedule-add.component.html',
  templateUrl: './schedule-add.component.html',
  //styleUrls: ['./schedule-add.component.css']
styleUrls: ['./schedule-add.component.css']
})
export class ScheduleAddComponent implements OnInit {
  schedule: Schedule;
  vets_list: Vet[];
  selected_vet: Vet;
  errorMessage: string;
  constructor(private vetService: VetService, private scheduleService: ScheduleService, private router: Router) {
    this.schedule = <Schedule>{};
    this.selected_vet = <Vet>{};
    //this.vets_list = [];
  }

  ngOnInit() {
    this.vetService.getVets().subscribe(
      vet => this.vets_list = vet,
      error => this.errorMessage = <any>error
    );
  }

  onSubmit(schedule: Schedule){
    schedule.id = null;

    if (this.selected_vet !== undefined) {
      //schedule.id.valueOf(this.selected_vet);
    }
    this.scheduleService.addVet(schedule).subscribe(
      new_schedule => {
        this.schedule = new_schedule;
        this.gotoVetList();
      },
      error => this.errorMessage = <any>error
    );
  }

  gotoVetList() {
    this.router.navigate(['/schedules']);
  }

}
