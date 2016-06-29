"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
let AppComponent = class AppComponent {
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
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'soybeans',
        templateUrl: 'todo.html'
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map