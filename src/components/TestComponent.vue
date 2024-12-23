<script>
export default {
    data() {
        return {
            count: 0
        }
    }
}
</script>

<template>
    <button @click="count++">Clicked me {{ count }} times.</button>
</template>

<style scoped>
</style>