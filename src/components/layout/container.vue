<template>
  <el-container>
    <side-component></side-component>
    <el-container class="is-vertical">
      <header-component></header-component>
      <el-main>
        <el-alert title="success alert" type="success" description="more text description" show-icon>
        </el-alert>
        <el-table :data="tableData">
          <el-table-column prop="date" label="Date" width="140">
          </el-table-column>
          <el-table-column prop="name" label="Name" width="120">
          </el-table-column>
          <el-table-column prop="address" label="Address">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>


<script>
import Side from '@/components/layout/side'
import Header from '@/components/layout/header'

export default {
  name: 'Container',
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
  components: {
    'side-component': Side,
    'header-component': Header,
  }
}
</script>
