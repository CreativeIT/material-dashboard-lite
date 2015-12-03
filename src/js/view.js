
{
    'use strict'
    class View {
        constructor() {
            this.$todoList = document.getElementById('todo-list');
            this.deafultTemplate
                = '<label for="{{id}}" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect is-checked">'
                + '<input type="checkbox" id="{{id}}" {{checked}} class="mdl-checkbox__input" />'
                + '<span class="mdl-checkbox__label">{{title}}</span>'
                + '</label>'
                + '<button for = "{{id}}" class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored destroy">'
                + '<i class="material-icons">clear</i>'
                + '</button>'

        }

//view data from Model
        _prepareData(data) {
            var template = this.deafultTemplate;
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

        showAll(database) {
            this.$todoList.innerHTML = '';
            for (var i = 0; i < database.length; i++) {
                var newLi = document.createElement('li');
                newLi.innerHTML = this._prepareData(database[i])
                this.$todoList.appendChild(newLi);
            }
            ;
            componentHandler.upgradeAllRegistered();
        }

        show(data) {
            var newLi = document.createElement('li');
            newLi.innerHTML = this._prepareData(data)
            this.$todoList.appendChild(newLi);
            componentHandler.upgradeAllRegistered();
        }
    }
//export to window
    window.todoApp = window.todoApp || {};
    window.todoApp.View = View;
}
