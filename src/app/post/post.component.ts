import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

@Input() title!: string;
@Input() content!: string;
postVotes : number =0;

  constructor() { }

  ngOnInit(): void {
  }

}