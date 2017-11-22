import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'table-card',
  styleUrls: ['./tableCard.scss'],
  templateUrl: './tableCard.html',
  encapsulation: ViewEncapsulation.None
})
export class TableCardComponent {

  public tableHeader: string[];
  public data: Object[];

  constructor() {
    let task1 = document.querySelector('#task1');
    let task2 = document.querySelector('#task2');
    let task4 = document.querySelector('#task4');

    /*    if (task1 && task2 && task4) {
     task1.addEventListener('mdl-componentupgraded', () => {
     task1.MaterialProgress.setProgress(44);
     });
     task2.addEventListener('mdl-componentupgraded', () => {
     task2.MaterialProgress.setProgress(14);
     });
     task4.addEventListener('mdl-componentupgraded', () => {
     task4.MaterialProgress.setProgress(31);
     });

     setTimeout(() => {
     document.querySelector('.projects-table .is-selected td > label').classList.add('is-checked');
     componentHandler.upgradeDom();
     }, 100);
     }*/

    this.tableHeader = ['Project', 'Responsible', 'Client contact', 'Deadline', 'Progress'];
    this.data = [
      {
        project: 'Darkboard',
        responsible: [
          {
            color: 'mint',
            name: 'Alex'
          },
          {
            color: 'primary',
            name: 'Dina'
          },
          {
            color: 'cerulean',
            name: 'Misha'
          }
        ],
        email: 'Luke@skywalker.com',
        deadline: 'Jun 15',
        progress: 44,
        isSelected: false
      },
      {
        project: 'Big financial app',
        responsible: [
          {
            color: 'baby-blue',
            name: 'Vlada'
          }
        ],
        email: 'Boss@financial.com',
        deadline: 'Mar 1',
        progress: 14,
        isSelected: true
      },
      {
        project: 'New Year office decoration',
        responsible: [
          {
            color: 'primary',
            name: 'Dina'
          },
          {
            color: 'baby-blue',
            name: 'Vlada'
          }
        ],
        email: 'info@creativeit.io',
        deadline: 'Dec 25',
        progress: 100,
        isSelected: false
      },
      {
        project: 'Don\'t worry, be happy!!!',
        responsible: [
          {
            color: 'secondary',
            name: 'Everybody'
          }
        ],
        email: 'Contact@happyness.com',
        deadline: 'Yesterday',
        progress: 31,
        isSelected: false
      }
    ];
  }
}
