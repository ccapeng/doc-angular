export class Topic {
  name: string;
  id: string;
  link?: string;
  items?: TopicItem[]
}

export class TopicItem {
  title: string;
  url: string;
}