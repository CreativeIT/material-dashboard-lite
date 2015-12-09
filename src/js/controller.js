{
    'use strict';

    class Controller {
        constructor(model, view) {
            this.$todoList = document.querySelector('.todo-list');
            this.$addButton = document.querySelector('.todo-card__add-button');
            this.$deleteButton = document.querySelector('.todo-card__remove-button');
            this.$destroyButton = document.getElementsByClassName('todo-list__destroy-button');
            this.$checkboxs = document.getElementsByClassName('mdl-checkbox');
            this.model = model;
            this.view = view;

            this.$addButton.addEventListener('click', () => {
                let title = document.getElementById('newItem').value;
                this.addItem(title);
            });

            this.$deleteButton.addEventListener('click', () => {
                this.removeCompletedItems();
            });

            if (this.model.database != []) {
                this.view.showAll(this.model.database);
                this.addEvents();
            }
        };

        addItem (title) {
            if (title.trim() === '') {
                return;
            }

            this.view.show(this.model.create(title));

            document.querySelector('.todo-list__item:last-child > .todo-list__destroy-button').addEventListener('mouseup', (event) => {
                this.removeItem(event.currentTarget);
            });

            document.querySelector('.todo-list__item:last-child > .todo-list__checkbox').addEventListener('mouseup', (event) => {
                this.check(event.currentTarget);
            });

        };

        removeItem (destroyButton) {
            let id = destroyButton.getAttribute('for');
            this.view.showAll(this.model.database, this.model.deleteOne(id));
            this.addEvents();
        };

        removeCompletedItems () {
            this.model.deleteCompleted();
            this.view.showAll(this.model.database);
            this.addEvents();
        };

        check (checkbox) {
            let id = checkbox.getAttribute('for');
            this.model.checkedItem(id);
        };

        addEvents () {
            for (let i = 0; i < this.$destroyButton.length; i++) {
                this.$destroyButton[i].addEventListener('click', (event) => {
                    this.removeItem(event.currentTarget);
                });
                this.$checkboxs[i].addEventListener('mouseup', (event) => {
                    this.check(event.currentTarget);
                });
            }
        };
    }
// export to window
    window.todoApp = window.todoApp || {};
    window.todoApp.Controller = Controller;

}