import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-add-edit',
  templateUrl: './student-add-edit.component.html',
  styleUrls: ['./student-add-edit.component.scss']
})
export class StudentAddEditComponent implements OnInit {
  studentForm: FormGroup;

  /*
  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];
  */

  constructor(
    private _fb: FormBuilder,
    private _studentService: StudentService,
    private _dialogRef: MatDialogRef<StudentAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.studentForm = this._fb.group({
      s_id: '',
      full_name: '',
      email: '',
      phone: '',
      address: '',
      nationality_id: '',
      emirates_id: '',
      passport_no: '',
      join_date: '',
      is_hosteler: ''
    });
  }

  ngOnInit(): void {
    this.studentForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.studentForm.valid) {
      if (this.data) {
        this._studentService
          .updateStudent(this.data.s_id, this.studentForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Student details updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._studentService.addStudent(this.studentForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Student added successfully');
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
