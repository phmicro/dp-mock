import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FakeData, FAKE_DATA } from './fakeData'

@Injectable({
  providedIn: 'root'
})
export class FakeAPIService {

  constructor() { }

  getfakeData(): Observable<FakeData[]>{
    return of(FAKE_DATA)
  }

  createEntry(entry: FakeData){
    return null;
  }

}
