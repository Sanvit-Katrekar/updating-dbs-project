import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(private _snackBar: MatSnackBar, private _http: HttpClient) {}

  openSnackBar(message: string, action: string = 'ok') {
    this._snackBar.open(message, action, {
      duration: 1000,
      verticalPosition: 'top',
    });
  }
  getCountryList(): Observable<any> {
    return this._http.get('http://localhost:8085/api/nationalities');
  }

}
