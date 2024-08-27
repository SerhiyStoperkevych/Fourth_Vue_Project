<template>
  <div class="app">
    <div>
      <router-link to="/todo">Todo List</router-link>
      <router-link to="/calculator">Calculator</router-link>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>