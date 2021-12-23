<template lang="pug">
.Todo
    .Todo-header
        h1 Дела:
        button Новое дело
    hr
    .Todo-list
        Task.Todo-task(v-for="item in todo" :task="item")

</template>

<script>
import Task from "../components/Task.vue"
export default {
    data() {
        return {
            todo: [ {name: "Принять ванну"}, {name: "Выпить чашечку кофе"} ]
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
</style>
