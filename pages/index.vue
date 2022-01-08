<template lang="pug">
.Desktop
    .Todo
        .Todo-header
            h1 Дела:
            .NewTask
                input.NewTask-name(v-model="newTaskName")
                button.NewTask-save(@click="addTask") Новое дело
        hr
        .Todo-list
            Task.Todo-task(v-for="item in todo" :task="item")
    .Tags
        .Tags-header
            h1 Теги:
            .NewTag
                input.NewTag-name(v-model="newTagName")
                button.NewTag-save(@click="addTag") Новый тег
        hr
        .Tags-list
            Tag.Todo-task(v-for="item in tags" :tag="item")

</template>

<script>
import Task from "../components/Task.vue"
import Tag from "../components/Tag.vue"
import {tasks, tags} from "../app/data"


export default {
    data() {
        return {
            newTaskName: '',
            newTagName: '',
            todo: tasks.items,
            tags: tags.items
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
        },
        addTag () {
            tags.create({name: this.newTagName})
            this.newTagName = ''
        }
    },

    components: {
        Task, Tag
    }
}
</script>

<style lang="sass">
.Desktop
    display: flex

.Todo
    flex-grow: 3
    padding: 0 10px
    &-header
        display: flex
        justify-content: space-between
.NewTask 
    & > *
        height: 100%
        box-sizing: border-box

.Tags
    background: #f3f3f3
    flex-grow: 1
    padding: 0 10px
    &-header
        display: flex
        justify-content: space-between
.NewTag
    & > *
        height: 100%
        box-sizing: border-box

    
</style>
