<!--  -->
<template>
  <div class="login-page">
    <div class="content">
      <img class="logo" src="~assets/image/logo.png" alt="" />
      <div class="login-box">
        <div class="title">
          登陆/LOGIN
          <div class="lang">
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                <img
                  class="lang-img"
                  src="~/assets/image/yuyan.svg"
                  alt="language"
                />
                language
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="zh">中文（简体）</el-dropdown-item>
                <el-dropdown-item command="en">English</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="form-line">
          <img class="icon" src="~assets/image/user.svg" alt="" />
          <el-input v-model="account" :placeholder="$t('account')"></el-input>
        </div>
        <div class="form-line">
          <img class="icon" src="~assets/image/psd.svg" alt="" />
          <el-input
            v-model="pwd"
            type="password"
            :placeholder="$t('password')"
          ></el-input>
        </div>
        <div class="form-line">
          <img class="icon" src="~assets/image/quanxian.svg" alt="" />
          <el-radio-group v-model="role">
            <el-radio-button
              v-for="item in roles"
              :key="item.index"
              :label="item.index"
              >{{ $t(item.role) }}</el-radio-button
            >
          </el-radio-group>
        </div>
        <div class="form-line">
          <el-button type="primary" @click="to">{{ $t("login") }}</el-button>
        </div>
        <div class="form-line">
          <el-link type="primary" @click="dialogFormVisible = true">{{
            $t("register")
          }}</el-link>
        </div>
      </div>
    </div>

    <el-dialog title="注 册" :visible.sync="dialogFormVisible">
      <el-form :model="register">
        <el-form-item label="学 号">
          <el-input v-model="register.account"></el-input>
        </el-form-item>
        <el-form-item label="身份证后六位">
          <el-input v-model="register.idCard"></el-input>
        </el-form-item>
        <el-form-item label="设置密码">
          <el-input v-model="register.pwd"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="subRegister">提 交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { login } from "network/public";
import { mergeFun } from "../utils";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  name: "Login",
  data() {
    //这里存放数据
    return {
      account: "",
      pwd: "",
      roles: [
        { role: "学生", index: 5 },
        { role: "教职工", index: 4 },
        { role: "秘书", index: 3 },
        { role: "工作人员", index: 2 },
        { role: "校领导", index: 1 },
        { role: "管理员", index: 0 },
      ],
      role: "",
      dialogFormVisible: false,
      register: {},
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleCommand(command) {
      // 切换语言
      this.$i18n.locale = command;
    },
    to() {
      if (!this.account || !this.pwd) {
        this.$message.error("请输入账号或密码");
      } else if (!this.role && this.role !== 0) {
        this.$message.error("请 选 择 身 份");
        return 0;
      } else {
        this.$store.commit("setRole", [this.role]);
        // console.log(this.$store.state.role);
        let obj = {
          username: this.account,
          password: this.pwd,
          icRole: this.role,
        };
        login(obj).then((res) => {
          console.log(res);
          if (res.code === 0) {
            sessionStorage.setItem("ICtoken", res.token);
            this.$store.commit({
              type: "changeFunModule",
              module: mergeFun(this.$store.state.role),
            });
            this.$router.push(
              this.$store.state.funModule[0].hasSub
                ? this.$store.state.funModule[0].path+"/"+this.$store.state.funModule[0].subMenu[0].path
                : this.$store.state.funModule[0].path
            );
          } else {
            this.$message.error(res.msg);
          }
        });
      }
    },
    subRegister() {
      console.log("提交注册");
      register = {};
    },
    enterKey(event) {
      const componentName = this.$options.name;
      // console.log(componentName);
      if (componentName == "Login") {
        const code = event.keyCode
          ? event.keyCode
          : event.which
          ? event.which
          : event.charCode;
        if (code === 13) {
          this.to();
        }
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    document.addEventListener("keyup", this.enterKey);
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    document.removeEventListener("keyup", this.enterKey);
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  deactivated() {}, //如果有keep-alive缓存功能,当该页面撤销使这个函数会触发
};
</script>
<style lang="less">
.login-page {
  height: 100%;
  background-color: #f9f8f5;
  .logo {
    margin: 0 auto;
    display: block;
  }
  .content {
    // margin-top: -25px;
    height: 100%;
    // display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    .login-box {
      margin: 0 auto;
      width: 680px;
      // height: 440px;
      box-sizing: border-box;
      padding: 35px 60px 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      background-color: #ffffff;
      border-radius: 0 8px 8px 0;
      .title {
        width: 100%;
        text-align: center;
        font-size: 22px;
        margin-bottom: 32px;
        color: rgb(0, 183, 158);
        position: relative;
        .lang {
          position: absolute;
          top: 0;
          right: 0px;
          .el-dropdown-link {
            cursor: pointer;
            font-size: 16px;
            height: 16px;
            .lang-img {
              height: 16px;
            }
          }
        }
      }
      .form-line {
        margin-bottom: 32px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
          width: 40px;
          height: 40px;
          margin-right: 10px;
        }
        .el-input {
          height: 40px;
          flex: 1;
        }
        .el-button {
          height: 40px;
          font-size: 18px;
          line-height: 40px;
          padding: 0;
          flex: 1;
        }
        .line {
          flex: 1;
          margin: 0;
          padding: 0;
        }
        .el-radio-group {
          height: 40px;
          flex: 1;
          display: flex;
          .el-radio-button {
            flex: 1;
            .el-radio-button__inner {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
