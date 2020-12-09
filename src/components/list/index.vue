<!--  -->
<template>
  <div class="ov-table">
    <div class="ov-table-title">
      <div class="title-text">
        {{ title }}
        <dataOutPut
          v-if="needImport"
          @checkboxselect="handleCheckBox"
          @checkboxclear="handleClearCheckBox"
          :isSelect="isCheckBoxSelect"
          :importData="bulkySelect"
        ></dataOutPut>
        <addBtn v-if="needAdd"></addBtn>

        <dataDel
          v-if="needDelete"
          :DeleteData="bulkySelect"
          :isSelect="isBatchDeleteBoxSelect"
          bulkyDeleteRequest
          @bulkyDeleteRequest="emitDelete"
          @checkboxselect="handleBatchDeleteBox"
          @checkboxclear="handleClearCheckBox"
        ></dataDel>
      </div>
      <div class="ov-operation-list">
        <mixQuery
          :mixQuery="mixQuery"
          :queryOption="queryOption"
          @query="query"
        ></mixQuery>
        <!-- 操作组件 -->
        <el-pagination
          @current-change="handleCurrentChange"
          @size-change="handlePageSizeChange"
          :current-page="currentPage"
          :page-sizes="[9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]"
          :small="true"
          :page-size="pageSize"
          layout="sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
    </div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      v-loading="isLoading"
      @selection-change="handleSelectionChange"
      ref="multipleTable"
    >
      <el-table-column
        type="selection"
        width="55"
        v-if="isCheckBoxSelect || isBatchDeleteBoxSelect"
      >
      </el-table-column>
      <el-table-column
        v-for="(item, index) in tableColumn"
        :key="item[columnKey]"
        :prop="item.prop"
        :label="item.name"
        :width="
          index < tableColumn.length - 1
            ? item.width
              ? item.width
              : 180
            : item.width
            ? item.width
            : 0
        "
        :fixed="
          index == 0 ? 'left' : index < tableColumn.length - 1 ? false : 'right'
        "
      >
        <template slot-scope="scope">
          <div v-if="item.prop !== 'operator'">
            {{ typeCast(scope.row[item.prop], item) }}
          </div>
          <div v-else>
            <div
              style="display: inline-block"
              v-for="btn in item.button"
              :key="btn.btnName"
            >
              <el-button
                @click="handleCheck(scope.row, btn.emit)"
                type="text"
                size="small"
                v-if="btn.auth ? checkRole(btn.auth) : true"
                >{{ btn.btnName }}</el-button
              >
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { checkAuth } from "../../utils/index";
import moment from "moment";
import dataOutPut from "../dataOutput";
import dataDel from "../dataDel";
import mixQuery from "../mixQuery";
import ovDialog from "components/ovDialog";
import addBtn from 'components/addBtn'
export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    bulkySelect: {
      type: Object,
      default: () => {},
    },
    needDelete: Boolean,
    needImport: Boolean, //是否需要导入数据
    isBatchDelete: Boolean, //是否批量删除
    title: String, //标题
    total: Number,
    pageSize: {
      type: Number,
      default: 9,
    },
    isLoading: { type: Boolean, default: false },
    tableData: { type: Array, default: () => [] },
    tableColumn: {
      type: Array,
      default: () => [],
    },
    queryOption: {
      type: Array,
      default: () => [],
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    mixQuery: {
      //是否支持混查
      type: Boolean,
      default: false,
    },
    needAdd: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    dataOutPut,
    mixQuery,
    ovDialog,
    dataDel,
    addBtn
  },
  data() {
    //这里存放数据
    return {
      querystr: "",
      queryField: "",
      columnKey: "",
      moment: moment,
      isCheckBoxSelect: false,
      multipleSelection: [],
      isPageChange: false,
      isBatchDeleteBoxSelect: false,
    };
  },
  //监听属性 类似于data概念
  computed: {
    maxPage() {
      return Math.ceil(this.total / this.pageSize);
    },
  },
  //监控data中的数据变化
  watch: {
    currentPage() {
      this.isPageChange = true; //检测到page发生变化
    },
    tableData() {
      //data发生变化,需要修改当前output的状态
      if (this.isCheckBoxSelect || this.isBatchDeleteBoxSelect) {
        this.$nextTick(() => {
          if (this.bulkySelect[this.currentPage]) {
            this.bulkySelect[this.currentPage].map((item) => {
              this.tableData.map((row, index) => {
                if (row.id == item.id) {
                  this.$refs.multipleTable.toggleRowSelection(
                    this.tableData[index],
                    true
                  );
                }
              });
            });
          }
        });
      }
    },
  },
  //方法集合
  methods: {
    handleCurrentChange(val) {
      this.$emit("pageChange", val);
    },
    handleCheck(val, emitName) {
      this.$emit(emitName, val);
    },
    handlePageSizeChange(val) {
      this.handleClearCheckBox();
      this.$emit("pagesizechange", val);
    },
    handleSelectionChange(val) {
      if (!this.isPageChange || val.length > 0) {
        // console.log(val);
        this.$emit("addBulkySelect", this.currentPage, val);
        // this.bulkySelect[this.currentPage] = val;
        this.isPageChange = false;
      }
    },
    query(queryObj) {
      // console.log("搜索");
      this.$emit("query", queryObj);
      this.handleClearCheckBox();
    },
    typeCast(item, rule) {
      if (rule.type == "time") {
        item = moment(item).format("YYYY-MM-DD");
      } else if (rule.type == "boolean") {
        if (item == 1) {
          item = "是";
        } else if (item == 0) {
          item = "否";
        }
      }
      if (item == 0) {
        return 0;
      }
      if (!item) {
        return "暂无";
      }
      if (item === "Invalid date") {
        return "暂无";
      }
      return item;
    },
    checkRole(auth) {
      return checkAuth(auth, this.$store.state.role);
    },
    handleCheckBox() {
      this.isCheckBoxSelect = !this.isCheckBoxSelect;
    },
    handleBatchDeleteBox() {
      this.isBatchDeleteBoxSelect = !this.isBatchDeleteBoxSelect;
    },
    handleClearCheckBox() {
      this.$refs.multipleTable.clearSelection();
      this.multipleSelection = [];
      // this.bulkySelect = {};
      this.$emit("clearBulkySelect");
    },
    emitDelete(data) {
      // console.log(data);
      this.$emit("bulkyDelete", data);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$nextTick(() => {
      this.columnKey = this.tableColumn[0].prop;
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
.ov-table {
  .ov-table-title {
    padding: 10px 0;
    .title-text {
      font-size: 18px;
      color: #333;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .add-btn {
    position: relative;
    top: -50%;
    transform: translateY(30%);
    width: 25px;
    cursor: pointer;
  }
  .ov-operation-list {
    display: flex;
    align-items: center;
    .select-input {
      margin-right: 15px;
      width: 150px;
    }
    .query-input {
      margin-right: 15px;
      width: 200px !important;
    }
  }
}
</style>