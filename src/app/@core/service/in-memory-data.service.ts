import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';
import {Patient} from '../model/patient.model';
import {SensorStatus} from '../model/sensor-status.enum';
import {Chance} from 'chance';
import {Sensor} from '../model/sensor.model';

const chance: Chance = new Chance();

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  public createDb(): {} {
    const patients: Patient[] = [
      new Patient({id: '1', firstName: chance.first(), lastName: chance.last(), sensorId: 'S1', createdAt: new Date()}),
      new Patient({id: '2', firstName: chance.first(), lastName: chance.last(), sensorId: 'S2', createdAt: new Date()}),
      new Patient({id: '3', firstName: chance.first(), lastName: chance.last(), sensorId: 'S3', createdAt: new Date()}),
      new Patient({id: '4', firstName: chance.first(), lastName: chance.last(), sensorId: 'S4', createdAt: new Date()}),
      new Patient({id: '5', firstName: chance.first(), lastName: chance.last(), sensorId: 'S5', createdAt: new Date()}),
      new Patient({id: '6', firstName: chance.first(), lastName: chance.last(), sensorId: 'S6', createdAt: new Date()})
    ];

    const sensors: Sensor[] = [
      new Sensor({id: 'S1', status: SensorStatus.ENABLED}),
      new Sensor({id: 'S2', status: SensorStatus.ENABLED}),
      new Sensor({id: 'S3', status: SensorStatus.DISABLED}),
      new Sensor({id: 'S4', status: SensorStatus.ENABLED}),
      new Sensor({id: 'S5', status: SensorStatus.DISABLED}),
      new Sensor({id: 'S6', status: SensorStatus.DISABLED})
    ];

    return {
      patients,
      sensors
    };
  }
}
