module.exports = {
  title: "国外专家兼职汇总",
  reqOpt: {
    get: "/endpoint/expertjob/list2",
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
      name: "姓名",
      prop: "fullName",

    },
    {
      name: "国别地区",
      prop: "country",

    },
    {
      name: "机构",
      prop: "enterprise",

    },
    {
      name: "受聘荣誉",
      prop: "hired",

    },
    {
      name: "受聘时间",
      prop: "period",

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