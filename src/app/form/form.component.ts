import { Component, OnInit, Input} from '@angular/core';
import { Quote } from '@angular/compiler';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
 @Input()newQuote = ("");
 @Input()newContent = ("");

  constructor() { }

  ngOnInit(): void {
  }

}
