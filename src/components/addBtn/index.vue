<!--  -->
<template>
  <div style="display: inline-block">
    <el-tooltip
      class="item"
      effect="dark"
      content="添加一条数据"
      placement="top-start"
    >
      <img
        src="../../assets/image/add.png"
        @click="addOneData"
        class="add-btn"
        alt=""
      />
    </el-tooltip>
    
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import ovDialog from 'components/ovDialog';
import staticMap from 'map/function/statics/map.js'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    ovDialog
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    addOneData(){
      let arr = this.$route.path.split('/');
      let path = staticMap[arr[arr.length-2]];
      if(path){ // 统计汇总
        this.$router.push(`/user/apply/${path}/info`)
      }
    }
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
</style>