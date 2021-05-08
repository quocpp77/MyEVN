import { NotificationService } from './../../services/notification.service';
import { DepartmentService } from './../../services/department.service';
import { EmployeeService } from './../../services/employee.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(
    public service: EmployeeService,
    public departmentService: DepartmentService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<EmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.service.getEmployees();
  }

  onSubmit() {
    if (this.service.form.valid) {
      if (!this.service.form.get('$key').value) {
        this.service.insertEmployee(this.service.form.value);
      }
      else
        this.service.updateEmployee(this.service.form.value);

      this.notificationService.success(':: Submitted successfully !');

      this.service.form.reset();
      this.service.initFormGroup();
      this.onClose();
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initFormGroup();

    this.dialogRef.close();
  }
}
