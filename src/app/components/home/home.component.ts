import { Component, OnInit } from '@angular/core';
// form
import { FormControl } from '@angular/forms';
// rxjs
import { Observable } from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';


// export class State {
//   constructor(public name: string, public population: string, public flag: string) { }
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
  states = [
    {
      name: '中国',
      population: '20M',
      flag: 'www.baidu.com',
    }, {
      name: '美国',
      population: '',
      flag: '',
    }, {
      name: '日本',
      population: '',
      flag: '',
    }
  ];
  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => state ? this.filterStates(state) : this.states.slice())
    );

  }
  ngOnInit() {
    console.log(this.stateCtrl);
  }
  // 过滤名称
  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
}
