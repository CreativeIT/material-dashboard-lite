(function (window) {
    'use strict';

    function Controller(model, view) {
        var self = this;
        self.$todoList = document.getElementById('todo-list');
        self.$addButton = document.getElementById('addButton');
        self.$deleteButton = document.getElementById('deleteButton');
        self.$destroyButton = document.getElementsByClassName('destroy');
        self.$checkboxs = document.getElementsByClassName('mdl-checkbox')
        self.model = model;
        self.view = view;


        self.$addButton.addEventListener('click', function () {
            var title = document.getElementById('newItem').value;
            self.addItem(title);
        });

        self.$deleteButton.addEventListener('click', function () {
            self.removeCompletedItems();
        });

        if (self.model.database != []) {
            self.view.showAll(self.model.database);
            self.addEvents();
        };

        //document.querySelector('.mdl-card__actions i').addEventListener('mouseup', self.view.showAll(self.model.database));

    };

    Controller.prototype.addItem = function (title) {
        var self = this;

        if (title.trim() === '') {
            return;
        }

        self.view.show(self.model._create(title));

        document.querySelector('#todo-list li:last-child button').addEventListener('mouseup', function(){
            self.removeItem(this);
        });

        document.querySelector('#todo-list li:last-child label').addEventListener('mouseup', function(){
            self.check(this);
        });

    };

    Controller.prototype.removeItem = function (destroyButton) {
        var self = this;
        var id = destroyButton.getAttribute('for');
        //alert(id);
        self.view.showAll(this.model.database, self.model.deleteOne(id));
        self.addEvents();

    };

    Controller.prototype.removeCompletedItems = function () {
        var self = this;
        self.model.deleteCompleted();
        self.view.showAll(self.model.database);
        self.addEvents();
    };

    Controller.prototype.check = function (checkbox) {
        var self = this;
        var id = checkbox.getAttribute('for');
        self.model.checkedItem(id);
        //alert(id);
    };

    Controller.prototype.addEvents = function () {
        var self = this;
        for (var i = 0; i < self.$destroyButton.length; i++) {
            self.$destroyButton[i].addEventListener('mouseup', function(){
                self.removeItem(this)});
            self.$checkboxs[i].addEventListener('mouseup', function(){
                self.check(this)});
        };

    };

// export to window
    window.todoApp = window.todoApp || {};
    window.todoApp.Controller = Controller;

}(window));