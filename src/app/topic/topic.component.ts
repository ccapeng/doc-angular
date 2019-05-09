import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocService } from '../doc.service';
import { Topic, TopicItem } from '../topic';


@Component({
  templateUrl: './topic.component.html'
})

export class TopicComponent implements OnInit {

  sections = [];
  topicId: string = "topic";
  topicURL: string = "";
  topicTemplate = "";
  topicName = "";
  topicComp: Topic;
  topicItems: TopicItem[];

  constructor(
    private route: ActivatedRoute,
    private docService : DocService
    ) {
      //this.topics = docService.getDoc();
      this.sections = docService.getDoc().sections;
  }

  ngOnInit() {
    let topicId = this.route.snapshot.paramMap.get('topic');
    this.topicId  = topicId;
    for (let j=0; j< this.sections.length; j++) {
      let topics = this.sections[j].topics;
      for (let i=0; i<topics.length;i++) {
        let topic:Topic = topics[i];
        if (topic.id == this.topicId) {
          this.topicComp = topic;
          this.topicName = topic.name;
          if (topic.items) {
            this.topicItems = topic.items;
          }
          break;
        }
      }
    }
  }

}