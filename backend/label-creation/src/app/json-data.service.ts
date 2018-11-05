import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject, of, from } from 'rxjs';
import {Label} from './data-service'

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {

  private labelSource = new Subject<any>();

  labels$ = this.labelSource.asObservable();
  startIndex = 0
  public labels: Label[] = [];
  constructor(private http: HttpClient) { 
    this.http.get('http://localhost:5000/v1/widgets').subscribe((data: any) => {
      this.populateLabels(data);
    })
  }

  populateLabels(data: any) {
    this.labels = []
    for(let i = this.startIndex; i <= this.startIndex + data.length - 1; i++) {
      this.labels.push(new Label({key: 'swap', value: true}, 'name'))
      // break
    }
    this.labelSource.next(this.labels)
  }

  getLabels(): Observable<Label []> {
    return of(this.labels)
  }
}

export namespace Mutations {

}
