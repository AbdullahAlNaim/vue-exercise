<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        emitter () {
            this.$emit('adding')
        }
    },
    emits: ['adding'] // need this or throws error not inheriting
}
</script>

<template>
    <button @click="count++">Clicked me {{ count }} times.</button>
    <button @click="emitter">Telling parent</button>
</template>

<style scoped>
</style>