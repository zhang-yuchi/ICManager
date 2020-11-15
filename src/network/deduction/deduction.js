import service from "../index";

export const deductionitem = (obj) => {
  // 扣分项填写
  return service.patch("/endpoint/deductionitem/deduct", obj);
};

