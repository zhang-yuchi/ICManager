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
      @pagesizechange="handlePageChange"
      :isLoading="loading"
      :isImportData="needImport"
    ></ovlist>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import ovlist from "../list";
import service from "network";
import tableRule from "../../map/listColumn";
import { getCurModule } from '../../utils/index'
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
      needImport:false,
      pageSize: 9,
      currentPage: 1,
      loading: false,
      query: {
        prop: "",
        str: "",
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //获取数据
    getData(params) {
      this.loading = true;
      service
        .get(this.tableDef.reqOpt.get, {
          params,
        })
        .then((res) => {
          if (res.code !== 0) {
            this.$message({
              message: res.msg,
              type: "error",
            });
            this.$router.push("/"); //权限错误
          }
          let result = res.page;
          this.tableData = result.list;
          this.total = result.totalCount;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    //页数改变
    pageChange(page) {
      this.currentPage = page;
      this.commondQuery();
    },
    //页数大小改变
    handlePageChange(val) {
      this.pageSize = val;
      this.commondQuery();
    },
    //封装一次普通查询
    commondQuery() {
      this.getData(
        Object.assign(
          {},
          {
            pageSize: this.pageSize,
            currentPage: this.currentPage,
          },
          this.query
        )
      );
    },
    //按键值方式查询
    queryKey(val) {
      // console.log(val);
      let { prop, str } = val;
      if (!prop) {
        return;
      }
      this.query.prop = prop;
      this.query.str = str;
      let obj = this.query;
      obj[prop] = str;//查询体
      this.currentPage = 1;
      if (val) {
        //开始搜素
        this.getData(
          Object.assign(
            {},
            {
              pageSize: this.pageSize,
              currentPage: this.currentPage,
            },
            obj
          )
        );
      } else {
        this.getData({
          pageSize: this.pageSize,
          currentPage: this.currentPage,
        });
      }
    },
    //修改模块
    changeModule() {
      this.tableDef = getCurModule(this,tableRule)
      if (this.tableDef.title) {
        this.Intitle = this.tableDef.title;
      } else {
        this.Intitle = this.title;
      }
      // console.log(this.tableDef);
    },
    //详情页
    handleCheck(val) {
      // console.log(val);
      this.$router.push(`${this.$route.path}/${val.id}`);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.changeModule();
    this.commondQuery()
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