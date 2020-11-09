<!--  -->
<template>
  <div class="ov-table">
    <div class="ov-table-title">
      <div class="title-text">{{ title }}</div>
      <dataOutPut
        v-if="importData"
        @checkboxselect="handleCheckBox"
        @checkboxclear="handleClearCheckBox"
        :isSelect="isCheckBoxSelect"
      ></dataOutPut>
      <div class="ov-operation-list">
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
          @keydown.native="query"
          :placeholder="$t('请输入搜索内容')"
        ></el-input>
        <!-- 操作组件 -->
        <el-pagination
          @current-change="handleCurrentChange"
          @size-change="handlePageSizeChange"
          :current-page="currentPage"
          :page-sizes="[9, 10, 20, 30]"
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
      <el-table-column type="selection" width="55" v-if="isCheckBoxSelect">
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
            {{
              scope.row[item.prop]
                ? typeCast(scope.row[item.prop], item)
                : "暂无"
            }}
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
export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    importData: Boolean,
    title: String,
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
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  components: {
    dataOutPut,
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
      dataOutPutList:[]
      // isLoading:true
    };
  },
  //监听属性 类似于data概念
  computed: {
    maxPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    queryOption() {
      let arr = [];
      this.tableColumn.map((item) => {
        if (!item.noQuery && item.prop !== "operator") {
          arr.push({
            label: item.name,
            value: item.prop,
          });
        }
      });
      return arr;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleCurrentChange(val) {
      this.$emit("pageChange", val);
    },
    handleCheck(val, emitName) {
      this.$emit(emitName, val);
    },
    handlePageSizeChange(val) {
      this.handleClearCheckBox()
      this.$emit("pagesizechange", val);
      // console.log("发射");
    },
    handleSelectionChange(val){
      console.log(val);
    },
    query(e) {
      if (e.code === "Enter") {
        // console.log("搜索");
        this.$emit("query", {
          prop: this.queryField,
          str: this.querystr,
        });
      }
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
      return item;
    },
    checkRole(auth) {
      return checkAuth(auth, this.$store.state.role);
    },
    handleCheckBox() {
      this.isCheckBoxSelect = !this.isCheckBoxSelect;
    },
    handleClearCheckBox(){
      this.$refs.multipleTable.clearSelection();
      this.multipleSelection = []
      this.dataOutPut = []
    }
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