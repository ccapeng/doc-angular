import { Component, ElementRef, Input, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { TopicItem} from '../topic';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-topic-item',
  templateUrl: './topic-item.component.html',
  styleUrls: ['./topic-item.component.css']
})
export class TopicItemComponent implements OnInit {
  //export class TopicItemComponent {

  @Input() item:TopicItem;

  constructor(
    private el: ElementRef, 
    private http: HttpClient,
    private sanitizer: DomSanitizer
    ) {}
  
  ngOnInit(){
    let src = this.item.url;
    var elm = this.el.nativeElement;
    this.http.get(src,{responseType:"text"}).subscribe(
      response => {
        elm.innerHTML = response;
        let scripts = elm.getElementsByTagName("script");
        for (let i=0; i<scripts.length; i++) {
          let s = scripts[i].textContent;
          eval(s);
        }
      }
    );
  }
}
