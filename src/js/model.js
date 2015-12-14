{
    'use strict';

    class Model {
        constructor (database) {
            this.database = database ||
                [
                    {
                        title: 'Implement 30% of my feature',
                        id: 1651646545,
                        completed: false
                    },

                    {
                        title: 'Fencing',
                        id: 5451646545,
                        completed: true
                    },

                    {
                        title: 'Fix bugs',
                        id: 8751646545,
                        completed: false
                    },

                    {
                        title: 'Read an article about Test-Driven Development',
                        id: 5428646545,
                        completed: true
                    },

                    {
                        title: '5',
                        id: 9851786545,
                        completed: true
                    }
                ];
        }

        create (title){
            let newItem = {};
            newItem.title = title;
            newItem.id = new Date().getTime();
            newItem.completed = false;
            this.database.push(newItem);
            return newItem;
        };

        checkedItem (id) {
            for (let i = 0; i < this.database.length; i++) {
                if (id == this.database[i].id) {
                    this.database[i].completed = (this.database[i].completed) ? false : true;
                }
            }
        };

        deleteOne (id) {
            for (let i = 0; i < this.database.length; i++) {
                if (id == this.database[i].id) {
                    this.database.splice(i, 1);
                }
            }
        };
//remove completed items
        deleteCompleted () {
            for (let i = 0; i < this.database.length; i++) {
                if (this.database[i].completed == true) {
                    this.database.splice(i, 1);
                    i--;
                }
            }
        };

    }
// export to window
    window.todoApp = window.todoApp || {};
    window.todoApp.Model = Model;

}