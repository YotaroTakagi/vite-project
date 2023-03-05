<script setup lang="ts">
import { ref, computed, watchEffect, defineProps } from 'vue'

const storage_key = 'vue-todo'

// state
const todos: any = ref(JSON.parse(localStorage.getItem(storage_key) || '[]'))
const visibility = ref('all')
const edited_todo = ref()

// sort filter
const filters = {
    all: (todos: any) => todos,
    active: (todos: any) => todos.filter((todo: any) => !todo.completed),
    complete: (todos: any) => todos.filter((todo: any) => todo.completed)
}

// derived state
const filtered_todos = computed(() => filters[visibility.value](todos.value))
const remain = computed(() => filters.active(todos.value).length)

// handle routing
window.addEventListener('hashchange', onHashChange)
onHashChange()

// save
watchEffect(() => {
    localStorage.setItem(storage_key, JSON.stringify(todos.value))
})

function show_all(e: any) {
    todos.value.forEach((todo: any) => (todo.completed = e.target.checked))
}

function add_todo(e) {
    const value = e.target.value.trim()
    if (value) {
        todos.value.push({
            id: Date.now(),
            title: value,
            completed: false
        })
        e.target.value = ''
    }
}


</script>