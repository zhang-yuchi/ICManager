<!--  -->
<template>
  <div class="login-page">
    <div class="content">
      <img class="logo" src="~assets/image/logo.png" alt="" />
      <div class="login-box">
        <div class="title">登陆/LOGIN</div>
        <div class="form-line">
          <img class="icon" src="~assets/image/user.svg" alt="" />
          <el-input v-model="account" placeholder="账号"></el-input>
        </div>
        <div class="form-line">
          <img class="icon" src="~assets/image/psd.svg" alt="" />
          <el-input v-model="psd" type="password" placeholder="密码"></el-input>
        </div>
        <div class="form-line">
          <img class="icon" src="~assets/image/quanxian.svg" alt="" />
          <div class="line">
            <el-checkbox-group v-model="role">
              <el-checkbox-button
                v-for="item in roles"
                :label="item.index"
                :key="item.index"
                @click.prevent
                >{{ item.role }}</el-checkbox-button
              >
            </el-checkbox-group>
          </div>
        </div>
        <div class="form-line">
          <div class="icon"></div>
          <el-button type="primary" @click="to">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      account: "",
      psd: "",
      roles: [
        { role: "学生", index: 5 },
        { role: "教职工", index: 4 },
        { role: "秘书", index: 3 },
        { role: "工作人员", index: 2 },
        { role: "校领导", index: 1 },
        { role: "管理员", index: 0 },
      ],
      role: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    to() {
      this.$store.commit("setRole", this.role);
      console.log(this.$store.state.role);
      this.$router.push("/user");
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  deactivated() {}, //如果有keep-alive缓存功能,当该页面撤销使这个函数会触发
};
</script>
<style lang="less">
.login-page {
  width: 100%;
  height: 100%;
  min-height: 820px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f8f5;
  .content {
    min-width: 1236px;
    min-height: 630px;
    margin-top: -190px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .login-box {
      width: 680px;
      height: 440px;
      box-sizing: border-box;
      padding: 10px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      background-color: #ffffff;
      border-radius: 0 8px 8px 0;
      .title {
        font-size: 22px;
        color: rgb(0, 183, 158);
      }
      .form-line {
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
          .el-checkbox-group {
            width: 100%;
            display: flex;
            .el-checkbox-button {
              flex: 1;
              .el-checkbox-button__inner {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
