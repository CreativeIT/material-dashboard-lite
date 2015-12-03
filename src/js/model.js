(function (window){
    'use strict'

//create database
    function Model(database) {
        this.database = database ||
            [{title: 'First Item',
              id: 1651646545,
              completed: false},

             {title: 'Second Item',
              id: 5451646545,
              completed: true},

             {title: 'Trird Item',
              id: 8751646545,
              completed: false},

             {title: '4',
              id: 5428646545,
              completed: true},

             {title: '5',
              id: 9851786545,
              completed: true},

             {title: '6',
              id: 6751646545,
              completed: false},

             {title: '7',
              id: 4551786545,
              completed: true}
            ];
    };
// create todo item
    Model.prototype._create = function (title){
        var newItem = {};
        newItem.title = title;
        newItem.id = new Date().getTime();
        newItem.completed = false;
        this.database.push(newItem);
        return newItem;
    };
//read todo item
    Model.prototype.checkedItem = function (id) {
        for (var i = 0; i < this.database.length; i++) {
            if (id == this.database[i].id) {
                this.database[i].completed = (this.database[i].completed == true) ? false : true;
            };
            //alert(this.database[i].completed);
        };
    };
//remove todo item
    Model.prototype.deleteOne = function (id) {
        for (var i = 0; i < this.database.length; i++) {
            if (id == this.database[i].id) {
                this.database.splice(i, 1);
            };
        };
    };
//remove completed items
    Model.prototype.deleteCompleted = function () {
        for (var i = 0; i < this.database.length; i++) {
            if (this.database[i].completed == true) {
                this.database.splice(i, 1);
                i--;
            };
        };
    };

//removeAll todo items
    Model.prototype.deleteAll = function () {
        this.database = [];
    };
//get count of all todo items
    Model.prototype._getCount = function () {

    };

// export to window
    window.todoApp = window.todoApp || {};
    window.todoApp.Model = Model;
}(window));