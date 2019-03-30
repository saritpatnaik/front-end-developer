import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../services/course-service.service';
import { MatDialog } from '@angular/material';
import { MydialogComponent } from './mydialog/mydialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = [];

  title = 'Course-Listings';
  constructor(private _courseService: CourseServiceService, public _dialog: MatDialog){}
  numberOfCourse: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._courseService.getCourseDetails().subscribe(
      data=>{
        console.log(data);
        this.numberOfCourse = data;
      }
    )
    //test

    // this.dropdownList = [
    //   { item_id: 1, item_text: 'Mumbai' },
    //   { item_id: 2, item_text: 'Bangaluru' },
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' },
    //   { item_id: 5, item_text: 'New Delhi' }
    // ];
    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];
    // this.dropdownSettings = {
    //   singleSelection: false,
    //   idField: 'item_id',
    //   textField: 'item_text',
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   itemsShowLimit: 3,
    //   allowSearchFilter: true
    // };
  
    //   onItemSelect(item: any) {
    //     console.log(item);
    //   }
    //   onSelectAll(items: any) {
    //     console.log(items);
    //   }
    // }
  }

  a: any;
  b: any;
  c: any;
  d: any;

  openDialog(a,b,c,d): void{ 
    let dialogRef = this._dialog.open( MydialogComponent  ,  {
        width: '300px',
        data: {
           some1: a,
           some2: b,
           some3: c,
           some4: d
        }
    });
    dialogRef.afterClosed().subscribe(result => {
        console.log("This dialog was closed");
    });
  } 
}
