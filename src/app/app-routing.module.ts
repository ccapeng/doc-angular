import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopicComponent } from './topic/topic.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'topic/:topic', component: TopicComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '#', redirectTo: null },
];

@NgModule({
  //imports: [ RouterModule.forRoot(routes,{ enableTracing: true }) ],
  imports: [ RouterModule.forRoot(routes,{useHash: false}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }