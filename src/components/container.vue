<template>
<el-container>
  <side-component></side-component>
<el-container>
<el-header style="text-align: right; font-size: 12px">
  <el-dropdown>
    <i class="el-icon-setting" style="margin-right: 15px"></i>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>View</el-dropdown-item>
      <el-dropdown-item>Add</el-dropdown-item>
      <el-dropdown-item>Delete</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
  <span>Tom</span>
</el-header>

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
import Side from '@/components/side'

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
    'side-component': Side
  }
}
</script>

<style>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }  
</style>
