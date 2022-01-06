import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {

@Input() title!: string;
@Input() content!: string;
postLikes : number = 0;

onPostLikesUpdate = function (event:any) {
  //  this.postLikes = event;


}

posts : object[];

  constructor() {
  this.posts = [];
  }
  onSubmit(f:any) {
    let content = f.value.content;
    let title = f.value.title;
    this.posts.push({
      'title' : title,
      'content' : content
    })
  }



}
