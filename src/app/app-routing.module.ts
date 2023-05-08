import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootAdminComponent } from './root-admin/root-admin.component';
import { AcademicsAdminComponent } from './academics-admin/academics-admin.component';
import { LibraryAdminComponent } from './library-admin/library-admin.component';
import { CanteenAdminComponent } from './canteen-admin/canteen-admin.component';
import { HostelAdminComponent } from './hostel-admin/hostel-admin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'root-admin', component: RootAdminComponent },
  { path: 'academics-admin', component: AcademicsAdminComponent },
  { path: 'library-admin', component: LibraryAdminComponent },
  { path: 'canteen-admin', component: CanteenAdminComponent },
  { path: 'hostel-admin', component: HostelAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
