<!--  -->
<template>
  <div class>
    <ovlist
      :title="Intitle"
      @pageChange="pageChange"
      :tableData="tableData"
      :currentPage="currentPage"
      :total="total"
      :tableColumn="tableDef.column"
      @query="queryKey"
      @handleCheck="handleCheck"
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
  },
  components: { ovlist },
  data() {
    //这里存放数据
    return {
      tableData: [],
      total: 0,
      Intitle: "",
      tableDef: {
        column: [],
      },
      pageSize: 9,
      currentPage: 1,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getData(params) {
      service
        .get(this.tableDef.reqOpt.get, {
          params,
        })
        .then((res) => {
          console.log(res);
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
      let { prop, str } = val;
      if (!prop) {
        return;
      }
      let obj = {};
      obj[prop] = str;
      this.currentPage = 1;
      if (val) {
        //开始搜素
        this.getData(
          Object.assign(
            {},
            {
              limit: this.pageSize,
              page: this.currentPage,
            },
            obj
          )
        );
      } else {
        this.getData({
          limit: this.pageSize,
          page: this.currentPage,
        });
      }
    },
    changeModule() {
      let module = "";
      let router = this.$route.path;
      let icReg = /\/user\/icCheck/;
      let apply = /\/user\/apply/;
      let statistics = /\/user\/statistics/;
      if (icReg.test(router)) {
        module = "icCheck";
      } else if (apply.test(router)) {
        module = "apply";
      } else {
        module = "statistics";
      }
      console.log(module);
      let params = this.$route.params.router;
      this.tableDef = tableRule[module][params];
      if (this.tableDef.title) {
        this.Intitle = this.tableDef.title;
      } else {
        this.Intitle = this.title;
      }
      console.log(this.tableDef);
    },
    handleCheck(val) {
      console.log(val);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.changeModule();
    this.getData({
      limit: this.pageSize,
      page: this.currentPage,
    });
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