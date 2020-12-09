import fun from "../../router/fun";
import apply from "./apply";
import statics from "./statics/map";
import deduction from "./deduction/index";

export const creatFormConfig = (role, that) => {
  // console.log(apply[role]);
  let roles = that.$store.state.role;
  let formConfig = Object.assign({}, apply[role]);
  formConfig.rules = {};
  for (let item of formConfig.config) {
    if (item.role == 3 && !roles.includes(3)) {
      item.disabled = true;
    } else {
      item.disabled = false;
    }
    formConfig.rules[item.prop] = [];
    let obj = {};
    if (typeof item.required === "undefined" || item.required) {
      if (item.role == 3) {
        obj = { required: false };
      } else {
        obj = {
          required: true,
          message: "请输入" + item.label,
          trigger: "blur",
        };
      }
      formConfig.rules[item.prop].push(obj);
    } else {
      formConfig.rules[item.prop].push({ required: false });
    }
  }
  console.log(formConfig);
  return formConfig;
};

const submitHideArr = ["teacher-board", "internation-publication"]; // 统计汇总表单详情中，不用填写，隐藏提交按钮

export const createStaticFormInfo = (role, that) => {
  let formConfig = Object.assign({}, apply[statics[role]]);
  let roles = that.$store.state.role;
  if (submitHideArr.includes(role)) {
    formConfig.submitHide = true;
  }
  for (let item of formConfig.config) {
    item.disabled = true;
    if (item.role == 3) {
      item.disabled = false;
    }
    item.required = false;
  }
  formConfig.rules = {};
  console.log(formConfig);
  return formConfig;
};

export const createDeductionFill = () => {
  let formConfig = Object.assign({}, deduction["fill"]);
  formConfig.rules = {};
  for (let item of formConfig.config) {
    item.disabled = false;
  }
  for (let item of formConfig.config) {
    formConfig.rules[item.prop] = [];
    let obj = {};
    console.log(typeof item.required);
    if (typeof item.required == "undefined" || item.required) {
      obj = {
        required: true,
        message: "请输入" + item.label,
        trigger: "blur",
      };
      formConfig.rules[item.prop].push(obj);
    } else {
      formConfig.rules[item.prop].push({ required: false });
    }
  }

  return formConfig;
};

export const createDeductionDetail = () => {
  let formConfig = Object.assign({}, deduction["fill"]);
  formConfig.submitHide = true;
  for (let item of formConfig.config) {
    item.disabled = true;
    item.required = false;
  }
  formConfig.rules = {};
  console.log(formConfig);
  return formConfig;
};
