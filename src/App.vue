<script lang="ts">

import store from "@/store";
import Form from "@/components/Form.vue";
import List from "@/components/List.vue";

export default {
  name: "app",
  components: {Form, List}
}
</script>

<template>
  <main>
    <Form></Form>
    <List></List>
  </main>

</template>

<style>

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: auto;
}

button {
  cursor: pointer;
}

ul {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
  width: 100%;
  padding-left: 0px;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
}

body {
  background: white;
}

* {
  color: black;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {


  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
