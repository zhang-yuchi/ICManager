module.exports = {
  title: "引智平台项目汇总",
  reqOpt: {
    get: "/endpoint/introwiseproject/list2",
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
      name: "外专职务/职称",
      prop: "expertsTitle",
    },
    {
      name: "是否有国际学术大师",
      prop: "isMaster",
    },
    {
      name: "立项时间",
      prop: "createTime",
    },
    {
      name: "是否为新增项目",
      prop: "isNew",
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