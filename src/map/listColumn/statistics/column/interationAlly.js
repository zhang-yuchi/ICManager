module.exports = {
  title: "国际联盟汇总",
  reqOpt: {
    get: "/endpoint/leaguenations/list2",
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
      name: "联盟名称",
      prop: "leagueName",
    },
    {
      name: "成立时间",
      prop: "createTime",
      type:'time'
    },
    {
      name: "类型",
      prop: "type",
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