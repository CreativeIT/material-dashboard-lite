'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

{
    (function () {
        'use strict';

        var View = (function () {
            function View() {
                _classCallCheck(this, View);

                this.$todoList = document.getElementById('todo-list');
                this.deafultTemplate = '<label for="{{id}}" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect is-checked todo-list__checkbox">' + '<input type="checkbox" id="{{id}}" {{checked}} class="mdl-checkbox__input todo-list__checkbox-input" />' + '<span class="mdl-checkbox__label todo-list__checkbox-label">{{title}}</span>' + '</label>' + '<button for = "{{id}}" class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored destroy todo-list__destroy-button button_colored">' + '<i class="material-icons destroy-button__icon">clear</i>' + '</button>';
            }

            //export to window

            //view data from Model

            _createClass(View, [{
                key: '_prepareData',
                value: function _prepareData(data) {
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
            }, {
                key: 'showAll',
                value: function showAll(database) {
                    this.$todoList.innerHTML = '';
                    for (var i = 0; i < database.length; i++) {
                        var newLi = document.createElement('li');
                        newLi.classList.add('todo-list__item');
                        newLi.innerHTML = this._prepareData(database[i]);
                        this.$todoList.appendChild(newLi);
                    }
                    componentHandler.upgradeAllRegistered();
                }
            }, {
                key: 'show',
                value: function show(data) {
                    var newLi = document.createElement('li');
                    newLi.classList.add('todo-list__item');
                    newLi.innerHTML = this._prepareData(data);
                    this.$todoList.appendChild(newLi);
                    componentHandler.upgradeAllRegistered();
                }
            }]);

            return View;
        })();

        window.todoApp = window.todoApp || {};
        window.todoApp.View = View;
    })();
}