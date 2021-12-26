import { makeAutoObservable } from "mobx";

class Todo {
  todos = [];
  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  completeTodo(todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].completed = !todo.completed;
  }

  fetchTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        this.todos = [...this.todos, ...json];
      });
  }
}

export default new Todo();
