<template>
  <div>
    <div class="header">
      订单中心
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        label="序号"
        type="index"
        align="center"
        width="200"
        :index="indexMethod">
      </el-table-column>
      <el-table-column
        highlight-current-row="true"
        align="center"
        label="日期"
        width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="姓名"
        align="center"
        width="200">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="性别" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.sex }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="地址">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作"
                       align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align:center;">
      <v-page :pages="pages" :current="count" @funcPage="currentPage"></v-page>
    </div>
    <!--编辑弹窗-->
    <el-dialog
      title="信息编辑"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="日期">
          <div class="block">
          <el-date-picker
            style="width: 100%;"
            v-model="form.time"
            type="date"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            placeholder="选择日期">
          </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select
            style="width: 100%;"
            v-model="form.sex" placeholder="请选择性别">
            <el-option label="男" value="boy"></el-option>
            <el-option label="女" value="girl"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submit">确 定</el-button>
  </span>
    </el-dialog>

  </div>
</template>
<script>
  import page from '../pages/page';
  export default {
    name: "orderCenter",
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },
    data() {
      return {
        form: {
          commonIndex:'',
          time:'',
          name:'',
          sex:'',
          address:''
        },
        centerDialogVisible:false,
        pages:200,
        count:1,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          sex:'男',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '孙悦',
          sex:'男',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '常蕾',
          sex:'女',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '疼礼盒',
          sex:'女',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2019-06-11',
          name: '王秀民',
          sex:'男',
          address: '天津市汇川小区分散开  1314 弄'
        }
        ]
      }
    },
    components:{
      'v-page':page
    },
    methods: {
      //获取当前页数
      currentPage(val){
        this.count=val;
        console.log('当前页数',this.count);
      },
      //编辑
      handleEdit(index, row) {
        this.centerDialogVisible=true;
        this.form.time=row.date;
        this.form.name=row.name;
        this.form.sex=row.sex;
        this.form.address=row.address;
        this.form.commonIndex=index;
      },
      //删除
      handleDelete(index, row) {
        console.log(index, row);
        this.tableData.splice(index,1);
      },
      //编辑信息提交
      submit(){
        var data=this.tableData;
           data[this.form.commonIndex].date=this.form.time;
           data[this.form.commonIndex].name=this.form.name;
           data[this.form.commonIndex].sex=this.form.sex;
           data[this.form.commonIndex].address=this.form.address;
          this.centerDialogVisible=false;
          this.$message.success('修改成功');
      },
      //序号
      indexMethod(index) {
        return index +1;
      }
    }
  }
</script>

<style scoped>

</style>
