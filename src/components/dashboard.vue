<template lang="pug">
  el-main
    el-row(gutter=20)
      el-col(:span=24)
        el-card.box-card
          .clearfix(slot="header")
            span Total
            el-button(style="float: right; padding: 3px 0", type="text") Operation button
          .text.item
            radar-component
    el-row(gutter=20)
      el-col(:span=12)
        el-card.box-card
          .clearfix(slot="header")
            span Batting
            el-button(style="float: right; padding: 3px 0", type="text") Operation button
          .text.item(v-for="o in 4", :key="o") {{ 'List item ' + o }}
      el-col(:span=12)
        el-card.box-card
          .clearfix(slot="header")
            span Fileding
            el-button(style="float: right; padding: 3px 0", type="text") Operation button
          .text.item(v-for="o in 4", :key="o") {{ 'List item ' + o }}
    el-row(gutter=20)
      el-col(:span=12)
        el-card.box-card
          .clearfix(slot="header")
            span Running
            el-button(style="float: right; padding: 3px 0", type="text") Operation button
          .text.item(v-for="o in 4", :key="o") {{ 'List item ' + o }}
      el-col(:span=12)
        el-card.box-card
          .clearfix(slot="header")
            span Pitch
            el-button(style="float: right; padding: 3px 0", type="text") Operation button
          .text.item(v-for="o in 4", :key="o") {{ 'List item ' + o }}
</template>


<script>
import Radar from '@/components/radar'

export default {
  name: 'Dashboard',
  data() {
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    };
    return {
      tableData: Array(20).fill(item)
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  components: {
    'radar-component': Radar
  }
}
</script>


<style>
  .el-main {
    background-color: #FAFAFA;
  } 
  .text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
</style>
