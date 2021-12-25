import { Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

 @Input()numberOfLikes : number = 0;
 @Output()
 change: EventEmitter<number> = new EventEmitter<number>();

    likeButtonClick() {
       this.numberOfLikes++;
       this.change.emit(this.numberOfLikes);
  }

    dislikeButtonClick () {
      this.numberOfLikes--;
      this.change.emit(this.numberOfLikes);
    }

  

}
