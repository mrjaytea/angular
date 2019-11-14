import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { QuoteComponent } from  '../quote/quote.component'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openQuote() {
    this.dialog.open(QuoteComponent, {width: '800px', height: '600px'});
}

}
