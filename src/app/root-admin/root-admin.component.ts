import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';
import { EmployeeService } from '../services/employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from '../core/core.service';

import { StudentAddEditComponent } from '../student-add-edit/student-add-edit.component';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-root-admin',
  templateUrl: './root-admin.component.html',
  styleUrls: ['./root-admin.component.scss']
})

export class RootAdminComponent implements OnInit {
  title = 'campus-admin-client';
  employeeColumns: string[] = [
    'e_id',
    'full_name',
    'email',
    'phone',
    'emirates_id',
    'nationality_id',
    'designation',
    'address',
    'yearly_salary',
    'join_date',
    'management',
    'action'
  ];
  studentColumns: string[] = [
    's_id',
    'full_name',
    'email',
    'phone',
    'address',
    'nationality_id',
    'emirates_id',
    'passport_no',
    'join_date',
    'is_hosteler',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;
  dataSource2!: MatTableDataSource<any>;

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();
  /*
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator2!: MatPaginator;
  @ViewChild(MatSort) sort2!: MatSort;
  */

  constructor(
    private _dialog: MatDialog,
    private _empService: EmployeeService,
    private _studentService: StudentService,
    private _coreService: CoreService,
  ) {}

  ngOnInit(): void {
    console.log("Getting employee list: ")
    this.getEmployeeList();
    this.getStudentList();
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(EmpAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }
  openAddEditStudentForm() {
    const dialogRef = this._dialog.open(StudentAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getStudentList();
        }
      },
    });
  }

  getEmployeeList() {
    this._empService.getEmployeeList().subscribe({
      next: (res) => {
        for (let emp of res.data) {
          if (!emp.management) {
            emp.management = "Not Assigned";
          }
        }
        this.dataSource = new MatTableDataSource(res.data);
        /*
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        */
       this.dataSource.sort = this.sort.toArray()[0];
       this.dataSource.paginator = this.paginator.toArray()[0]
      },
      error: console.log,
    });
  }
  getStudentList() {
    this._studentService.getStudentList().subscribe({
      next: (res) => {
        this.dataSource2 = new MatTableDataSource(res.data);
        this.dataSource2.sort = this.sort.toArray()[1];
        this.dataSource2.paginator = this.paginator.toArray()[1];
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyFilter2(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue.trim().toLowerCase();

    if (this.dataSource2.paginator) {
      this.dataSource2.paginator.firstPage();
    }
  }

  deleteEmployee(id: number) {
    this._empService.deleteEmployee(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Employee deleted!', 'done');
        this.getEmployeeList();
      },
      error: console.log,
    });
  }
  deleteStudent(id: number) {
    this._studentService.deleteStudent(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Student deleted!', 'done');
        this.getStudentList();
      },
      error: console.log,
    });
  }

  openEmpEditForm(data: any) {
    const dialogRef = this._dialog.open(EmpAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }
  openStudentEditForm(data: any) {
    const dialogRef = this._dialog.open(StudentAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getStudentList();
        }
      },
    });
  }
  /*
  getCountryList() {
    this._coreService.getCountryList().subscribe({
      next: (res) => {
        this.countries = res.data;
      },
      error: console.log,
    });
  }
  */
}

