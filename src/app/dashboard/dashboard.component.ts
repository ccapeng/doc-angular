import { Component} from '@angular/core';
//import { MockTopics }     from '../mock.Topics';
import { DocService } from '../doc.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

  sections ="";

  constructor(private docService : DocService) { 

    this.sections = docService.getDoc().sections;
    //console.log(this.sections);
  }

  trackElement(index: number, element: any) {
console.log(element.name);
    //return element ? element.guid : null;
    if(element.name==undefined) {
      return null;
    }
  }

}
