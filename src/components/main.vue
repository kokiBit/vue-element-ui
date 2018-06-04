<template lang="pug">
  el-main(v-loading="loading")
    el-table(:data="tableData")
      el-table-column(prop="date", label="Date", width="140")
      el-table-column(prop="name", label="Name", width="120")
      el-table-column(prop="address", label="Address")
    el-alert(title="success alert", type="success" description="more text description", show-icon)
</template>

<script>
export default {
  name: 'Container',
  data() {
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    };
    return {
      tableData: Array(20).fill(item),
      loading: true
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    })
  }
}
</script>
