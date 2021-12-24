import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

 @Input()numberOfLikes : number = 0;

    likeButtonClick() {
       this.numberOfLikes++;
  }

    dislikeButtonClick () {
      this.numberOfLikes--;
    }

  constructor() { }

  ngOnInit(): void {
  }

}
