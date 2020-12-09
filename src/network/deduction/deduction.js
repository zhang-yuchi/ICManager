import service from "../index";

export const deductionitem = (obj) => {
  // 扣分项填写
  return service.put("/endpoint/deductionitem/save", obj);
};

export const deductionDel = (id) => {
  // 扣分项删除
  return service.delete("/endpoint/deductionitem/delete", {ids:id});
};

export const deductionGet = (id) => {
  // 扣分项查看
  return service.get(`/endpoint/deductionitem/info/${id}`);
};
