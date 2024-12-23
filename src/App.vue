<script>
import Greeting from './components/Greeting.vue';
import HelloWorld from './components/HelloWorld.vue';
import TestComponent from './components/TestComponent.vue';
import Valorant from './components/Valorant.vue';
import navbar from './components/navbar.vue'

export default {
  data () {
    return {
      message: 'Hello World',
      name: 'Abdullah Naim',
      age: 28,
      pursue: 'Software Engineer',
      one: 'drawing people',
      two: 'gamedev in unity',
      agentName: 'Jett',
      agentRole: 'duelist'
    }
  },
  components: {
    HelloWorld,
    TestComponent,
    Greeting,
    Valorant,
    navbar
  }
}
</script>
  
<template>
  <navbar />
  <router-view></router-view>
</template>

