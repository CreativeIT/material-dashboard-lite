import { Component } from '@angular/core';

import { UpgradeDomAfterViewInit } from 'helpers';

@Component({
  selector: 'forms',
  template: `<employer-form></employer-form>`,
})
export class FormsComponent extends UpgradeDomAfterViewInit {}
