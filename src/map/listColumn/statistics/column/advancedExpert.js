module.exports = {
  title: "高端专家引进计划汇总",
  reqOpt: {
    get: "/endpoint/expertintroplan/list2",
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
      name: "类型",
      prop: "type",
    },
    {
      name: "项目名称",
      prop: "fullName",
    },
    {
      name: "引进外专人数",
      prop: "expertsNum",
    },
    {
      name: "外专在校累计天数",
      prop: "expertsDays",
    },
    {
      name: "引进外专国别",
      prop: "expertsCountry",
    },
    {
      name: "引进外专层次",
      prop: "expertsLevel",
    },
    {
      name: "立项时间",
      prop: "createTime",
    },
    {
      name: "项目执行年限",
      prop: "existYears",
    },
    {
      name: "是否按期执行完毕",
      prop: "isFinished",
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