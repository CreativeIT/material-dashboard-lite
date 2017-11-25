import { Component } from '@angular/core';
import { BaMsgMenuService } from './ba-msg-menu.service';

@Component({
  selector: 'ba-msg-menu',
  styleUrls: ['./ba-msg-menu.component.scss'],
  templateUrl: './ba-msg-menu.component.html',
  providers: [BaMsgMenuService],
})
export class BaMsgMenuComponent {
  public messages: Object[];

  constructor(baMsgMenuService: BaMsgMenuService) {
    this.messages = baMsgMenuService.getMessages();
  }
}
