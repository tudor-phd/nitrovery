import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatacollectionService {

  public baseURL = 'http://localhost:3200';
  constructor(public http: HttpClient) { }
  getPeople() {
    return  this.http.get(`${this.baseURL}/people`);
  }
}
