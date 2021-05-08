import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsModule } from './materials.module';
import { SharedModule } from './shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { HomeComponent } from '../components/home/home.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { PostsComponent } from '../components/posts/posts.component';
import { EmployeeListComponent } from '../components/employee/employee-list.component';
import { EmployeeComponent } from './../components/employee/employee.component';

import { DashboardService } from '../services/dashboard.service';
import { PostsService } from '../services/posts.service';
import { EmployeeService } from './../services/employee.service';
import { DepartmentService } from './../services/department.service';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    HomeComponent,
    DashboardComponent,
    PostsComponent,
    EmployeeListComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  providers: [
    DashboardService,
    PostsService,
    EmployeeService,
    DepartmentService
  ],
  entryComponents: [
    EmployeeComponent
  ]
})
export class HomeModule { }
