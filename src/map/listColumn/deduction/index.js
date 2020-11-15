module.exports = {
  "check": {
    title: "扣分项查看",
    reqOpt: {
      get: "/endpoint/deductionitem/list2",
      delete:"/endpoint/deductionitem/delete"
    },
    column: [{
        prop: "userId",
        name: "登记人id",
      },
      {
        prop: "orgId",
        name: "登记单位id",
      },
      {
        prop: "username",
        name: "登记人姓名",
      },
      {
        prop: "userOrg",
        name: "登记单位",
      },
      {
        prop: "type",
        name: "类型",
        noQuery: true
      },
      {
        prop: "files",
        name: "附件",
        noQuery: true
      },
      {
        prop: "intro",
        name: "简介",
        noQuery: true
      },
      {
        prop: "operator",
        name: "操作",
        width: 200,
        button: [{
          btnName: "查看",
          emit: "handleCheck" //get
        }],
      },
    ]
  }
}