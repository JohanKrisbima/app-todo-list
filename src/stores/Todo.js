import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  // state
  state: () => ({
    todoList: [],
    id: 0,
    completed: false,
  }),

  // getter
  getters: {
    completedTodos() {
      return this.todoList.filter((todo) => todo.completed);
    },
    incompleteTodos() {
      return this.todoList.filter((todo) => !todo.completed);
    },
  },
  // action
  actions: {
    addTodoList(item) {
      this.todoList.push({ item, id: this.id++, completed: false });
    },

    deleteTodoList(itemId) {
      this.todoList = this.todoList.filter((todo) => todo.id !== itemId);
    },

    toggleCompleted(itemId) {
      const todo = this.todoList.find((todo) => todo.id === itemId);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});
