<script lang="ts">
import store from "@/store";

export default {

  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    addItem(text: string) {
      const item = {id: Date.now(), text, done:false}
      this.inputValue = ''
      store.commit('setTodos',[...store.state.todos, item])
    }
  }
}

</script>
<template>
  <div>
    <form @submit.prevent="addItem(inputValue)" action="">
      <input v-model="inputValue" type="text">
      <button type="submit">Добавить</button>
    </form>
  </div>
</template>
