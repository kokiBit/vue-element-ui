<template lang="pug">
  div#app
    container-component
</template>

<script>
import Container from '@/components/layout/container.vue'

export default {
  name: 'App',
  components: {
    'container-component': Container
  }
}
</script>
