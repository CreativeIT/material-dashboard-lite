import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ba-msg-menu',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./baMsgMenu.scss'],
  templateUrl: './baMsgMenu.html'
})
export class BaMsgMenuComponent {

  private message: Object[];

  constructor() {

    this.message = [
      {
        name: 'Alice',
        type: 'Birthday Party',
        time: 'just now',
        icon: 'A',
        color: 'primary'
      },
      {
        name: 'Mike',
        type: 'No theme',
        time: '5 min',
        icon: 'M',
        color: 'baby-blue'
      },
      {
        name: 'Darth',
        type: 'Suggestion',
        time: '23 hours',
        icon: 'D',
        color: 'cerulean'
      },
      {
        name: 'Don McDuket',
        type: 'NEWS',
        time: '30 Nov',
        icon: 'D',
        color: 'mint'
      }
    ];
  }
}
