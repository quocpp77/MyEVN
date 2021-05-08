import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCloudService {

  // endpoint: string = '[YOUR_DB_SERVER_IP]';
  baseUrl: string = 'https://localhost:44354/api/employee/';

  constructor(
    private http: HttpClient
  ) { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    empCode: new FormControl('', [Validators.required, Validators.minLength(5)]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl('0'),
    birthday: new FormControl('', Validators.required),
    deptId: new FormControl(0),
    phone: new FormControl('', Validators.required),
    email: new FormControl(''),
    password: new FormControl('123456'),
  });

  // empList: AngularFireList<any>;

  initFormGroup() {
    this.form.setValue({
      $key: null,
      empCode: '',
      firstName: '',
      lastName: '',
      gender: '0',
      birthday: '',
      deptId: 0,
      phone: '',
      email: '',
      password: '123456'
    });
  }

  populateFormGroup(emp) {
    this.form.setValue(_.omit(emp));
  }

  //GET
  getEmployees() {
    return this.http.get(`${this.baseUrl}/employee`);
  }

  //CREATE
  insertEmployee(emp: Employee) {
    this.http.post(`${this.baseUrl}/employee`, emp);
  }

  //UPDATE
  updateEmployee(emp: Employee) {
    this.http.put(`${this.baseUrl}/employee`, emp);
  }

  //DELETE
  deleteEmployee(empId: number) {
    this.http.delete(`${this.baseUrl}/employee` + empId);
  }
}
