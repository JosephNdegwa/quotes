import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  numberOfLikes! : number
  
  constructor() { }

  ngOnInit(): void {
  }

}
