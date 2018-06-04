<template lang="pug">
  el-aside
    el-menu(:default-openeds="['1', '3']")
      el-submenu(index="1")
        template(slot="title")
          i.el-icon-message Navigator One
        el-menu-item-group
          template(slot="title") Group 1
          router-link(to="/chart-js")
            el-menu-item(index="1-1") Option 1
          router-link(to="/")
            el-menu-item(index="1-2") Option 2
        el-menu-item-group(title="Group 2")
          router-link(to="/dashboard")
            el-menu-item(index="1-3") Option 3
          el-submenu(index="1-4")
            template(slot="title") Option4
            el-menu-item(index="1-4-1") Option 4-1
      el-submenu(index="2")
        template(slot="title")
          i.el-icon-menu Navigator Two
        el-menu-item-group
          template(slot="title") Group 1
          el-menu-item(index="2-1") Option 1
          el-menu-item(index="2-2") Option 2
        el-menu-item-group(title="Group 2")
          el-menu-item(index="2-3") Option 3
        el-submenu(index="2-4")
          template(slot="title") Option 4
          el-menu-item(index="2-4-1") Option 4-1
      el-submenu(index="3")
        template(slot="title")
          i.el-icon-setting Navigator Three
        el-menu-item-group
          template(slot="title") Group 1
          el-menu-item(index="3-1") Option 1
          el-menu-item(index="3-2") Option 2
        el-menu-item-group(title="Group 2")
          el-menu-item(index="3-3") Option 3
        el-submenu(index="3-4")
          template(slot="title") Option 4
          el-menu-item(index="3-4-1") Option 4-1
</template>

<script>
export default {
  name: 'side-component'
}
</script>

<style lang="stylus">  
.el-aside
  color #333
.el-aside a
  text-decoration none
</style>
