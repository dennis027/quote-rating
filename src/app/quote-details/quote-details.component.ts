import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote!: Quotes;
  @Output() isDeleted = new EventEmitter<boolean>();

  deleteQuote(read: boolean) {
    this.isDeleted.emit(read);
  }
  upCount(index: { upvote: number; }) {
    index.upvote += 1;  
  }
  downCount(index: { downvote: number; }) {
    index.downvote += 1;
  }
  constructor() { }
  ngOnInit(): void {
  }
}
