import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Quote } from '@angular/compiler';





@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']

 
})

export class FormComponent {
 @Input()newQuote = ("");
 @Input()newContent = ("");

 @Output()
 addQuote = new EventEmitter<any>();
 addContent =new EventEmitter<any>();
submitButtonClick(Quote:any) {
  this.addQuote.emit(this.newQuote);
  this.addContent.emit(this.newContent)
}

constructor() { }

 ngOnInit() {
 }
}

