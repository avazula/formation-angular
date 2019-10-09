import {Component, OnInit} from '@angular/core';
import {Patient} from '../../@core/model/patient.model';
import {PatientService} from '../../@core/service/patient.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-patients',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  public patient$: Observable<Patient>;

  public constructor(private patientService: PatientService, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.patient$ = this.route.params.pipe(
      map((params: Params) => params[`patientId`]),
      mergeMap((patientId: string) => this.patientService.findById(patientId))
    );
  }

  public enableSensor(patient: Patient): void {
    this.patientService.updateSensor(patient.sensor).subscribe(
      () => alert(`Le capteur de ${patient.displayName} a été activé avec succès`)
    );
  }

  public disableSensor(patient: Patient): void {
    this.patientService.updateSensor(patient.sensor).subscribe(
      () => alert(`Le capteur de ${patient.displayName} a été désactivé avec succès`)
    );
  }
}
