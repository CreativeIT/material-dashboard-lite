'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

{
    (function () {
        'use strict';

        var Controller = (function () {
            function Controller(model, view) {
                var _this = this;

                _classCallCheck(this, Controller);

                this.$todoList = document.querySelector('.todo-list');
                this.$addButton = document.querySelector('.todo-card__add-button');
                this.$deleteButton = document.querySelector('.todo-card__remove-button');
                this.$destroyButton = document.getElementsByClassName('todo-list__destroy-button');
                this.$checkboxs = document.getElementsByClassName('mdl-checkbox');
                this.model = model;
                this.view = view;

                this.$addButton.addEventListener('click', function () {
                    var title = document.getElementById('newItem').value;
                    _this.addItem(title);
                });

                this.$deleteButton.addEventListener('click', function () {
                    _this.removeCompletedItems();
                });

                if (this.model.database != []) {
                    this.view.showAll(this.model.database);
                    this.addEvents();
                }
            }

            // export to window

            _createClass(Controller, [{
                key: 'addItem',
                value: function addItem(title) {
                    var _this2 = this;

                    if (title.trim() === '') {
                        return;
                    }

                    this.view.show(this.model.create(title));

                    document.querySelector('.todo-list__item:last-child > .todo-list__destroy-button').addEventListener('mouseup', function (event) {
                        _this2.removeItem(event.currentTarget);
                    });

                    document.querySelector('.todo-list__item:last-child > .todo-list__checkbox').addEventListener('mouseup', function (event) {
                        _this2.check(event.currentTarget);
                    });
                }
            }, {
                key: 'removeItem',
                value: function removeItem(destroyButton) {
                    var id = destroyButton.getAttribute('for');
                    this.view.showAll(this.model.database, this.model.deleteOne(id));
                    this.addEvents();
                }
            }, {
                key: 'removeCompletedItems',
                value: function removeCompletedItems() {
                    this.model.deleteCompleted();
                    this.view.showAll(this.model.database);
                    this.addEvents();
                }
            }, {
                key: 'check',
                value: function check(checkbox) {
                    var id = checkbox.getAttribute('for');
                    this.model.checkedItem(id);
                }
            }, {
                key: 'addEvents',
                value: function addEvents() {
                    var _this3 = this;

                    for (var i = 0; i < this.$destroyButton.length; i++) {
                        this.$destroyButton[i].addEventListener('click', function (event) {
                            _this3.removeItem(event.currentTarget);
                        });
                        this.$checkboxs[i].addEventListener('mouseup', function (event) {
                            _this3.check(event.currentTarget);
                        });
                    }
                }
            }]);

            return Controller;
        })();

        window.todoApp = window.todoApp || {};
        window.todoApp.Controller = Controller;
    })();
}