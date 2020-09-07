<!--  -->
<template>
  <div class="ov-table">
    <div class="ov-table-title">
      <div class="title-text">{{title}}</div>
      <div class="ov-operation-list">
        <!-- 操作组件 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-size="pageSize"
          layout="prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="num" label="序号" width="180"></el-table-column>
      <el-table-column prop="name" label="申报登记项目" width="180"></el-table-column>
      <el-table-column prop="address" label="操作"></el-table-column>
    </el-table>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    title:String,
    total: Number,
    pageSize: {
      type: Number,
      default: 10,
    },
  },
  components: {},
  data() {
    //这里存放数据
    return {
      tableData: [
        {
          num: 1,
          name: "zyc",
          address: "sss",
        },
        {
          num: 1,
          name: "zyc",
          address: "sss",
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {
    maxPage(){
      return Math.ceil(this.total/this.pageSize)
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
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
}
</style>