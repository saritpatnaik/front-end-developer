import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'; 

@Component({
  selector: 'app-mydialog',
  templateUrl: './mydialog.component.html',
  styleUrls: ['./mydialog.component.css']
})
export class MydialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<MydialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);
  }
  closeDialog() {
    this.dialogRef.close();
  }
}