import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { QuoteComponent } from  '../quote/quote.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {

  }

  openQuote() {
      this.dialog.open(QuoteComponent, {width: '800px', height: '600px'});
  }
}
