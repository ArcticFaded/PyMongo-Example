import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import { map } from 'rxjs/operators';
import { JsonDataService } from '../json-data.service'
import { Label } from '../data-service'
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { IDatasource } from 'ngx-ui-scroll';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit {
  labels: Label[] = [];
  selected: String = '';

  public datasource: IDatasource = {
    get: (index, count, callback) => {
      if(index < this.jsonDataService.startIndex) {
        count -= Math.abs(index - this.jsonDataService.startIndex)
        index = this.jsonDataService.startIndex
      }
      callback(this.labels.slice(index, index + count))
    }
    ,
    settings: {
      startIndex: this.jsonDataService.startIndex
    }
  }
  constructor(private breakpointObserver: BreakpointObserver, private jsonDataService: JsonDataService) {
    jsonDataService.labels$.subscribe(change => {
      this.labels = change
      console.log(this.datasource)
      this.datasource.adapter.reload();
    })
  }
  isSelected(id){
    // console.log()
    return this.selected === id
  }
  ngOnInit() {
    this.getLabels();
  }
  getLabels(){
    this.jsonDataService.getLabels()
      .subscribe(change => {
        this.labels = change
      })
  }
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Current Labels', cols: 1, rows: 1.25 },
        { title: 'Options', cols: 5, rows: 1.25 },
      ];
    })
  );
}
