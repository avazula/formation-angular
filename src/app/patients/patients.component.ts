import {Component} from '@angular/core';
import {Patient} from '../@core/model/patient.model';
import {Chance} from 'chance';
import {SensorStatus} from '../@core/model/sensor-status.enum';

const chance: Chance = new Chance();

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent {

  public patients: Patient[] = [
    new Patient({id: '1', firstName: chance.first(), lastName: chance.last(), sensorStatus: SensorStatus.ENABLED, createdAt: new Date()}),
    new Patient({id: '2', firstName: chance.first(), lastName: chance.last(), sensorStatus: SensorStatus.ENABLED, createdAt: new Date()}),
    new Patient({id: '3', firstName: chance.first(), lastName: chance.last(), sensorStatus: SensorStatus.DISABLED, createdAt: new Date()}),
    new Patient({id: '4', firstName: chance.first(), lastName: chance.last(), sensorStatus: SensorStatus.ENABLED, createdAt: new Date()}),
    new Patient({id: '5', firstName: chance.first(), lastName: chance.last(), sensorStatus: SensorStatus.DISABLED, createdAt: new Date()}),
    new Patient({id: '6', firstName: chance.first(), lastName: chance.last(), sensorStatus: SensorStatus.DISABLED, createdAt: new Date()})
  ];

  public enableSensor(patient: Patient): void {
    alert(`Le capteur de ${patient.displayName} a été activé avec succès`);
  }

  public disableSensor(patient: Patient): void {
    alert(`Le capteur de ${patient.displayName} a été désactivé avec succès`);
  }
}
