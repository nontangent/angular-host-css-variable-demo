import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private elements: Map<string, ElementRef> = new Map();

  constructor() { }

  setElement(key: string, el: ElementRef) {
    this.elements.set(key, el);
  }

  getElement(key: string): ElementRef {
    return this.elements.get(key);
  }
}
