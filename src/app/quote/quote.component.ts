import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes("The greatest glory in living lies not in never falling, but in rising every time we fall", "Nelson Mandela", "Jospeh otieno", 0, 0, new Date(2012, 2, 17)),
    new Quotes("The way to get started is to quit talking and begin doing.", "Walt Disney", "Juma Allan", 0, 0, new Date(2014, 2, 1)),
    new Quotes("If life were predictable it would cease to be life, and be without flavor.", "Eleanor Roosevelt", "Kind Kid", 0, 0, new Date(2020, 2, 16)),
    new Quotes("Life is what happens when you're busy making other plans.", "John Lennon", "Dennis Kimani", 0, 0, new Date(2010, 3, 24)),
    new Quotes("Spread love everywhere you go. Let no one ever come to you without leaving happier." , "Mother Teresa", "Dennis Kimani", 0, 0, new Date(2010, 3, 24))
    
  ];
  addNewQuote(quote: Quotes) {
    this.quotes.push(quote)
  }
  toggleDetails(index: number) {
    this.quotes[index].toggleContent = !this.quotes[index].toggleContent;
  }
  deleteQuote(isDeleted: any, index: any) {
    if (isDeleted) {
      let remove = confirm(`Are you sure you want to delete this quote?`)
      if (remove) {
        this.quotes.splice(index, 1)
      }
    }
  }
  upCount(upvote: Quotes) {
    this.quotes.push(upvote)
  }
  downCount(downvote: Quotes) {
    this.quotes.push(downvote)
  }

  getMax(){
   return Math.max(...this.quotes.map(quote => quote.upvote))
  }
  constructor() { }

  ngOnInit(): void {
  }
}
