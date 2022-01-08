import { Component, Input } from '@angular/core';
import { Quote } from '@angular/compiler';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {

 

 @Input() name!: any;
 @Input() content!: any;
 postLikes : number = 0;
 
  addNewQuote(name:any) {
    //let name = this.addNewQuote;
    //name.id = this.addNewQuote;
    //this.addNewQuote.push(name)
  }
 

onPostLikesUpdate = function (event:any) {
  //  this.postLikes = event;
}
onPostQuoteUpdate = function(event:any) {


}



constructor() { }

  ngOnInit() {
  }


}
