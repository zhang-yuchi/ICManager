import apply from "./apply";

function creatFormConfig(role) {
  console.log(apply[role]);
  apply[role].rules = {};
  for(let item of apply[role].config){
    apply[role].rules[item.prop] = [];
    let obj = {};
    if(typeof item.required === 'undefined' || item.required){
      obj={
        required:true,
        message:"请输入"+item.label,
        trigger:"blur"
      }
      apply[role].rules[item.prop].push(obj)
    }else{
      apply[role].rules[item.prop].push({required:false})
    }
  }
  console.log(apply[role]);
  return apply[role];
}

export default creatFormConfig;
