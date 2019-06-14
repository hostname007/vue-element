<template>
  <div>
    <div class="loginDiv">
        <h1>测试管理系统</h1>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="word">
          <el-input type="text" v-model="ruleForm.word" autocomplete="off" placeholder="请输入您的账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请输入您的密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  import Axios from 'axios';
  // import htp from '../../utils/http';
  export default {
    name:'login',
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        }else{
          callback()
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else{
          callback()
        }
      };
      return {
        ruleForm: {
          word: 'admin',
          checkPass: 'admin'
        },
        rules: {
          word: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              console.log(this.ruleForm)
              var URL="https://easy-mock.com/mock/5cc1686999050b339108129c/example/ttst";
            // Axios.get(URL, {
            //   headers: {
            //     "sessionId": '12s452av52as5v'
            //   }
            // },
            //   {params:this.ruleForm},
            // ).then((response)=>{
            //     console.log(response);
            //   }).catch((res)=>{
            //     console.log(res);
            // })
            Axios.post(URL,this.ruleForm).then(
            res => {
              console.log(res);
              this.$router.replace('/orderCenter')
            }
          )

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>
  .loginDiv{
    text-align: center;
    width:500px;height: 360px;position: absolute;
    top: calc(50% - 180px);left:calc(50% - 300px);
    border-radius: 4px;
  }
</style>
