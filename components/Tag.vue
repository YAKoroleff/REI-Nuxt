<template lang="pug">
.Tag 
    .Tag-name {{tag.name}} 
        button(@click="remove") Удалить
</template>

<script>
export default {
    props: ["tag"],
    data ()
    {
        return {
            isEdit: false
        }
    },
    methods:
    {
        remove ()
        {
            this.tag.delete()
        }
    }
}
</script>

<style lang="sass">
.Tag
    display: flex
    justify-content: space-between
    padding: 5px 0
    &-controls > button
       margin-left: 10px 
</style>
