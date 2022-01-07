import { Component, Input } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {

 

 @Input() name!: string;
 @Input() content!: string;
 postLikes : number = 0;
 
onPostLikesUpdate = function (event:any) {
  //  this.postLikes = event;


}



constructor() { }

  ngOnInit() {
  }


}
