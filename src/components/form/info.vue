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
          <div class="file-line-box">
            <el-link
              class="file-line"
              :href="baseUrl + '/file/download?fileName=' + file"
              target="_blank"
              v-for="(file, indey) in form.fileList"
              :key="indey"
              >{{ file }}</el-link
            >
          </div>
        </template>

        <template v-else-if="item.type == 'addInput'">
          <div
            class="info-page-add-input-line"
            v-for="(course, indey) in form.courseList"
          >
            {{ course }}
          </div>
        </template>
        <div class="el-upload__tip" v-if="item.extraInfo">
          {{ item.extraInfo }}
        </div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" v-if="submitFlag" @click="onSubmit"
          >提交</el-button
        >
        <el-button type="danger" @click="onDel">删除</el-button>
        <el-button @click="onCancel">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import baseUrl from "network/config.js";
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
    submitFlag: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {},
      myHeaders: {},
    };
  },
  methods: {
    addInput(prop, index) {
      // 改格式
      this.$set(this.form[prop], this.form[prop].length, "");
    },
    delInput(prop, index) {
      this.form[prop].splice(index, 1);
    },
    onSubmit() {
      let that = this;
      // console.log(this.$refs.upload[0]);
      this.$refs.elform.validate((valid) => {
        if (valid) {
          // 提交签名，签名单位

          this.$emit("submit", this.form);
        } else {
          return false;
        }
      });
    },
    onCancel() {
      this.$router.go(-1);
      this.$emit("cancel");
    },
    onDel() {
      this.$emit("delForm");
    },
  },
  created() {
    // for (let item of this.config) {
    //   if (item.type === "addInput") {
    //     // 改显示格式
    //     this.$set(this.form, item.prop, []);
    //     this.$set(this.form[item.prop], this.form[item.prop].length, "");
    //   }
    // }
    let token = sessionStorage.getItem("ICtoken");
    // console.log(token);
    this.myHeaders = { token };
    // console.log(this.form);
    this.baseUrl = baseUrl.baseUrl;
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
    .file-line-box {
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .file-line {
        font-size: 12px;
        padding: 0;
        line-height: 1.75em;
      }
    }
  }
  .info-page-add-input-line {
    letter-spacing: 2px;
  }
}
</style>
