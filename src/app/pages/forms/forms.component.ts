declare const componentHandler: any;

import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'forms',
  template: `<employer-form></employer-form>`,
})
export class FormsComponent implements AfterViewInit {
  constructor() {
    console.log('forms component');
  }

  public ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
}
