import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent {

@Input() title!: string;
@Input() content!: string;
postLikes : number = 0;

onPostLikesUpdate = function (event:any) {
  this.postLikes = event;


}



}
