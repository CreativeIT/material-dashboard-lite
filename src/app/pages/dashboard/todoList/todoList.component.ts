import {
  Component,
  ViewChild,
  ViewChildren,
  QueryList,
  ElementRef,
  Renderer,
} from '@angular/core';

@Component({
  selector: 'todo-list',
  styleUrls: ['./todoList.scss'],
  templateUrl: './todoList.html',
})
export class TodoListComponent {
  private items: Object[] = [
    {
      title: 'Fix bugs',
      id: 1651644545,
      completed: false
    },
    {
      title: 'Implement 30% of my feature',
      id: 1651646545,
      completed: false
    },
    {
      title: 'Fencing',
      id: 5451646545,
      completed: true
    },
    {
      title: 'Read an article about Test-Driven Development',
      id: 5428646545,
      completed: false
    }
  ];
  public createdItem: Object = null;

  @ViewChild('todoInput')
  set todoInput(element: ElementRef) {
    if (typeof(element) !== 'undefined') {
      this.renderer.invokeElementMethod(element.nativeElement, 'focus', []);
    }
  }

  @ViewChildren('listItem')
  private todoItems: QueryList<ElementRef>;

  constructor(private renderer: Renderer) {}

  public ngAfterViewInit(): void {
    this.todoItems.changes.subscribe(() => componentHandler.upgradeDom());
  }

  public deleteItem(item): void {
    this.items = this.items.filter((i) => i !== item);
  }

  public createItem(): void {
    this.createdItem = {
      title: '',
      id: Date.now(),
      completed: false,
    };
  }

  public addItem(): void {
    if (this.createdItem.title) {
      this.items.push(Object.assign({}, this.createdItem, { completed: false }));
    }
    this.createdItem = null;
  }

  public deleteCompletedItems(): void {
    this.items = this.items.filter((item: any) => !item.completed);
  }
}
