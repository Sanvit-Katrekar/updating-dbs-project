import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { EmployeeService } from '../services/employee.service';
import {AbstractControl, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss'],
})
export class EmpAddEditComponent implements OnInit {
  empForm: FormGroup;

  managements: string[] = [
    'Not Assigned',
    'library',
    'academics',
    'hostel',
    'canteen'
  ]

  /*
  countries = [
    {
      "n_id": "IND",
      "nationality": "India"
    },
    {
      "n_id": "ARE",
      "nationality": "UAE"
    }
  ]
  */
  countries: any;

  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _dialogRef: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.empForm = this._fb.group({
      e_id: ['', Validators.required],
      full_name: '',
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      emirates_id: ['', Validators.required],
      nationality_id: '',
      designation: '',
      address: '',
      yearly_salary: '',
      join_date: '',
      management: ''
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
    this._coreService.getCountryList().subscribe({
      next: (res) => {
        this.countries = res.data;
      }
    })
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._empService
          .updateEmployee(this.data.e_id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Employee detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Employee added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
