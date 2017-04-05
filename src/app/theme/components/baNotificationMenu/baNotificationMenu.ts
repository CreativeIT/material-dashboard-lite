import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ba-notification-menu',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./baNotificationMenu.scss'],
  templateUrl: './baNotificationMenu.html'
})
export class BaNotificationMenuComponent {

  private notifications: Object[];

  constructor() {

    this.notifications = [
      {
        text: 'You have 3 new orders.',
        time: 'just now',
        icon: 'plus_one',
        color: 'primary'
      }, {
        text: 'Database error',
        time: '1 min',
        icon: 'error_outline',
        color: 'secondary'
      }, {
        text: 'The Death Star is built!',
        time: '2 hours',
        icon: 'new_releases',
        color: 'primary'
      }, {
        text: 'You have 4 new mails.',
        time: '5 days',
        icon: 'mail_outline',
        color: 'primary'
      }

    ];
  }
}
