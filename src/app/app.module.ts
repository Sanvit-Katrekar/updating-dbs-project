import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RootAdminComponent } from './root-admin/root-admin.component';
import { StudentAddEditComponent } from './student-add-edit/student-add-edit.component';
import { HomeComponent } from './home/home.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AcademicsAdminComponent } from './academics-admin/academics-admin.component';
import { LibraryAdminComponent } from './library-admin/library-admin.component';
import { HostelAdminComponent } from './hostel-admin/hostel-admin.component';
import { CanteenAdminComponent } from './canteen-admin/canteen-admin.component';

import { MatListModule } from '@angular/material/list';
import { NgOptimizedImage } from '@angular/common'

@NgModule({
  declarations: [AppComponent, EmpAddEditComponent, RootAdminComponent, StudentAddEditComponent, HomeComponent, AcademicsAdminComponent, LibraryAdminComponent, HostelAdminComponent, CanteenAdminComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatListModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
