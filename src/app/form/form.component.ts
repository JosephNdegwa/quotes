import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
