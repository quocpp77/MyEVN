import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private firebase: AngularFireDatabase) { }

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

  empList: AngularFireList<any>;

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

  getEmployees() {
    this.empList = this.firebase.list('employees');
    return this.empList.snapshotChanges();
  }

  insertEmployee(emp) {
    this.empList.push({
      empCode: emp.empCode,
      firstName: emp.firstName,
      lastName: emp.lastName,
      gender: emp.gender,
      birthday: emp.birthday,
      deptId: emp.deptId,
      phone: emp.phone,
      email: emp.email,
      password: emp.password,
    });
  }

  updateEmployee(emp) {
    this.empList.update(emp.$key, {
      empCode: emp.empCode,
      firstName: emp.firstName,
      lastName: emp.lastName,
      gender: emp.gender,
      birthday: emp.birthday,
      deptId: emp.deptId,
      phone: emp.phone,
      email: emp.email,
      password: emp.password,
    });
  }

  deleteEmployee($key: string) {
    this.empList.remove($key);
  }

}
