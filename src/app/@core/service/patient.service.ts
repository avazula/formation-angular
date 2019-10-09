import { Injectable } from '@angular/core';
import {Patient} from '../model/patient.model';
import {SensorStatus} from '../model/sensor-status.enum';
import {Chance} from 'chance';

const chance: Chance = new Chance();

@Injectable()
export class PatientService {

  private patients: Patient[] = [
    new Patient({id: '1', firstName: chance.first(), lastName: chance.last(), sensorStatus: SensorStatus.ENABLED, createdAt: new Date()}),
    new Patient({id: '2', firstName: chance.first(), lastName: chance.last(), sensorStatus: SensorStatus.ENABLED, createdAt: new Date()}),
    new Patient({id: '3', firstName: chance.first(), lastName: chance.last(), sensorStatus: SensorStatus.DISABLED, createdAt: new Date()}),
    new Patient({id: '4', firstName: chance.first(), lastName: chance.last(), sensorStatus: SensorStatus.ENABLED, createdAt: new Date()}),
    new Patient({id: '5', firstName: chance.first(), lastName: chance.last(), sensorStatus: SensorStatus.DISABLED, createdAt: new Date()}),
    new Patient({id: '6', firstName: chance.first(), lastName: chance.last(), sensorStatus: SensorStatus.DISABLED, createdAt: new Date()})
  ];

  public constructor() { }

  public findAll(): Patient[] {
    return this.patients;
  }
}
