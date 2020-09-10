<!--  -->
<template>
  <div class>
    <ovlist
      :title="title"
      @pageChange="pageChange"
      :tableData="tableData"
      :currentPage="currentPage"
      :total="total"
      :tableColumn="tableDef.column"
      @query="queryKey"
      @handleCheck='handleCheck'
    ></ovlist>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import ovlist from "../list";
import service from "network";
import tableRule from "../../map/listColumn";
export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    title: String,
    reqOpt: {
      type: Object, //get/put/delete/post
      default: () => {},
    },
    currentPage: 1,
  },
  components: { ovlist },
  data() {
    //这里存放数据
    return {
      tableData: [],
      total: 0,
      tableDef: {
        column: [],
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {

  },
  //方法集合
  methods: {
    getData() {
      service.get("/endpoint/icorg/list").then((res) => {
        let result = res.page;
        this.tableData = result.list;
        this.total = result.totalCount;
      });
    },
    pageChange(page) {
      this.currentPage = page;
    },
    queryKey(val) {
      console.log(val);
      if (val) {
        //开始搜素
      }
    },
    changeModule() {
      let module = "";
      let router = this.$route.path;
      let icReg = /\/user\/icCheck/;
      let apply = /\/user\/icCheck/;
      let statistics = /\/user\/icCheck/;
      console.log(router);
      console.log(icReg.test(router));
      if (icReg.test(router)) {
        module = "icCheck";
      } else if (apply.test(router)) {
        module = "apply";
      } else {
        module = "statistics";
      }
      let params = this.$route.params.router;
      this.tableDef = tableRule[module][params];
    },
    handleCheck(val){
      console.log(val);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.changeModule();
    this.getData();
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
</style>