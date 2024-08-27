<template>
  <div>
    <h1>Todo List:</h1>
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input 
        v-model="title"
        placeholder="Write the Title..."
      >
      <label>Description:</label>
      <input 
        v-model="description"
        placeholder="Write Todo's description..."
      >
      <button type="submit">Add</button>
    </form>
    <div v-for="todo in todos" :key="todo.id">
      <h2>{{ todo.title }}</h2>
      <p>{{ todo.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      title: '',
      description: '',
      todos: []
    }
  },
  methods: {
    handleSubmit() {
      if(this.title.trim() || this.description.trim()) {
        this.todos.push({
          id: Date.now(),
          title: this.title,
          description: this.description
        });
        this.title = '';
        this.description = '';
      }
    }
  }
}
</script>
