<template>
<div>
  <div class="header">
    管理员列表
  </div>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="用户 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="用户 ID"
      prop="id">
    </el-table-column>
    <el-table-column
      label="名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="地址"
      prop="address">
    </el-table-column>
  </el-table>
</div>
</template>

<script>
    export default {
        name: "orderManager",
        data(){
          return{
            tableData: [{
              id: '12987122',
              name: '财产各',
              address: '上海市浦东新区'
            }, {
              id: '12987123',
              name: '多伦多',
              address: '天津市'
            }, {
              id: '12987125',
              name: '落砂机',
              address: '北京十渡'
            }, {
              id: '12987126',
              name: '王木生',
              address: '内蒙敖汉旗'
            }]
          }
        }
    }
</script>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
