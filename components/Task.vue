<template lang="pug">
.Task 
    .Task-name {{task.name}}
    .Task-controls
        button Изменить
        button Удалить
</template>

<script>
export default {
    props: ["task"]
}
</script>

<style lang="sass">
.Task
    display: flex
    justify-content: space-between
    padding: 5px 0
    &-controls > button
       margin-left: 10px 
</style>
