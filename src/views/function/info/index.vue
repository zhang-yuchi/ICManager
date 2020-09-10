<!-- 表单 -->
<template>
  <div class=""><elform :config="config" :rules="rules"></elform></div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import elform from "components/form";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { elform },
  data() {
    //这里存放数据
    return {
      // 1.教师出国交流
      config: [
        {
          type: "input",
          prop: "name",
          label: "姓名",
          required: true, // 默认为true
          placeholder: "请输入",
        },
        {
          type: "input",
          prop: "unit",
          label: "单位",
          placeholder: "请输入",
        },
        {
          type: "input",
          prop: "job",
          label: "职务/职称",
          placeholder: "请输入",
        },
        {
          type: "input",
          prop: "country",
          label: "地区/国别",
          placeholder: "请输入",
        },
        {
          type: "input",
          prop: "organization",
          label: "访问机构",
          placeholder: "请输入",
        },
        {
          type: "textarea",
          prop: "reason",
          label: "事由及出国身份",
          placeholder: "请输入",
          maxlength:50
        },

        {
          type: "radio",
          prop: "gender",
          label: "性别",
          options: ["男", "女"],
        },
        {
          type: "select",
          prop: "category",
          label: "类别",
          options: [
            { label: "中长期", value: "1" },
            { label: "短期期", value: "0" },
          ],
        },
        {
          type: "date",
          prop: "start",
          label: "开始日期",
          placeholder: "请选择日期",
        },
        {
          type: "date",
          prop: "end",
          label: "结束日期",
          placeholder: "请选择日期",
        },
        {
          type: "input",
          prop: "period",
          label: "时长",
          placeholder: "请输入",
        },
        {
          type: "file",
          prop: "appendix",
          label: "附件",
          limit: 1,
          required:false,
          action: "https://jsonplaceholder.typicode.com/posts/", // 上传地址
          // headers:{token:sessionStorage.getItem('ICtoken')},
          tip:'只能上传 doc，docx，pdf，png，jpg 文件，且不超过500kb'
        },
        // { type: "checkbox", prop: "hobit", label: "爱好", required: false },
      ],
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度为3-5", trigger: "blur" },
        ],
        // unit: [],
        // job: [],
        // country: [],
        // organization: [],
        // reason: [],
        // gender: [],
        // category: [],
        // start: [],
        // end: [],
        // period: [],
        // file:[],
      },
    };
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
