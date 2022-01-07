<template lang="pug">
.Task 
    .Task-name(v-if="!isEdit") {{task.name}}
    input.Task-name(v-if="isEdit" v-model="task.name")
    .Task-controls
        button(v-if="!isEdit" @click="isEdit = true") Редактировать
        button(v-if="isEdit" @click="save") Сохранить
        button(@click="remove") Удалить
</template>

<script>
export default {
    props: ["task"],
    data ()
    {
        return {
            isEdit: false
        }
    },
    methods:
    {
        save ()
        {
            this.task.save()
            this.isEdit = false
        },

        remove ()
        {
            this.task.delete()
        }
    }
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
