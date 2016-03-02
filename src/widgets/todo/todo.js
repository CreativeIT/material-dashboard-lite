{
  'use strict';

  /*==========MODEL==========*/

  class Model {
        constructor(database) {
          this.database = database ||
              [
                    {
                      title: 'Fix bugs',
                      id: 1651644545,
                      completed: ''
                    },

                    {
                      title: 'Implement 30% of my feature',
                      id: 1651646545,
                      completed: ''
                    },

                    {
                      title: 'Fencing',
                      id: 5451646545,
                      completed: 'checked'
                    },

                    {
                      title: 'Read an article about Test-Driven Development',
                      id: 5428646545,
                      completed: ''
                    }
                ];
        }

        createItem(title) {
          let newItem = {
            title: title,
            id: new Date().getTime(),
            completed: ''
          };
          this.database.push(newItem);
          return newItem;
        };

        checkItem(id) {
          for (let i = 0; i < this.database.length; i++) {
            if (id == this.database[i].id) {
              this.database[i].completed = (this.database[i].completed) ? '' : 'checked';
              return;
            }
          }
        };

        deleteItem(id) {
          for (let i = 0; i < this.database.length; i++) {
            if (id == this.database[i].id) {
              this.database.splice(i, 1);
              return;
            }
          }
        };

        deleteCompletedItems() {
          for (let i = 0; i < this.database.length; i++) {
            if (this.database[i].completed === 'checked') {
              this.database.splice(i, 1);
              i--;
            }
          }
        };
    }

  /*==========VIEW==========*/

  class View {
        constructor() {
          this.$todoList = document.querySelector('.todo .mdl-list');
          this.inputTemplate =
                `<div class="mdl-textfield mdl-js-textfield">
                         <input class="mdl-textfield__input" type="text" id="todo-input">
                         <label class="mdl-textfield__label" for="todo-input">What to do?..</label>
                     </div>`;
        }

        insertInput() {
          let newLi = document.createElement('li');
          newLi.classList.add('mdl-list__item');
          newLi.innerHTML = this._prepareTemplate({});
          this.$todoList.appendChild(newLi);
          View.upgradeNewMdlComponents();
          let inputSpan = document.querySelector('.todo .mdl-list li:last-child .mdl-checkbox__label');
          inputSpan.innerHTML = this.inputTemplate;
          View.upgradeNewMdlComponents();
          document.querySelector('.todo .mdl-list__item:last-child .mdl-textfield__input').focus();
        }

        _prepareTemplate(data) {
          return `<span class = "mdl-list__item-primary-content">
                        <label for="${data.id}" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" checkboxItem>
                            <input type="checkbox" id="${data.id}" ${data.completed} class="mdl-checkbox__input" />
                            <span class="mdl-checkbox__label">${data.title}</span>
                        </label>
                    </span>
                    <div class="mdl-list__item-secondary-content">
                        <button for = "${data.id}" class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdl-button--mini-icon pull-right" deleteItem>
                            <i class="material-icons">clear</i>
                        </button>
                    </div>`;
        }

        showAll(database) {
          this.$todoList.innerHTML = '';
          database.forEach(data => {
            let newLi = document.createElement('li');
            newLi.classList.add('mdl-list__item');
            newLi.innerHTML = this._prepareTemplate(data);
            this.$todoList.appendChild(newLi);
          });
          View.upgradeNewMdlComponents();
        }

        show(data) {
          let newLi = document.createElement('li');
          newLi.classList.add('mdl-list__item');
          newLi.innerHTML = this._prepareTemplate(data);
          this.$todoList.appendChild(newLi);
          View.upgradeNewMdlComponents();
        }

        static upgradeNewMdlComponents() {
          componentHandler.upgradeDom();
        }
    }

  /*==========CONTROLLER==========*/

  class Controller {
        constructor(model, view) {
          this.$addItemButton = document.querySelector('.todo .mdl-button--fab');
          this.$removeCompletedButton = document.querySelector('.todo .mdl-card__actions .mdl-button');
          this.model = model;
          this.view = view;

          this.view.$todoList.addEventListener('mouseup', event => {
            let clickTarget = event.path[1];
            if (clickTarget.hasAttribute('deleteItem')) {
              let id = clickTarget.getAttribute('for');
              this.model.deleteItem(id);
              this.removeItem(event);
            } else
                    if (clickTarget.hasAttribute('checkboxItem')) {
                      this.check(clickTarget);
                    } else {
                      clickTarget = event.target;
                      if (clickTarget.hasAttribute('checkboxItem')) {
                        this.check(clickTarget);
                      }
                    }
          });

          this.$addItemButton.addEventListener('click', () => {
            this.$addItemButton.setAttribute('disabled', 'true');
            this.$removeCompletedButton.setAttribute('disabled', 'true');
            this.view.insertInput();

            let inputTextArea = document.querySelector('.todo .mdl-list__item:last-child .mdl-textfield__input');
            inputTextArea.addEventListener('keydown', event => {
              if (event.keyCode === 27) {
                this.removeItem(event);
              } else {
                if (event.keyCode === 13) {
                  this.addItem(inputTextArea.value);
                  this.removeItem(event);
                }
              }
            });
          });

          this.$removeCompletedButton.addEventListener('click', () => {
            this.removeCompletedItems();
          });

          if (this.model.database != []) {
            this.view.showAll(this.model.database);
          }
        };

        addItem(title) {
          if (title.trim() === '') {
            return;
          }
          this.view.show(this.model.createItem(title));
        };

        removeItem(clickTarget) {
          for (let i = 0; i < clickTarget.path.length; i++) {
            if (clickTarget.path[i].className == 'mdl-list__item') {
              clickTarget.path[i].remove();
              break;
            }
          }
          this.$addItemButton.removeAttribute('disabled');
          this.$removeCompletedButton.removeAttribute('disabled');
        };

        removeCompletedItems() {
          this.model.deleteCompletedItems();
          this.view.showAll(this.model.database);
        };

        check(checkbox) {
          let id = checkbox.getAttribute('for');
          this.model.checkItem(id);
        };
    }

  /*==========INITIALIZE==========*/

  class Todo {
        constructor() {
          this.model = new Model();
          this.view = new View();
          this.controller = new Controller(this.model, this.view);
        }
    }

  let todo = new Todo();
}
