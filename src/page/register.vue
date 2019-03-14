<template>
  <div class="page-register">
    <div class="header">
      <header>
        <router-link :to="{name: 'index'}" class="site-logo">
          <img src="@/assets/img/logo.png" alt="logo">
        </router-link>
        <div class="login">
          <span>已有账号?</span>
          <router-link :to="{name: 'login'}">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="registerForm"
        status-icon
        :rules="rules"
        ref="registerForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input type="userName" v-model="registerForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="创建密码" prop="password">
          <el-input type="password" v-model="registerForm.password" autocomplete="off" @input="input"></el-input>
          <div class="pw-strength">
            <div :class="['bar',strengthClass]">
                <div class="letter">
                    <span>弱</span>
                    <span>中</span>
                    <span>强</span>
                </div>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input type="password" v-model="registerForm.rePassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="submit" type="primary" @click="submitForm('registerForm')">同意本站协议并注册</el-button>
          <p><a>《美团网用户协议》</a></p>
        </el-form-item>
      </el-form>
    </div>
    <footer>
            <p>©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    //   校验用户名
    var validateUser =(rule,value,callback) => {
        if(value ===""){
            callback(new Error("请输入用户名"));
        }else if(value.length < 4 || value.length > 16){
            callback(new Error("用户名必须为4-16位的字母数字下划线组成"));
        } else {
            callback();
        }
    }
    //   校验密码
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if(value.length < 4 || value.length > 16){
          callback(new Error("密码必须为4-16位的字母数字下划线组成"));
      }else {
        if (this.registerForm.rePassword !== "") {
          this.$refs.registerForm.validateField("rePassword");
        }
        callback();
      }
    };
    // 校验在此输入密码
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        userName: "",
        password: "",
        rePassword: ""
      },
      strengthClass: "",
      rules: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          rePassword: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          userName: [
            { validator: validateUser, trigger: 'blur' }
          ]
        }
    };
  },
  methods: {
    submitForm() {},
    input(){
    //   let regNtr = ^[0-9a-zA-Z_]{1,}$
    //   let regNum = /[0-9a-zA-Z_]+/g
    //   let reg = /_/g    
      if(this.registerForm.password.length > 10){
          this.strengthClass = "strong"
      } 
    //   else if (this.password.length > 6 &&)
  }
  },
  
};
</script>
<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>
