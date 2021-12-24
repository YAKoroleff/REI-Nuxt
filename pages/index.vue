<template lang="pug">
.Todo
    .Todo-header
        h1 Дела:
        .NewTask
            input.NewTask-name(v-model="newTaskName")
            button.NewTask-save(@click="addTask") Новое дело
    hr
    .Todo-list
        Task.Todo-task(v-for="item in todo" :task="item")

</template>

<script>
import Task from "../components/Task.vue"
import {tasks} from "../app/data"


export default {
    data() {
        return {
            newTaskName: '',
            todo: tasks.items
        }
    },

    mounted () {
        tasks.get()
    },

    methods:
    {
        addTask () {
            tasks.create({name: this.newTaskName})
            this.newTaskName = ''
        }
    },

    components: {
        Task
    }
}
</script>

<style lang="sass">
.Todo
    padding: 0 10px
    &-header
        display: flex
        justify-content: space-between
.NewTask 
    & > *
        height: 100%
        box-sizing: border-box

    
</style>
