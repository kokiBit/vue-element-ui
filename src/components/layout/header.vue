<template lang="pug">
  el-header
    el-dropdown
      i.el-icon-setting(style="margin-right: 15px")
      el-dropdown-menu(slot="dropdown")
        el-dropdown-item View
        el-dropdown-item Add
        el-dropdown-item Delete
    span Tom {{ count }}
    el-button(type="primary" @click="increment") Count
</template>
<script>

export default {
  name: 'header',
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.state.count++
    }
  }
}
</script>
<style lang="stylus">
.el-header
  background-color #A9E2F3
  color #333
  line-height 60px
  text-align right
</style>
