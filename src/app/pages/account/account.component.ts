import { Component } from '@angular/core';

import { UpgradeDomAfterViewInit } from 'pages/pages.helpers';

@Component({
  selector: 'account',
  template: `<employer-form></employer-form>`,
})
export class AccountComponent extends UpgradeDomAfterViewInit {}
