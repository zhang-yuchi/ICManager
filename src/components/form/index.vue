<template>
  <div id="elform">
    <el-form
      :model="form"
      ref="elform"
      :rules="rules"
      label-width="100px"
      @submit.native.prevent
    >
      <el-form-item
        v-for="(item, index) in config"
        :key="index"
        :label="item.label"
        :prop='item.prop'
        :required="item.required || item.required == undefined ? true : false"
      >
        <template v-if="item.type == 'input'">
          <el-input
            v-model="form[item.prop]"
            :placeholder="item.placeholder"
          ></el-input>
        </template>

        <template v-else-if="item.type == 'radio'">
          <el-radio-group v-model="form[item.prop]">
            <el-radio
              v-for="(option, indey) in item.options"
              :key="indey"
              :label="option"
            ></el-radio>
          </el-radio-group>
        </template>

        <template v-else-if="item.type == 'date'">
          <el-date-picker
            type="date"
            :placeholder="item.placeholder"
            v-model="form[item.prop]"
            style="width: 100%;"
          ></el-date-picker>
        </template>

        <template v-else-if="item.type == 'select'">
          <el-select v-model="form[item.prop]" :placeholder="item.placeholder">
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
          ></el-input>
        </template>

        <template v-else-if="item.type == 'file'">
          <el-upload
            :action="item.action"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :multiple="item.limit > 1"
            :limit="item.limit"
            :on-exceed="
              (files, fileList) => handleExceed(files, fileList, item.limit)
            "
            :file-list="form.fileList"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              {{ item.tip }}
            </div>
          </el-upload>
        </template>

        <template v-else-if="item.type == 'checkbox'">
          checkbox
        </template>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
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
    };
  },
  methods: {
    onSubmit() {
      this.$refs.elform.validate((valid) => {
        if (valid) {
          console.log(valid, "success form");
        } else {
          console.log("error");
          return false;
        }
      });
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
  created() {},
  mounted() {},
};
</script>
<style lang="less">

</style>
