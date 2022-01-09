import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {

 
  title = 'welcome to tech quotes';
  quotes:Quote[] = [
    new Quote (1,'Vivian ','Human spirit',' When something is important enough, you do it even if the odds are not in your favor.','Elon Musk', new Date(2011,9,11),0,0),
    new Quote (2,'Kaiga ','Success','Success requires hard work, patience, resilience, talent, teamwork and yes, hard work again.','Chris Kirubi',new Date(2018,2,26),0,0),
    new Quote (3,'Kioko ','Global Warming','If you do not raise your voice, then your environmentalism means nothing; it is mere tokenism or opportunism.','Wangari Maathai',new Date(2012,4,23),0,0),
  
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote:any){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead:any, index:any){
    if (isRead) {
      let toDelete = confirm(`Do you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index:any){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }

constructor() { }

  ngOnInit() {
  }


}
