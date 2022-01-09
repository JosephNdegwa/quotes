import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import { PostComponent } from './post/post.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { HighlightQuoeDirective } from './highlight-quoe.directive';
import { DatePipePipe } from './date-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    PostComponent,
    FormComponent,
    HighlightQuoeDirective,
    DatePipePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
