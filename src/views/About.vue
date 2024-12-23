<script>
export default {
    data () {
        return {
            num: 0
        }
    },
    methods: {
        plus () {
            this.num += 1;
        }
    }
}
</script>

<template>
    <TestComponent @adding="plus"/>
    <p>{{ num }}</p>
</template>