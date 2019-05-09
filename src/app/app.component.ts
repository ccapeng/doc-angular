import { Component, NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { TopicComponent }    from './topic/topic.component';
 
import { AppRoutingModule }     from './app-routing.module';
import { DocService } from './doc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    TopicComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppComponent {
  title = "";
  constructor(private docService : DocService) {
    this.title = docService.getDoc().header;
  }

}
