import { Component, Input } from '@angular/core';

@Component({
  selector: 'ba-card',
  styleUrls: ['./ba-card.component.scss'],
  templateUrl: './ba-card.component.html',
})
export class BaCardComponent {
  public withActions: boolean = false;
  public titleExpand: boolean = false;
  public bodyExpand: boolean = false;

  @Input('with-actions') public set setWithActions(value) {
    this.withActions = true;
  }

  @Input('title-expand') public set setTitleExpand(value) {
    this.titleExpand = true;
  }

  @Input('body-expand') public set setBodyExpand(value) {
    this.bodyExpand = true;
  }
}
