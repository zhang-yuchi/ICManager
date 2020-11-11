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
    <el-dialog title="查询" :visible.sync="dialog.isShow">
      <el-form :model="mixQueryForm" :inline="true">
        <el-form-item
          v-for="keys in Object.keys(mixQueryForm)"
          :key="keys"
          :label="mixQueryForm[keys]['label']"
          label-width="300"
        >
          <el-input
            v-if="mixQueryForm[keys]['type'] != 'time'"
            v-model="mixQueryForm[keys]['value']"
          ></el-input>
          <div v-if="mixQueryForm[keys]['type'] == 'time'">
            <el-date-picker
              v-model="mixQueryForm[keys]['value']"
              type="date"
              placeholder="起始日期"
              style="width: 140px"
            >
            </el-date-picker>
            <!-- <el-input
              placeholder="这是时间"
              style="width: 140px"
              v-model="mixQueryForm[keys]['value']"
            ></el-input> -->
            -
            <!-- <el-input
              placeholder="这是时间"
              style="width: 140px"
              v-model="mixQueryForm[keys]['value']"
            ></el-input> -->
            <el-date-picker
              v-model="mixQueryForm[keys]['value']"
              type="date"
              placeholder="结束日期"
              style="width: 140px"
            >
            </el-date-picker>
          </div>

          <!-- {{mixQueryForm[keys]}} -->
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialog.isShow = false">取 消</el-button>
        <el-button type="primary" @click="queryMany">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    mixQuery: {
      type: Boolean,
      default: false,
    },
    queryOption: {
      type: Array,
      default: [],
    },
  },
  components: {},
  data() {
    //这里存放数据
    return {
      queryField: "",
      querystr: "",
      dialog: {
        isShow: false,
      },
      mixQueryList: {},
      mixQueryForm: {},
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    openDialog() {
      this.dialog.isShow = true;
    },
    queryMany() {
      // this.$emit("query", this.mixQueryObj);
      console.log(this.mixQueryForm);
      this.dialog.isShow = false;
    },
    queryOne(e) {
      if (e.code === "Enter") {
        // console.log("搜索");
        let obj = {};
        obj[this.queryField] = this.querystr;
        this.$emit("query", obj);
        // console.log(obj);
      }
    },
    initDialog() {
      this.$nextTick(() => {
        let tempForm = {};
        if (this.mixQuery) {
          this.mixQueryList = this.queryOption;
          this.mixQueryList.map((op) => {
            tempForm[op.prop] = {
              label: op.label,
              value: "",
              type: op["type"],
            };
          });
          this.mixQueryForm = { ...tempForm };
        }
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.initDialog();
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
  .el-form-item__label {
    width: 100px;
    line-height: 20px;
  }
}
</style>