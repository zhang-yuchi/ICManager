<!--  -->
<template>
  <div class="ov-dialog">
    <el-dialog :title="title" :visible.sync="isShow">
      <el-form :model="mixQueryForm" :inline="true">
        <el-form-item
          v-for="keys in Object.keys(mixQueryForm)"
          :key="keys"
          :label="mixQueryForm[keys]['label']"
          label-width="300"
          :required="mixQueryForm[keys]['required']"
        >
          <el-select
            placeholder="请选择"
            v-if="mixQueryForm[keys]['type'] == 'select'"
            v-model="mixQueryForm[keys]['value']"
          >
            <el-option
              v-for="(item) in Object.keys(mixQueryForm[keys]['enum'])"
              :key="item"
              :label="mixQueryForm[keys]['enum'][item]"
              :value="item"
            >
            </el-option>
          </el-select>
          <div v-if="mixQueryForm[keys]['type'] == 'time' && !isUpdate">
            <el-date-picker
              v-model="mixQueryForm[keys]['startTime']"
              type="date"
              placeholder="起始日期"
              style="width: 140px"
            >
            </el-date-picker>
            -
            <el-date-picker
              v-model="mixQueryForm[keys]['endTime']"
              type="date"
              placeholder="结束日期"
              style="width: 140px"
            >
            </el-date-picker>
          </div>
          <div v-if="mixQueryForm[keys]['type'] == 'time' && isUpdate">
            <el-date-picker
              v-model="mixQueryForm[keys]['value']"
              type="date"
              placeholder="请输入日期"
              style="width: 188px"
            >
            </el-date-picker>
          </div>
          <el-input
            v-if="mixQueryForm[keys]['type'] == null"
            v-model="mixQueryForm[keys]['value']"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleClick">确 定</el-button>
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
    title: String,
    echo: {
      type: Boolean,
      default: false,
    },
    fieldOption: {
      type: Array,
      default: [],
    },
    entity: {
      //传入entity说明是更新 不是筛选
      type: Object,
      default: () => {},
    },
  },
  components: {},
  data() {
    //这里存放数据
    return {
      isShow: false,
      mixQueryList: {},
      mixQueryForm: {},
    };
  },
  //监听属性 类似于data概念
  computed: {
    isUpdate() {
      return this.entity && Object.keys(this.entity).length > 0;
    },
  },
  //监控data中的数据变化
  watch: {
    entity() {
      if (Object.keys(this.entity).length > 0) {
        //当entity中含有值的时候,将entity中的值赋给mixQueryForm
        Object.keys(this.mixQueryForm).map((key) => {
          this.mixQueryForm[key]["value"] = this.entity[key];
        });
      }
    },
    echo(val) {
      this.isShow = val;
    },
    isShow() {
      this.$emit("echoShow", this.isShow);
    },
  },
  //方法集合
  methods: {
    initDialog() {
      this.$nextTick(() => {
        let tempForm = {};
        this.mixQueryList = this.fieldOption;
        this.mixQueryList.map((op) => {
          if (op["type"] == "time") {
            tempForm[op.prop] = {
              label: op.label,
              startTime: "",
              endTime: "",
              type: op["type"],
            };
          } else {
            tempForm[op.prop] = {
              label: op.label,
              value: "",
              type: op["type"],
              required:op.required,
              enum:op.enum?op.enum:null
            };
          }
        });
        
        this.mixQueryForm = { ...tempForm };
      });
    },
    handleClick() {
      // console.log(this.mixQueryForm);
      this.$emit("handleDialogClick", this.mixQueryForm);
      this.isShow = false;
    },
    handleCancel() {
      //取消
      this.$emit("handleDialogCancel");
    },
    //伪数组->数组
    objToArr(obj){
      let arr = []
      // console.log(obj);
      Object.keys(obj).map(i=>{
        arr[i] = obj[i]
      })
      return arr
    }
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
.ov-dialog {
  .el-form-item__label {
    width: 100px;
    line-height: 20px;
  }
}
</style>