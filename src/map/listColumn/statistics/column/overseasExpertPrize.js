module.exports = {
  title: "国外专家获奖汇总",
  reqOpt: {
    get: "/endpoint/expertaward/list2",
    getOne: (id) => { //获取详情 or 跳转?
      return "/endpoint/teacherexchange/info/" + id
    }
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
      name: "专家姓名",
      prop: "fullName",
    },
    {
      name: "获奖时间",
      prop: "awardTime",
      type:"time"
    },
    {
      name: "获奖级别",
      prop: "awardLevel",
    },
    {
      name: "获奖名称",
      prop: "awardName",
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