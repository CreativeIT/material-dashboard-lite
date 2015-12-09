'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

{
    (function () {
        'use strict';

        var Model = (function () {
            function Model(database) {
                _classCallCheck(this, Model);

                this.database = database || [{
                    title: 'First Item',
                    id: 1651646545,
                    completed: false
                }, {
                    title: 'Second Item',
                    id: 5451646545,
                    completed: true
                }, {
                    title: 'Trird Item',
                    id: 8751646545,
                    completed: false
                }, {
                    title: 'Very long-long super item',
                    id: 5428646545,
                    completed: true
                }, {
                    title: '5',
                    id: 9851786545,
                    completed: true
                }, {
                    title: '6',
                    id: 6751646545,
                    completed: false
                }, {
                    title: '7',
                    id: 4551786545,
                    completed: true
                }];
            }

            // export to window

            _createClass(Model, [{
                key: 'create',
                value: function create(title) {
                    var newItem = {};
                    newItem.title = title;
                    newItem.id = new Date().getTime();
                    newItem.completed = false;
                    this.database.push(newItem);
                    return newItem;
                }
            }, {
                key: 'checkedItem',
                value: function checkedItem(id) {
                    for (var i = 0; i < this.database.length; i++) {
                        if (id == this.database[i].id) {
                            this.database[i].completed = this.database[i].completed ? false : true;
                        }
                    }
                }
            }, {
                key: 'deleteOne',
                value: function deleteOne(id) {
                    for (var i = 0; i < this.database.length; i++) {
                        if (id == this.database[i].id) {
                            this.database.splice(i, 1);
                        }
                    }
                }
            }, {
                key: 'deleteCompleted',

                //remove completed items
                value: function deleteCompleted() {
                    for (var i = 0; i < this.database.length; i++) {
                        if (this.database[i].completed == true) {
                            this.database.splice(i, 1);
                            i--;
                        }
                    }
                }
            }]);

            return Model;
        })();

        window.todoApp = window.todoApp || {};
        window.todoApp.Model = Model;
    })();
}