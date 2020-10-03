module.exports = {
  title: "在校生出国交流汇总",
  reqOpt: {
    get: "/endpoint/studentexchange/list2",
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
      name: "学生姓名",
      prop: "studentName",
    },
    {
      name: "学位",
      prop: "degree",
    },
    {
      name: "类别",
      prop: "type",
    },
    {
      name: "访问地区/国别",
      prop: "country",
    },
    {
      name: "接待机构",
      prop: "dstOrg",
    },
    {
      name: "起止时间",
      prop: "period",
    },
    {
      name: "时长",
      prop: "lastTime",
    },
    {
      name: "附件列表",
      prop: "files",
    },
    {
      name: "事由",
      prop: "reason",
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