/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';
import 'style-loader!./app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  template: `
   <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  constructor(public appState: AppState) {
  }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
