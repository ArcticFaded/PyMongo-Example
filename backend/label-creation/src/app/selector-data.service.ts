import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectorDataService {

  constructor() { }
}
export namespace SELECTORS {
  export interface TagNames {
    name: string;
    properties?: any;
  } 
}

