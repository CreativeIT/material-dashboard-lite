declare const componentHandler: any;

import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'forms',
  template: `<employer-form></employer-form>`,
})
export class FormsComponent implements AfterViewInit {
  public ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
}
