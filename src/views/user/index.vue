<!--  -->
<template>
  <div class="user-page">
    <div class="user-header">
      <img src="../../assets/image/logo.png" height="100%" alt />
    </div>
    <div class="user-content">
      <div class="user-menu">
        <el-menu
          default-active="/user/info"
          class="el-menu-vertical-demo"
          background-color="#f9f8f5"
          text-color="#333"
          active-text-color="#00b79e"
          :router="true"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/user/info">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="user-wrap">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import map from "../../map";
import { mergeFun } from "../../utils";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log(mergeFun([1, 4, 5]));
  },
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
<style lang='less'>
@headerHeight: 90px;
.user-page {
  height: 100%;
  .user-header {
    position: relative;
    background-color: rgb(249, 248, 245);
    height: @headerHeight;
    width: 100%;
    // width:100%
    border-bottom: solid 1px #e6e6e6;
    box-sizing: border-box;
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
      margin-left: 200px;
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
</style>