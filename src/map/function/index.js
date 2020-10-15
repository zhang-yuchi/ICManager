import fun from "../../router/fun";
import apply from "./apply";

export const creatFormConfig = (role) => {
  console.log(apply[role]);
  let formConfig = Object.assign({}, apply[role]);
  formConfig.rules = {};
  for (let item of formConfig.config) {
    formConfig.rules[item.prop] = [];
    let obj = {};
    if (typeof item.required === "undefined" || item.required) {
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
  console.log(formConfig);
  return formConfig;
};

export const createStaticFormInfo = (role) => {
  let formConfig = Object.assign({}, apply[role]);
  console.log(apply[role]);
  for (let item of formConfig.config) {
    item.disabled = true;
    item.required = false;
  }
  formConfig.rules = {};
  console.log(formConfig);
  return formConfig;
};

