import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {
    let baseUrl = 'http://localhost:8085/api/master_employee';
  }

  addEmployee(data: any): Observable<any> {
    return this._http.post('http://localhost:8085/api/master_employee/add', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:8085/api/master_employee/update/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('http://localhost:8085/api/master_employee');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`http://localhost:8085/api/master_employee/delete/${id}`);
  }
}
