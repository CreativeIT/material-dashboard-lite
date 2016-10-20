'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

{
  (function () {
    'use strict';

    /*==========MODEL==========*/

    var Model = (function () {
      function Model(database) {
        _classCallCheck(this, Model);

        this.database = database || [{
          title: 'Fix bugs',
          id: 1651644545,
          completed: ''
        }, {
          title: 'Implement 30% of my feature',
          id: 1651646545,
          completed: ''
        }, {
          title: 'Fencing',
          id: 5451646545,
          completed: 'checked'
        }, {
          title: 'Read an article about Test-Driven Development',
          id: 5428646545,
          completed: ''
        }];
      }

      /*==========VIEW==========*/

      _createClass(Model, [{
        key: 'createItem',
        value: function createItem(title) {
          var newItem = {
            title: title,
            id: new Date().getTime(),
            completed: ''
          };
          this.database.push(newItem);
          return newItem;
        }
      }, {
        key: 'checkItem',
        value: function checkItem(id) {
          for (var i = 0; i < this.database.length; i++) {
            if (id == this.database[i].id) {
              this.database[i].completed = this.database[i].completed ? '' : 'checked';
              return;
            }
          }
        }
      }, {
        key: 'deleteItem',
        value: function deleteItem(id) {
          for (var i = 0; i < this.database.length; i++) {
            if (id == this.database[i].id) {
              this.database.splice(i, 1);
              return;
            }
          }
        }
      }, {
        key: 'deleteCompletedItems',
        value: function deleteCompletedItems() {
          for (var i = 0; i < this.database.length; i++) {
            if (this.database[i].completed === 'checked') {
              this.database.splice(i, 1);
              i--;
            }
          }
        }
      }]);

      return Model;
    })();

    var View = (function () {
      function View() {
        _classCallCheck(this, View);

        this.$todoList = document.querySelector('.todo .mdl-list');
        this.inputTemplate = '<div class="mdl-textfield mdl-js-textfield">\n                         <input class="mdl-textfield__input" type="text" id="todo-input">\n                         <label class="mdl-textfield__label" for="todo-input">What to do?..</label>\n                     </div>';
      }

      /*==========CONTROLLER==========*/

      _createClass(View, [{
        key: 'insertInput',
        value: function insertInput() {
          var newLi = document.createElement('li');
          newLi.classList.add('mdl-list__item');
          newLi.innerHTML = this._prepareTemplate({});
          this.$todoList.appendChild(newLi);
          View.upgradeNewMdlComponents();
          var inputSpan = document.querySelector('.todo .mdl-list li:last-child .mdl-checkbox__label');
          inputSpan.innerHTML = this.inputTemplate;
          View.upgradeNewMdlComponents();
          document.querySelector('.todo .mdl-list__item:last-child .mdl-textfield__input').focus();
        }
      }, {
        key: '_prepareTemplate',
        value: function _prepareTemplate(data) {
          return '<span class = "mdl-list__item-primary-content">\n                        <label for="' + data.id + '" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" checkboxItem>\n                            <input type="checkbox" id="' + data.id + '" ' + data.completed + ' class="mdl-checkbox__input" />\n                            <span class="mdl-checkbox__label">' + data.title + '</span>\n                        </label>\n                    </span>\n                    <div class="mdl-list__item-secondary-content">\n                        <button for = "' + data.id + '" class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdl-button--mini-icon pull-right" deleteItem>\n                            <i class="material-icons">clear</i>\n                        </button>\n                    </div>';
        }
      }, {
        key: 'showAll',
        value: function showAll(database) {
          var _this = this;

          this.$todoList.innerHTML = '';
          database.forEach(function (data) {
            var newLi = document.createElement('li');
            newLi.classList.add('mdl-list__item');
            newLi.innerHTML = _this._prepareTemplate(data);
            _this.$todoList.appendChild(newLi);
          });
          View.upgradeNewMdlComponents();
        }
      }, {
        key: 'show',
        value: function show(data) {
          var newLi = document.createElement('li');
          newLi.classList.add('mdl-list__item');
          newLi.innerHTML = this._prepareTemplate(data);
          this.$todoList.appendChild(newLi);
          View.upgradeNewMdlComponents();
        }
      }], [{
        key: 'upgradeNewMdlComponents',
        value: function upgradeNewMdlComponents() {
          componentHandler.upgradeDom();
        }
      }]);

      return View;
    })();

    var Controller = (function () {
      function Controller(model, view) {
        var _this2 = this;

        _classCallCheck(this, Controller);

        this.$addItemButton = document.querySelector('.todo .mdl-button--fab');
        this.$removeCompletedButton = document.querySelector('.todo .mdl-card__actions .mdl-button');
        this.model = model;
        this.view = view;

        this.view.$todoList.addEventListener('mouseup', function (event) {
          var clickTarget = event.path[1];
          if (clickTarget.hasAttribute('deleteItem')) {
            var id = clickTarget.getAttribute('for');
            _this2.model.deleteItem(id);
            _this2.removeItem(event);
          } else if (clickTarget.hasAttribute('checkboxItem')) {
            _this2.check(clickTarget);
          } else {
            clickTarget = event.target;
            if (clickTarget.hasAttribute('checkboxItem')) {
              _this2.check(clickTarget);
            }
          }
        });

        this.$addItemButton.addEventListener('click', function () {
          _this2.$addItemButton.setAttribute('disabled', 'true');
          _this2.$removeCompletedButton.setAttribute('disabled', 'true');
          _this2.view.insertInput();

          var inputTextArea = document.querySelector('.todo .mdl-list__item:last-child .mdl-textfield__input');
          inputTextArea.addEventListener('keydown', function (event) {
            if (event.keyCode === 27) {
              _this2.removeItem(event);
            } else {
              if (event.keyCode === 13) {
                _this2.addItem(inputTextArea.value);
                _this2.removeItem(event);
              }
            }
          });
        });

        this.$removeCompletedButton.addEventListener('click', function () {
          _this2.removeCompletedItems();
        });

        if (this.model.database != []) {
          this.view.showAll(this.model.database);
        }
      }

      /*==========INITIALIZE==========*/

      _createClass(Controller, [{
        key: 'addItem',
        value: function addItem(title) {
          if (title.trim() === '') {
            return;
          }
          this.view.show(this.model.createItem(title));
        }
      }, {
        key: 'removeItem',
        value: function removeItem(clickTarget) {
          for (var i = 0; i < clickTarget.path.length; i++) {
            if (clickTarget.path[i].className == 'mdl-list__item') {
              clickTarget.path[i].remove();
              break;
            }
          }
          this.$addItemButton.removeAttribute('disabled');
          this.$removeCompletedButton.removeAttribute('disabled');
        }
      }, {
        key: 'removeCompletedItems',
        value: function removeCompletedItems() {
          this.model.deleteCompletedItems();
          this.view.showAll(this.model.database);
        }
      }, {
        key: 'check',
        value: function check(checkbox) {
          var id = checkbox.getAttribute('for');
          this.model.checkItem(id);
        }
      }]);

      return Controller;
    })();

    var Todo = function Todo() {
      _classCallCheck(this, Todo);

      this.model = new Model();
      this.view = new View();
      this.controller = new Controller(this.model, this.view);
    };

    var todoContainer = document.querySelector('.todo');
    if (todoContainer) {
      var todo = new Todo();
    }
  })();
}