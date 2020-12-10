<!--  -->
<template>
  <div class>
    <list
      :total="tableAllData.length"
      :title="$t('统计汇总列表')"
      :tableColumn="tableColumn"
      :queryOption="queryOption"
      @pageChange="pageChange"
      :tableData="tableData"
      @handleCheck="handleCheck"
      @query="query"
      @pagesizechange="handlePageChange"
    ></list>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import list from "components/list";
import { checkAuth } from "../../../utils/index";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { list },
  data() {
    //这里存放数据
    return {
      tableData: [],
      tableAllData: [],
      tableColumn: [
        { prop: "num", name: "序号" },
        { prop: "name", name: "申报登记项目", width: 400 },
        {
          prop: "operator",
          name: "操作",
          noQuery: true, //不需要纳入查询
          button: [
            {
              btnName: "查看",
              emit: "handleCheck",
            },
          ],
        },
      ],
      currentPage: 1,
      pageSize: 9,
      entitySet: {},
    };
  },
  //监听属性 类似于data概念
  computed: {
    funModule() {
      return this.$store.state.funModule;
    },
    applyModule() {
      return this.funModule.find((val) => {
        return val.path.search(/statistics/) !== -1;
      });
    },
    applySubFun() {
      return this.applyModule.subMenu;
    },
    role() {
      return this.$store.state.role;
    },
    queryOption(){
      let arr = [];
      this.tableColumn.map((item) => {
        if (!item.noQuery && item.prop !== "operator") {
          item["label"] = item.name;
          item["value"] = item.prop;
          arr.push(item);
        }
      });
      return arr;
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleCheck(val) {
      let isList = checkAuth(this.applyModule.listAuth, this.role);
      const index = val.num - 1;
      const routerName = this.applySubFun[index].path;
      this.$router.push("/user/statistics/" + routerName + "/list");
    },
    handlePageChange(val) {
      this.pageSize = val;
      this.getData();
    },
    pageChange(page) {
      this.currentPage = page;
      this.getData();
      // console.log(this.tableData);
    },
    getData() {
      // let hasVal = false
      let queryVal = null
      Object.keys(this.entitySet).map(ke=>{
        queryVal=this.entitySet[ke]
      })
      // console.log(hasVal);
      if (!!queryVal) {
        let keys = Object.keys(this.entitySet);
        let prop = keys[0];
        // console.log(prop);
        this.tableAllData = this.tableAllData.filter((item) => {
          console.log(item[prop]);
          if(String(item[prop]).indexOf(this.entitySet[prop]) !== -1){
            console.log(item[prop]);
          }
          return String(item[prop]).indexOf(this.entitySet[prop]) !== -1;
        });
      } else {
        // console.log("重新加载一次");
        this.tableAllData = this.applySubFun.map((item, index) => {
          return {
            num: index + 1,
            name: item.name,
          };
        });
      }
      this.tableData = this.tableAllData.slice(
        (this.currentPage - 1) * this.pageSize,
        (this.currentPage - 1) * this.pageSize + this.pageSize
      );
    },
    query(entitySet) {
      this.entitySet = entitySet;
      // console.log(this.entitySet);
      this.getData();
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // console.log(this.funModule);
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
<style lang="less"></style>
