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
    <h1>Hello World</h1>
    <button @click="count++">Clicked Me {{ count }} times!</button>
</template>