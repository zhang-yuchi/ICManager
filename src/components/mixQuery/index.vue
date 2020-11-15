<!--  -->
<template>
  <div class="mixQuery">
    <div v-if="!mixQuery">
      <el-select
        v-model="queryField"
        class="select-input"
        :placeholder="$t('请选择')"
      >
        <el-option
          v-for="item in queryOption"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-input
        :disabled="!queryField"
        v-model="querystr"
        class="query-input"
        @keydown.native="queryOne"
        :placeholder="$t('请输入搜索内容')"
      ></el-input>
    </div>
    <el-button
      v-if="mixQuery"
      size="small"
      style="margin-right: 18px"
      type="warning"
      @click="openDialog"
      >查询参数设置</el-button
    >
    <ov-dialog
      :fieldOption="queryOption"
      :echo="echoQuery"
      @echoShow="handleEchoShow"
      @handleDialogCancel="queryManyCancel"
      @handleDialogClick="queryMany"
      title="混合查询"
    ></ov-dialog>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import ovDialog from 'components/ovDialog'
export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    mixQuery: {
      type: Boolean,
      default: false,
    },
    queryOption: {
      /*
        {
          label:"xxx",
          value:"xxx"
        }
      */ 
      type: Array,
      default: [],
    },
  },
  components: {
    ovDialog
  },
  data() {
    //这里存放数据
    return {
      queryField: "",
      querystr: "",
      echoQuery:false
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    openDialog() {
      this.echoQuery = true
    },
    queryMany(query) {
      // console.log(query);
      this.$emit("query",query)
    },
    queryManyCancel(){
      this.echoQuery = false
    },
    handleEchoShow(echo){
      this.echoQuery = echo
    },
    queryOne(e) {
      if (e.code === "Enter") {
        let obj = {};
        obj[this.queryField] = this.querystr;
        this.$emit("query", obj);
      }
    },
    
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

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
.mixQuery {
  
}
</style>