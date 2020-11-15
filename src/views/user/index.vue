<!--  -->
<template>
  <div class="user-page">
    <div class="user-header">
      <img src="../../assets/image/logo.png" height="100%" alt />
      <div class="lang">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <img
              class="lang-img"
              src="~/assets/image/yuyan.svg"
              alt="language"
            />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh">中文（简体）</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <i class="el-icon-switch-button" @click="logout"></i>
    </div>
    <div class="user-content">
      <div class="user-menu">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="#f9f8f5"
          text-color="#333"
          active-text-color="#00b79e"
          :router="true"
        >
          <div v-for="item in funModule" :key="item.path">
            <el-menu-item v-if="!item.hasSub" :index="item.path">
              <i :class="item.icon"></i>
              <span slot="title">{{ $t(item.name) }}</span>
            </el-menu-item>
            <el-submenu v-else :index="item.path">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{ $t(item.name) }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  v-for="i in item.subMenu"
                  :index="item.path + '/' + i.path"
                  :key="i.path"
                >
                  {{ $t(i.name) }}
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </div>
        </el-menu>
      </div>
      <div class="user-wrap">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import map from "../../map";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    funModule() {
      return this.$store.state.funModule;
    },
    role() {
      return this.$store.state.role;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleCommand(command) {
      // 切换语言
      this.$i18n.locale = command;
    },
    logout() {
      this.$router.push("/");
      sessionStorage.removeItem("ICtoken");
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
@headerHeight: 90px;
.user-page {
  height: 100%;
  // position: relative;
  .user-header {
    position: relative;
    background-color: rgb(249, 248, 245);
    height: @headerHeight;
    width: 100%;
    // width:100%
    border-bottom: solid 1px #e6e6e6;
    box-sizing: border-box;
    .lang {
      height: 18px;
      position: absolute;
      right: 80px;
      top: 50%;
      cursor: pointer;
      transform: translateY(-50%);
      .lang-img {
        height: 18px;
      }
      .el-dropdown-menu__item {
        height: 20px;
        line-height: 20px;
        font-size: 2px;
      }
    }
    .el-icon-switch-button {
      color: #9e9c9c;
      font-size: 18px;
      right: 30px;
      position: absolute;
      top: 50%;
      cursor: pointer;
      transform: translateY(-50%);
    }
  }
  .user-content {
    height: calc(100% - @headerHeight);
    position: relative;
    .user-menu {
      position: absolute;
      width: 220px;
      overflow: auto;
      height: 100%;
      top: 0;
      left: 0;
      background-color: #f9f8f5;
      box-sizing: border-box;
      border-right: solid 1px #e6e6e6;
      .el-menu {
        border: none;
      }
    }
    .user-wrap {
      background-color: #fafafa;
      margin-left: 220px;
      height: 100%;
      box-sizing: border-box;
      overflow: auto;
      & > div {
        height: 100%;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
      }
    }
  }
}
.fun-info-page {
  .box-card {
    width: 80%;
    margin: 0 auto 30px auto;
  }
}
</style>
