import { Component } from '@angular/core';
import { BaNotificationMenuService } from './ba-notifications-menu.service';

@Component({
  selector: 'ba-notification-menu',
  styleUrls: ['./ba-notification-menu.component.scss'],
  templateUrl: './ba-notification-menu.component.html',
  providers: [BaNotificationMenuService],
})
export class BaNotificationMenuComponent {
  private notifications: Object[];

  constructor(BaNotificationMenuService: BaNotificationMenuService) {
    this.notifications = BaNotificationMenuService.getNotifications();
  }
}
