import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [

    {id:1,name:'Maina'},
    {id:2,name:'Susan'},
    {id:3,name:'Rachel'},
    
  ];
  
}
