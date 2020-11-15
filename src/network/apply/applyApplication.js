import service from "../index";

export const publicationjob = (obj) => {
  // 国际组织刊物任职填报
  return service.post("/endpoint/publicationjob/application", obj);
};

export const studentexchange = (obj) => {
  // 在校生出国交流申请
  return service.post("/endpoint/studentexchange/application", obj);
};

// todo
export const teacherexchange = (obj) => {
  // 教师出国交流申请
  return service.post("/endpoint/teacherexchange/application", obj);
};

export const longtermexpert = (obj) => {
  // 长期国外专家交流申请
  return service.post("/endpoint/longtermexpert/application", obj);
};

export const shorttermexpert = (obj) => {
  // 短期国外专家交流申请
  obj.reportNum = Number(obj.reportNum);
  return service.post("/endpoint/shorttermexpert/application", obj);
};

export const itcourse = (obj) => {
  // 开设国际化课程申请
  // obj.courseList = obj.courseList.join();
  return service.post("/endpoint/itcourse/application", obj);
};

export const nationalregionalcenter = (obj) => {
  // 国别与区域研究中心登记
  return service.post("/endpoint/nationalregionalcenter/application", obj);
};

export const overseasteacher = (obj) => {
  // 添加海外学历教师
  return service.post("/endpoint/overseasteacher/application", obj);
};

export const expertjob = (obj) => {
  // 国外专家兼职登记
  return service.post("/endpoint/expertjob/application", obj);
};

export const expertaward = (obj) => {
  // 国外专家获奖登记
  return service.post("/endpoint/expertaward/application", obj);
};

export const cooperativeeducation = (obj) => {
  // 中外合作办学登记
  return service.put("/endpoint/cooperativeeducation/application", obj);
};

export const stuexchangeproject = (obj) => {
  // 学生交流项目登记
  obj.sendNum = Number(obj.sendNum);
  obj.receiveNum = Number(obj.receiveNum);
  return service.post("/endpoint/stuexchangeproject/application", obj);
};

export const itresearchplatform = (obj) => {
  // 国际联合科研平台填报
  return service.post("/endpoint/itresearchplatform/application", obj);
};

export const itachievementtrainingplatform = (obj) => {
  // 国际化成果转化或人才培训平台
  return service.post(
    "/endpoint/itachievementtrainingplatform/application",
    obj
  );
};

export const expertintroplan = (obj) => {
  // 高端专家引进计划登记
  obj.expertsNum = Number(obj.expertsNum);
  obj.expertsDays = Number(obj.expertsDays);
  return service.post("/endpoint/expertintroplan/application", obj);
};

export const introwiseproject = (obj) => {
  // 引智平台项目登记
  obj.expertsNum = Number(obj.expertsNum);
  obj.expertsDays = Number(obj.expertsDays);
  return service.post("/endpoint/introwiseproject/application", obj);
};

export const itmeeting = (obj) => {
  // 国际会议负责人登记
  obj.cnNum = Number(obj.cnNum);
  obj.enNum = Number(obj.enNum);
  return service.post("/endpoint/itmeeting/application", obj);
};

export const itguaranteefeature = (obj) => {
  // 国际化保障及办学特色
  obj.secretaryNum = obj.secretaryList.length;
  obj.secretaryList = obj.secretaryList.join();
  return service.post("/endpoint/itguaranteefeature/application", obj);
};

export const exchangecooperation = (obj) => {
  // 与海外院校新签署协议并有实质性交流合作
  return service.post("/endpoint/exchangecooperation/application", obj);
};

export const leaguenations = (obj) => {
  // 国际联盟发起,联合成立
  return service.post("/endpoint/leaguenations/application", obj);
};

// todo
export const iternationalstudentedu = (obj) => {
  // 国际学生及港澳台学生教育
  obj.benkeNum = Number(obj.benkeNum);
  obj.shuoshiNum = Number(obj.shuoshiNum);
  obj.boshiNum = Number(obj.boshiNum);
  obj.longnoneNum = Number(obj.longnoneNum);
  obj.shortnoneNum = Number(obj.shortnoneNum);
  return service.post("/endpoint/iternationalstudentedu/application", obj);
};
