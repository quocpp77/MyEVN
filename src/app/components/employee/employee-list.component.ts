import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { EmployeeService } from '../../services/employee.service';
import { EmployeeComponent } from './employee.component';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  displayedColumns: string[] = ['empCode', 'firstName', 'lastName', 'birthday', 'phone', 'email', 'deptId', 'actions'];
  dataSource: MatTableDataSource<any>;
  searchKey: string = '';

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      list => {
        let array = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
        this.dataSource = new MatTableDataSource(array);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {

    this.employeeService.initFormGroup();

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.panelClass = "custom-modalbox";

    const dialogRef = this.dialog.open(EmployeeComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(dialogConfig.data);
    });
  }

  onEdit(emp) {

    this.employeeService.populateFormGroup(emp);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.panelClass = "custom-modalbox";

    this.dialog.open(EmployeeComponent, dialogConfig);
  }

  onDelete($key) {
    if (confirm('Xác nhận xóa dữ liệu ?')) {
      this.employeeService.deleteEmployee($key);
    }
  }

}
