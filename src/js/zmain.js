{
    'use strict';

    class Todo {
        constructor () {
            this.model = new todoApp.Model();
            this.view = new todoApp.View();
            this.controller = new todoApp.Controller(this.model, this.view);
    }}

    var todo = new Todo();

}

