<template lang="pug">
  el-container
    side-component
    el-container.is-vertical
      header-component
      router-view
</template>

<script>
import Side from '@/components/layout/side'
import Header from '@/components/layout/header'

export default {
  name: 'Container',
  components: {
    'side-component': Side,
    'header-component': Header,
  }
}
</script>
