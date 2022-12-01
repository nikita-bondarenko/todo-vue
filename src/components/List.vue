<script lang="ts">
import store from "@/store";
import ListItem from "@/components/ListItem.vue";

export default {
  data() {
    return {
      store
    }
  },
  components: {ListItem}
}

</script>

<template>
  <ul>
    <ListItem v-for="item in store.state.todos" key="item.id" :item="item"></ListItem>
  </ul>
</template>