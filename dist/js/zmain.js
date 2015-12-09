'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

{
    (function () {
        'use strict';

        var Todo = function Todo() {
            _classCallCheck(this, Todo);

            this.model = new todoApp.Model();
            this.view = new todoApp.View();
            this.controller = new todoApp.Controller(this.model, this.view);
        };

        var todo = new Todo();
    })();
}