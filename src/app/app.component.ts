import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

@Component({
  selector: 'app',
  styleUrls: [
    './app.scss',
    './styles/styles.scss',
    './styles/headings.css',
    './application.scss',
    '../../bower_components/getmdl-select/getmdl-select.min.css',
  ],
  encapsulation: ViewEncapsulation.None,
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
