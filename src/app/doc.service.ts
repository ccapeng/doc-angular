import { Injectable } from '@angular/core';
import docJson from '../assets/docs/docs.json';

@Injectable({
  providedIn: 'root'
})
export class DocService {
  doc = null;
  constructor() {
console.log(docJson);
    this.doc = docJson;
  }

  getDoc() {
    return this.doc;
  }
}
