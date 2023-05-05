import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private _http: HttpClient) {
    let baseUrl = 'http://localhost:8085/api/master_student';
  }

  addStudent(data: any): Observable<any> {
    return this._http.post('http://localhost:8085/api/master_student/add', data);
  }

  updateStudent(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:8085/api/master_student/update/${id}`, data);
  }

  getStudentList(): Observable<any> {
    return this._http.get('http://localhost:8085/api/master_student');
  }

  deleteStudent(id: number): Observable<any> {
    return this._http.delete(`http://localhost:8085/api/master_student/delete/${id}`);
  }
}
