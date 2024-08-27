import CalcView from "@/views/CalcView.vue";
import TodoView from "@/views/TodoView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/calculator',
        name: 'Calculator',
        component: CalcView
    },
    {
        path: '/todo',
        name: 'Todo',
        component: TodoView
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
});

export default router