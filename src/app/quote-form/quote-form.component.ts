import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  @Output() addQuote = new EventEmitter<Quotes>();

  newQuote = new Quotes("","","",0,0,new Date());

  submitQuote(){
    this.addQuote.emit(this.newQuote);
    //adds new quote without deleting existing
    this.newQuote = new Quotes("","","",0,0,new Date());
  }

  constructor() { }

  ngOnInit(): void {
  }

}
