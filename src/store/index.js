import { computed, makeAutoObservable } from "mobx";
import {
  persistence,
  // clearPersist,
  // stopPersist,
  // isSynchronized,
  StorageAdapter,
} from "mobx-persist-store";
import alertify from "alertifyjs";

class Todo {
  value = "";
  id = Date.now();
  complete = false;
  constructor(value) {
    this.value = value;
    makeAutoObservable(this);
  }
}

class Store {
  todoList = [];
  filter = "";
  constructor() {
    makeAutoObservable(this, {
      filteredTodos: computed,
    });
  }

  addTodo = (value) => {
    this.todoList.unshift(new Todo(value));
    alertify.notify("Added '" + value + "' to the list", "success", 3);
  };

  removeTodo = (todo) => {
    this.todoList = this.todoList.filter((i) => i !== todo);
    alertify.error("Removed '" + todo.value + "' from the list");
  };

  handleFilter = (e) => {
    this.filter = e.target.value;
  };

  toggleCheckComplete = (todo) => {
    todo.complete = !todo.complete;
    todo.complete === true &&
      alertify.notify("'" + todo.value + "' is completed", "success", 3);
  };

  clearAllCompleted = () => {
    const incompletedTodos = this.todoList.filter((todo) => !todo.complete);
    this.todoList.replace(incompletedTodos);
    alertify.error(
      "All Completed Todos are removed from the list.",
      "success",
      3
    );
  };

  get filteredTodo() {
    const matchesFilter = new RegExp(this.filter, "i");
    return this.todoList.filter(
      (todo) => !this.filter || matchesFilter.test(todo.value)
    );
  }
}

export default persistence({
  name: "Store",
  properties: ["todoList"],
  adapter: new StorageAdapter({
    read: async (name) => {
      const data = window.localStorage.getItem(name);

      return data ? JSON.parse(data) : undefined;
    },
    write: async (name, content) => {
      window.localStorage.setItem(name, JSON.stringify(content));
    },
  }),
  reactionOptions: {
    // optional
    delay: 200,
  },
})(new Store());
