<!--  -->
<template>
  <div class="" style="display: inline-block">
    <el-button size="small" @click="emitSelect" type="danger">{{
      isSelect ? "取消" : "批量删除"
    }}</el-button>
    <el-button size="small" v-if="isSelect" @click="bulkyDelete" type="warning">确定</el-button>
    <el-button size="small" v-if="isSelect" @click="handleClear"
      >清除选择</el-button
    >
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    isSelect: {
      type: Boolean,
      default: false,
    },
    DeleteData:{
      type:Object,
      default:()=>{}
    },
  },
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
  methods: {
    emitSelect() {
      this.$emit("checkboxselect");
    },
    handleClear() {
      this.$emit("checkboxclear");
    },
    bulkyDelete(){
      this.$emit("bulkyDeleteRequest",this.DeleteData)
    }
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
<style lang='less'>
</style>