<!-- 表单 -->
<template>
  <div class="fun-info-page">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ data.title }}填报</span>
      </div>
      <elform
        ref="form"
        class="form-com"
        :title="data.title"
        :config="data.config"
        :rules="data.rules"
        :submitFlag="!data.submitHide"
        @submit="submit"
        @delForm="del"
      ></elform>
    </el-card>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
let path = "";

import elform from "components/form/info";
import { createStaticFormInfo } from "@/map/function/index.js";

import infoMap from "@/map/function/statics/request";
import parameterMap from "@/map/function/statics/parameter";
import * as info from "network/apply/applyInfo";
import * as del from "network/apply/applyDel";
import * as service from "network/apply/applyApplication";
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
      // 只提交 userOrg,username
      let obj = {};
      obj = {
        userOrg: form.userOrg,
        username: form.username,
      };
      service[this.data.request](obj).then((res) => {
        // console.log(res);
        if (res.code === 0) {
          this.$message({
            message: "提交成功",
            type: "success",
          });
          this.$router.go(-1);
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    del() {
      del[infoMap[path]]([this.$route.query.id]).then((res) => {
        console.log(res);
        if (res.code === 0) {
          this.$message({
            message: "删除成功",
            type: "success",
          });
          this.$router.go(-1);
        } else {
          this.$message.error(res.msg);
        }
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    let routeArr = this.$route.path.split("/");
    path = routeArr[routeArr.length - 3];
    console.log(infoMap[path]);
    this.data = createStaticFormInfo(path, this);
    info[infoMap[path]](this.$route.query.id).then((res) => {
      console.log(res);
      if (res.code === 0) {
        if (res.data.files) {
          res.data.fileList = res.data.files.split[","];
        } else {
          res.data.fileList = [];
        }
        if (res.data.course) {
          res.data.courseList = res.data.course.split(",");
        } else {
          res.data.courseList = [];
        }
        this.$refs.form.form = res.data;
      } else {
        this.$message.error(res.msg);
      }
    });
    // console.log(this.data);
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
<style lang="less"></style>
