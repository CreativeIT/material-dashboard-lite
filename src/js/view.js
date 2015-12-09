{
    'use strict';

    class View {
        constructor() {
            this.$todoList = document.getElementById('todo-list');
            this.deafultTemplate
                = '<label for="{{id}}" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect is-checked todo-list__checkbox">'
                +   '<input type="checkbox" id="{{id}}" {{checked}} class="mdl-checkbox__input todo-list__checkbox-input" />'
                +   '<span class="mdl-checkbox__label todo-list__checkbox-label">{{title}}</span>'
                + '</label>'
                + '<button for = "{{id}}" class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored destroy todo-list__destroy-button button_colored">'
                +   '<i class="material-icons destroy-button__icon">clear</i>'
                + '</button>'

        }

//view data from Model
        _prepareData (data) {
            let template = this.deafultTemplate;
            template = template.replace('{{id}}', data.id);
            template = template.replace('{{id}}', data.id);
            template = template.replace('{{id}}', data.id);
            template = template.replace('{{title}}', data.title);
            if (data.completed === true) {
                template = template.replace('{{checked}}', 'checked');
            }
            return template;
            //template = template.replace('{{completed}}', completed);
            //template = template.replace('{{checked}}', checked);
        }

        showAll (database) {
            this.$todoList.innerHTML = '';
            for (let i = 0; i < database.length; i++) {
                let newLi = document.createElement('li');
                newLi.classList.add('todo-list__item');
                newLi.innerHTML = this._prepareData(database[i]);
                this.$todoList.appendChild(newLi);
            }
            componentHandler.upgradeAllRegistered();
        }

        show (data) {
            let newLi = document.createElement('li');
            newLi.classList.add('todo-list__item');
            newLi.innerHTML = this._prepareData(data);
            this.$todoList.appendChild(newLi);
            componentHandler.upgradeAllRegistered();
        }
    }
//export to window
    window.todoApp = window.todoApp || {};
    window.todoApp.View = View;
}
