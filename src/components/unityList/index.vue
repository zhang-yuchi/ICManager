<!--  -->
<template>
  <div class>
    <ovlist
      :title="Intitle"
      :tableData="tableData"
      :currentPage="currentPage"
      :total="total"
      :tableColumn="tableDef.column"
      :queryOption="queryOption"
      :isLoading="loading"
      :isImportData="needImport"
      :mixQuery="true"
      :bulkySelect="bulkySelect"
      @pageChange="pageChange"
      @query="queryKey"
      @handleCheck="handleCheck"
      @handleUpdate="handleUpdate"
      @pagesizechange="handlePageChange"
      @addBulkySelect="handleBulkySelect"
      @clearBulkySelect="handleClearBulkySelect"
    ></ovlist>
    <ovDialog
      v-if="operatorAdmit.update"
      :echo="isUpdateShow"
      :fieldOption="updateOption"
      :entity="updateEntity"
      @echoShow="handleEchoShow"
      @handleDialogCancel="updateCancel"
      @handleDialogClick="updateRequest"
      title="修改操作"
    ></ovDialog>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import ovlist from "../list";
import ovDialog from "components/ovDialog";
import service from "network";
import tableRule from "../../map/listColumn";
import { getCurModule } from "../../utils/index";
import { reqOpt } from "../../map/listColumn/statistics/column/teacherBoard";
export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    title: String,
  },
  components: { ovlist, ovDialog },
  data() {
    //这里存放数据
    return {
      tableData: [],
      total: 0,
      Intitle: "",
      tableDef: {
        column: [],
      },
      bulkySelect:{},
      needImport: false,
      pageSize: 9,
      currentPage: 1,
      loading: false,
      isUpdateShow: false,
      updateEntity: {},
    };
  },
  //监听属性 类似于data概念
  computed: {
    queryOption() {
      let arr = [];
      this.tableDef.column.map((item) => {
        if (!item.noQuery && item.prop !== "operator") {
          item["label"] = item.name;
          item["value"] = item.prop;
          arr.push(item);
        }
      });
      return arr;
    },
    updateOption() {
      let arr = [];
      this.tableDef.column.map((item) => {
        if (item.prop !== "operator" && !item.noUpdate) {
          item["label"] = item.name;
          item["value"] = item.prop;
          arr.push(item);
        }

      });
      return arr;
    },
    operatorAdmit() {
      //判断是否具有增删改查功能
      let obj = {
        get: false,
        update: false,
        delete: false,
      };
      this.tableDef.column.map((item, index) => {
        if (item.prop == "operator") {
          item.button.map((btn) => {
            if (btn.emit == "handleUpdate") {
              obj.update = true;
            } else if (btn.emit == "handleCheck") {
              obj.get = true;
            } else if (btn.emit == "handleDelete") {
              obj.delete = true;
            }
          });
        }
      });
      return obj;
    },
  },
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
          // console.log(res);
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
    queryKey(obj) {
      this.currentPage = 1;
      if (Object.keys(obj).length > 0) {
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
      this.tableDef = getCurModule(this, tableRule);
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
    //更新
    handleUpdate(val) {
      this.updateEntity = val;
      this.updateEntity.id = val.id //传入主键 否则将被过滤
      this.isUpdateShow = true;
    },
    //对话框响应
    handleEchoShow(val) {
      this.isUpdateShow = val;
    },
    //取消修改
    updateCancel() {
      this.isUpdateShow = false;
    },
    //修改请求
    updateRequest(val) {
      // console.log("提交请求");
      let uploadEntity = this.createNewEntity(val);
      let promise = null;
      console.log(uploadEntity);
      if (typeof this.tableDef["reqOpt"]["update"] == "string") {
        promise = service.put(this.tableDef["reqOpt"], uploadEntity);
      } else if (typeof this.tableDef["reqOpt"]["update"] == "object") {
        promise = service[this.tableDef["reqOpt"]["update"]["method"]](
          this.tableDef["reqOpt"]["update"]["url"],
          uploadEntity
        );
      }
      //传入保存的id
      uploadEntity.id = this.updateEntity.id
      promise
        .then((res) => {
          console.log(res);
          if (res.msg == "success" && res.code == 0) {
            this.$message({
              type: "success",
              message: "操作成功",
            });
          } else {
            this.$message({
              type: "error",
              message: res.msg,
            });
          }
        })
        .finally(() => {
          this.commondQuery();
        });
      // console.log(val);
    },
    //创建实体对象
    createNewEntity(val) {
      let obj = {};
      console.log(val);
      Object.keys(val).map((keys) => {
        obj[keys] = val[keys].value;
      });
      return obj;
    },
    //获取多选框数据
    handleBulkySelect(page,val){
      this.bulkySelect[page] = val
    },
    //清除多选框数据
    handleClearBulkySelect(){
      this.bulkySelect = {}
    },
    //获取bulkySelect的id数组
    getBulkySelectId(){
      
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.changeModule();
    this.commondQuery();
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