import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = Observable.of('app');
}
