module.exports = {
  title: "学生交流项目汇总",
  reqOpt: {
    get: "/endpoint/stuexchangeproject/list2",
    getOne: (id) => { //获取详情 or 跳转?
      return "/endpoint/teacherexchange/info/" + id
    },
    delete:"/endpoint/stuexchangeproject/delete"
  },
  column: [{
      name: "登记人id",
      prop: "userId",
      width: 120,
    },
    {
      name: "登记单位id",
      prop: "orgId",
    },
    {
      name: "登记人姓名",
      prop: "username",
    },
    {
      name: "登记单位",
      prop: "userOrg",
    },
    {
      name: "类型",
      prop: "type",
    },
    {
      name: "项目名称",
      prop: "fullName",
    },
    {
      name: "是否新增",
      prop: "isNew",
    },
    {
      name: "获批/执行起始年份",
      prop: "passYear",
    },
    {
      name: "国别及外方学校",
      prop: "outerBelong",
    },
    {
      name: "学历层次",
      prop: "degreeLevel",
    },
    {
      name: "专业名称",
      prop: "majorName",
    },
    {
      name: "满足重点项目条件",
      prop: "pointCondition",
    },
    {
      name: "当年度派出人数",
      prop: "sendNum",
    },
    {
      name: "本年度来校交流人数",
      prop: "receiveNum",
    },
    {
      name: "附件",
      prop: "files",
    },
    {
      name: "简介",
      prop: "intro",
    },
    {
      prop: "operator",
      name: "操作",
      width: 150,
      button: [{
        btnName: "查看",
        emit: "handleCheck" //get
      }],
    }
  ]
}