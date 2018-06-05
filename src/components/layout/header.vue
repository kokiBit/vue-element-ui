<template lang="pug">
  el-header
    el-dropdown
      i.el-icon-setting(style="margin-right: 15px")
      el-dropdown-menu(slot="dropdown")
        el-dropdown-item View
        el-dropdown-item Add
        el-dropdown-item Delete
    span Tom
    el-button(type="primary" @click="logout") Logout
</template>

<script>

export default {
  name: 'header',
  methods: {
    logout () {
      this.$store.state.count = false
      this.$router.push('/login');
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
