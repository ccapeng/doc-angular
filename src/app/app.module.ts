import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { TopicComponent } from './topic/topic.component';
import { TopicItemComponent } from './topic-item/topic-item.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopicComponent,
    TopicItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }