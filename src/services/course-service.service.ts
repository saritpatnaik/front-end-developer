import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private _http: HttpClient) { }

  getCourseDetails(){
    return this._http.get('https://api.myjson.com/bins/1fq8pm');
  }
}
