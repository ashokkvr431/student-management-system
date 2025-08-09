import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  url = "http://10.70.9.16:3500/api/students";

  getStudents(): Observable<any> {
    return this.http.get(this.url);
  }

  addStudent(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  updateStudent(id: number, data: any): Observable<any> {
    return this.http.put(this.url + "/" + id, data);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(this.url + "/" + id);
  }
}
