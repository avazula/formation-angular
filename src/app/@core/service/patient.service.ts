import {Injectable} from '@angular/core';
import {Patient} from '../model/patient.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, mergeMap, tap, toArray} from 'rxjs/operators';
import {Sensor} from '../model/sensor.model';
import {Chance} from 'chance';

const chance: Chance = new Chance();

@Injectable()
export class PatientService {

  public constructor(private http: HttpClient) { }

  public findAll(): Observable<Patient[]> {
    return this.http.get('api/patients').pipe(
      mergeMap((data: any[]) => data),
      map((data: any) => new Patient(data)),
      mergeMap((patient: Patient) => this.http.get(`api/sensors/${patient.sensorId}`).pipe(
        map((data: any) => new Sensor(data)),
        tap((sensor: Sensor) => patient.sensor = sensor),
        map(() => patient),
      )),
      toArray()
    );
  }

  public findById(id: string): Observable<Patient> {
    return this.http.get(`api/patients/${id}`).pipe(
      map((data: any) => new Patient(data)),
      mergeMap((patient: Patient) => this.http.get(`api/sensors/${patient.sensorId}`).pipe(
        map((data: any) => new Sensor(data)),
        tap((sensor: Sensor) => patient.sensor = sensor),
        map(() => patient),
      ))
    );
  }

  public updateSensor(sensor: Sensor): Observable<void> {
    return this.http.put(
      `api/sensors`,
      {
        id: sensor.id,
        status: sensor.status
      }
    ).pipe(
      map(() => void 0)
    );
  }
}
