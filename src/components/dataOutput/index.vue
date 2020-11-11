<!--  -->
<template>
  <div class="data-out-put-cmp">
    <el-button size="small" type="primary" @click="emitSelect">{{
      isSelect ? "取消" : "数据导出"
    }}</el-button>
    <el-button v-if="isSelect" type="warning" @click="outputData" size="small"
      >确认导出</el-button
    >
    <el-button v-if="isSelect" size="small" @click="emitClear"
      >清除选择</el-button
    >
    <a ref="download" display="none" :href="`${baseUrl}/file?fileName=${fileName}`"></a>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { excelDownload, downloadFile } from "network/table";
import tableRule from "../../map/listColumn";
import { getCurModule } from "../../utils/index";
import config from "../../network/config";
export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    isSelect: {
      type: Boolean,
      default: false,
    },
    importData: {
      type: Object,
      default: {},
    },
  },
  components: {},
  data() {
    //这里存放数据
    return {
      form: {
        clazzName: "",
        jsonList: [],
      },
      baseUrl: "",
      fileName:"",
    };
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
    outputData() {
      let importJson = [];
      Object.keys(this.importData).map((item) => {
        this.importData[item].map((row) => {
          importJson.push(row);
        });
      });
      const table = getCurModule(this, tableRule);
      this.form.clazzName = table.backendTableName;
      this.form.jsonList = importJson;
      // this.$refs['outputAction'].submit()
      // console.log(importJson);
      excelDownload(this.form.clazzName, this.form.jsonList).then((res) => {
        this.fileName = res
      }).then(()=>{
        this.$refs['download'].click()
      })
    },
    emitClear() {
      this.$emit("checkboxclear");
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.baseUrl = config.baseUrl;
    
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
.data-out-put-cmp {
  width: 260px;
  display:inline-block;
  margin-left: 30px;
}
</style>