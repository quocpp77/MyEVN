import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { PeriodicElement } from '../../models/periodic-element';
import { PostsService } from '../../services/posts.service';

let ELEMENT_DATA: PeriodicElement[];

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'name', 'position', 'phone'];
  dataSource: any;
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  form: FormGroup = new FormGroup({
    smsPhone: new FormControl([]),
    smsContent: new FormControl('', Validators.required),
  });

  constructor(
    public postsService: PostsService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    ELEMENT_DATA = this.postsService.getPeriodic();
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  onSubmit() {
    this.selection.selected.forEach(e => {
      this.postsService.sendSms({
        branch: 'PB15',
        phone: e.phone,
        content: this.form.value['smsContent'],
        password: 'Me0c0n'
      }).subscribe(res => {
        this.toastr.success(`${e.name}`, `Sent to ${e.phone} !`);
      });
    })
  }

}
