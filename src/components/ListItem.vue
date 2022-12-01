<script lang="ts">

import store from "@/store";
import type {Todo} from "@/types";

export default {
  props: ['item'],
  data() {
    return {
      done: this.item.done,
      isSelected: false,
      inputValue: this.item.text
    }
  },
  methods: {
    check(done: boolean) {
      const todos = store.state.todos
      const todo = todos.find(todo => todo.id === this.item.id)
      if (todo) {
        todo.done = !todo.done
        store.commit('setTodos', todos)
      }
    },
    save() {
      const todos = store.state.todos
      const todo = todos.find(todo => todo.id === this.item.id)
      if (todo) {
        todo.text = this.inputValue
        store.commit('setTodos', todos)
        this.toggleIsSelected()
      }
    },
    deleteItem() {
      const todos = store.state.todos.filter((todo: Todo) => todo.id !== this.item.id)
      store.commit('setTodos', todos)
    },
    toggleIsSelected() {
      this.isSelected = !this.isSelected
    },
    cancel() {
      this.toggleIsSelected()
      this.inputValue = this.item.text
    }
  },

}

</script>
<template>
  <li>
    <div class="item-left">
      <input v-model="done" @change="check()" type="checkbox">
      <span v-if="!this.isSelected">{{ item.text }}</span>
      <input class="text-input" v-else v-model="inputValue" type="text">
    </div>

    <div class="item-right">
      <button @click=" isSelected ? cancel() : toggleIsSelected()  ">

        <svg
            v-if="isSelected"
            style="width: 24px; height: 24px"
            viewBox="0 0 24 24"
        >
          <path
              fill="currentColor"
              d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
          />
        </svg>

        <svg v-else style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path
              fill="currentColor"
              d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
          />
        </svg>
      </button>
      <button
          @click="isSelected ? save() : deleteItem()"
      >
        <svg
            v-if="isSelected"
            style="width: 24px; height: 24px"
            viewBox="0 0 24 24"
        >
          <path
              fill="currentColor"
              d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"
          />
        </svg>
        <svg v-else style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M3 4H21V7H20L17.5 21H6.5L4 7H3V4Z"/>
        </svg>
      </button>
    </div>
  </li>
</template>

<style scoped>
[class*="item"] {
  display: flex;
  gap: 10px;
}

span {
  display: block;
  font-size: 16px;
}

.text-input {
  font-size: 15px;
  max-width: 200px;
  margin-bottom: -2px;
  margin-left: -4px;
}

button {
  border: none;
  background: transparent;
}
</style>