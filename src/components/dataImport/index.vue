<!--  -->
<template>
  <div class="list-dataImport">
    <el-tooltip
      class="item"
      effect="dark"
      content="导入excel"
      placement="top-start"
    >
      <img
        style="width: 25px; height: 21px; cursor: pointer; margin-top: 6px"
        src="../../assets/image/import.png"
        alt=""
        @click="upload"
      />
    </el-tooltip>
    <el-dialog title="导入数据" :visible.sync="ImportVisiable" width="30%">
      <span style="margin-bottom:30px;display:block;text-align:center;">将excel中的内容复制到文本框中上传即可</span>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="textarea"
      >
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="ImportVisiable = false">取 消</el-button>
        <el-button type="primary" @click="ImportVisiable = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      ImportVisiable: false,
      textarea:""
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    upload() {
      this.ImportVisiable = true;
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
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
.list-dataImport {
  .el-upload-list el-upload-list--text {
    display: none;
  }
}
</style>