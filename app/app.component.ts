import {Component} from '@angular/core';

@Component({
    selector: 'soybeans',
    templateUrl: 'todo.html'
})

export class AppComponent {
    todos: any;
    STORAGE_KEY: string;

    constructor() {
        this.STORAGE_KEY = 'soybeans-todos';
        this.todos = JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
    }

    /**
     * add todo
     * @param  newTodo
     */
    add(newTodo) {
        var text = newTodo.value.trim();
        if (text) {
            this.todos.push({
                title: text,
                completed: false,
                edited: false
            });
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todos));
            newTodo.value = '';
        }
    }

    /**
     * toggle completed
     * @param  todo
     */
    toggle(todo) {
        todo.completed = !todo.completed;
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todos));
    }

    /**
     * delete todo
     * @param  todo
     */
    delete(todo) {
        var index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todos));
    }

    /**
     * update todo
     * @param  todo
     */
    update(todo) {
        todo.edited = false;
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todos));
    }

    /**
     * edit todo
     * @param  todo
     */
    edit(todo) {
        todo.edited = true;
    }

    /**
     * completed count
     * @return count
     */
    completedCount() {
        return this.todos.filter(todo => todo.completed).length;
    }
}
