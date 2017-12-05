import { Component } from '@angular/core';
import { BaNotificationMenuService } from './ba-notification-menu.service';

@Component({
  selector: 'ba-notification-menu',
  styleUrls: ['./ba-notification-menu.component.scss'],
  templateUrl: './ba-notification-menu.component.html',
  providers: [BaNotificationMenuService],
})
export class BaNotificationMenuComponent {
  public notifications: Object[];

  constructor(BaNotificationMenuService: BaNotificationMenuService) {
    this.notifications = BaNotificationMenuService.getNotifications();
  }
}
