<!-- 表单 -->
<template>
  <div class="fun-info-page">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ data.title }}填报</span>
      </div>
      <elform
        class="form-com"
        :title="data.title"
        :config="data.config"
        :rules="data.rules"
        @submit="submit"
      ></elform>
    </el-card>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import elform from "components/form";
import {createStaticFormInfo} from "@/map/function/index.js";

import * as service from "network/applyApplication";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { elform },
  data() {
    //这里存放数据
    return {
      data: {},
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    submit(form) {
      console.log(form);
      service[this.data.request](form)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    let routeArr = this.$route.path.split("/");
    console.log(routeArr[routeArr.length - 3]);
    this.data = createStaticFormInfo(routeArr[routeArr.length - 3]);
    console.log(this.data);
  },
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

</style>
