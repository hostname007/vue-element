<template>
  <div style="height: 100%;">
    <el-container style="height:100%;">
      <el-header>
        <div style="width: 200px;float: left;"><h1>测试管理系统</h1></div>
        <div style="float: right">
          <el-dropdown @command="handleCommand">
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">查看</el-dropdown-item>
              <el-dropdown-item command="b">新增</el-dropdown-item>
              <el-dropdown-item command="c">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>管理员</span>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu :default-openeds="[]">
            <router-link to="/personalWork">
              <el-menu-item index="0">首页</el-menu-item>
            </router-link>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-message"></i>订单管理
              </template>
              <router-link to="/orderCenter" name="1-1">
                <el-menu-item index="1-1">订单中心</el-menu-item>
              </router-link>
              <router-link to="/orderManager" name="1-2">
                <el-menu-item index="1-2">管理员列表</el-menu-item>
              </router-link>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-edit"></i>信息编辑</template>
              <router-link to="/editPage">
                <el-menu-item index="2-1">文本编辑</el-menu-item>
              </router-link>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-view"></i>数据图表</template>
              <router-link to="/userView">
                <el-menu-item index="2-1">用户分布</el-menu-item>
              </router-link>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer style="height: 30px;font-size: 14px;text-align: center;line-height: 30px;">
            Powered by 测试数据网 2018 18 HEYIME.COM Inc Inc.津ICP备15001106号-1
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {}
    },
    methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
        if (command == "a") {
          this.$message('功能暂未开放')
        } else if (command == "b") {
          this.$message('功能暂未开放')
        } else {
          this.$router.replace("/");
        }

      },
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
</style>
