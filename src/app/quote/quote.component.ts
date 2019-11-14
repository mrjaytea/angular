import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import baseUrl from '../baseUrl';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<QuoteComponent>, @Inject('baseUrl') private baseUrl) { }

  ngOnInit() {
  }

  onDismiss() {
    this.dialogRef.close();
  }
}
