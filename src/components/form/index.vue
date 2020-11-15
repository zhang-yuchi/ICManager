<template>
  <div id="elformCom">
    <div class="form-title">{{ title }}</div>
    <el-form
      :model="form"
      ref="elform"
      :rules="rules"
      label-width="200px"
      @submit.native.prevent
    >
      <el-form-item
        v-for="(item, index) in config"
        :key="index"
        :label="item.label"
        :prop="item.prop"
      >
        <template v-if="item.type == 'input'">
          <el-input
            v-model="form[item.prop]"
            :placeholder="item.placeholder"
            :disabled="item.disabled"
          ></el-input>
        </template>

        <template v-else-if="item.type == 'radio'">
          <el-radio-group v-model="form[item.prop]" :disabled="item.disabled">
            <el-radio
              v-for="(option, indey) in item.options"
              :key="indey"
              :label="option.value"
              >{{ option.label }}</el-radio
            >
          </el-radio-group>
        </template>

        <template v-else-if="item.type == 'date'">
          <el-date-picker
            :type="item.subType || 'date'"
            :placeholder="item.placeholder"
            v-model="form[item.prop]"
            style="width: 100%;"
            :disabled="item.disabled"
          ></el-date-picker>
        </template>

        <template v-else-if="item.type == 'select'">
          <el-select
            v-model="form[item.prop]"
            :placeholder="item.placeholder"
            :disabled="item.disabled"
          >
            <el-option
              v-for="(option, indey) in item.options"
              :label="option.label"
              :key="indey"
              :value="option.value"
            ></el-option>
          </el-select>
        </template>

        <template v-else-if="item.type == 'textarea'">
          <el-input
            type="textarea"
            v-model="form[item.prop]"
            :show-word-limit="!!item.maxlength"
            :maxlength="item.maxlength"
            :disabled="item.disabled"
          ></el-input>
        </template>

        <template v-else-if="item.type == 'file'">
          <el-upload
            ref="upload"
            :action="item.action"
            :headers="myHeaders"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="upFileSuccess"
            :on-error="upFileError"
            :before-remove="beforeRemove"
            :multiple="item.limit > 1"
            :limit="item.limit"
            :disabled="item.disabled"
            :on-exceed="
              (files, fileList) => handleExceed(files, fileList, item.limit)
            "
            :file-list="form.fileList"
            :auto-upload="false"
          >
            <el-button size="small" type="primary" :disabled="item.disabled"
              >点击上传</el-button
            >
            <div slot="tip" class="el-upload__tip">
              {{ item.tip }}
            </div>
          </el-upload>
        </template>

        <template v-else-if="item.type == 'addInput'">
          <div
            class="add-input-line"
            v-for="(input, indey) in form[item.prop]"
            :key="indey"
          >
            <el-input
              class="add-input-item"
              v-model="form[item.prop][indey]"
            ></el-input
            ><el-button
              type="primary"
              v-if="indey == 0"
              icon="el-icon-circle-plus-outline"
              @click.prevent="addInput(item.prop, indey)"
              >增加</el-button
            >
            <el-button
              type="primary"
              v-else
              icon="el-icon-delete"
              @click.prevent="delInput(item.prop, indey)"
              >删除</el-button
            >
          </div>
        </template>
        <div class="el-upload__tip" v-if="item.extraInfo">
          {{ item.extraInfo }}
        </div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="onCancel">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    config: {
      type: Array,
      default: [],
    },
    rules: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      form: {},
      myHeaders: {},
    };
  },
  methods: {
    upFileError(err) {
      this.$message.error("文件上传服务器失败，原因：" + err);
      this.form.fileList.splice(this.form.fileList.length - 1, 1);
    },
    upFileSuccess(response, file, fileList) {
      this.form.fileList = fileList;
      console.log(response);
      if (response.code != 0) {
        this.upFileError(response.msg);
        return false;
      } else {
        console.log(this.form.fileList);
        for (let item of this.form.fileList) {
          if (item.status != "success") return;
        }
        this.submit();
      }
    },
    addInput(prop, index) {
      this.$set(this.form[prop], this.form[prop].length, "");
    },
    delInput(prop, index) {
      this.form[prop].splice(index, 1);
    },
    onSubmit() {
      let that = this;
      let routeArr = this.$route.path.split("/");
      console.log(routeArr[routeArr.length - 2]);
      console.log(this.form,this.rules);
      if(this.form.courseList && this.form.courseList.length){
        this.form.couse = this.form.courseList.join(',')
      }
      this.$refs.elform.validate((valid) => {
        if (valid) {
          // 上传文件
          that.$refs.upload[0].submit();
          console.log('上传文件');
        } else {
          console.log('验证失败');
          return false;
        }
      });
    },
    submit() {
      // 文件上传完成后的地址
      this.form.files = this.handleFileList(this.form.fileList);
      this.$emit("submit", this.form);
    },
    handleFileList(fileList) {
      if (fileList.length == 0 || !fileList) return "";
      let arr = [];
      for (let item of this.form.fileList) {
        arr.push(item.response.msg);
      }
      return arr.join();
    },
    onCancel() {
      this.$router.go(-1);
      this.$emit("cancel");
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList, limit) {
      this.$message.warning(
        `当前限制选择 ${limit} 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
  },
  created() {
    for (let item of this.config) {
      if (item.type === "addInput") {
        this.$set(this.form, item.prop, []);
        this.$set(this.form[item.prop], this.form[item.prop].length, "");
      }
    }
    let token = sessionStorage.getItem("ICtoken");
    console.log(token);
    this.myHeaders = { token };
    console.log(this.form);
  },
  mounted() {},
};
</script>
<style lang="less">
#elformCom {
  .form-title {
    text-align: center;
    padding: 15px 0;
    font-size: 20px;
    font-weight: 500;
  }
  .el-form-item {
    .add-input-line {
      display: flex;
      margin: 10px 0;
      .add-input-item {
        margin-right: 20px;
      }
    }
  }
}
</style>
