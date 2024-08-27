<template>
  <div>
      <h1>Todo List</h1>
      <form @submit.prevent="handleSubmit">
        <label>Title:</label>
        <input 
          v-model="title"
          placeholder="Write your title..."
        />
        <label>Description:</label>
        <input 
          v-model="description"
          placeholder="Write your description..."
        />
        <button type="submit">Add</button>
      </form>
      <div v-for="todo in todos" :key="todo.id">
        <input type="checkbox" @click="toggleComplete(todo)" v-model="todo.completed">
        <h2 :class="{ completed: todo.completed }">{{ todo.title }}</h2>
        <p :class="{ completed: todo.completed }">{{ todo.description }}</p>
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
          description: this.description,
          completed: false
        })
      }
      this.title = '',
      this.description = ''
    },
    toggleComplete(todo) {
      todo.completed = !todo.completed;
    }
  }
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>