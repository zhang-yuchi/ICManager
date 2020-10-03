module.exports = {
  title: "教师出国交流信息汇总",
  reqOpt: {
    get: "/endpoint/teacherexchange/list2",
    getOne: (id) => { //获取详情 or 跳转?
      return "/endpoint/teacherexchange/info/" + id
    }
  },
  column: [{
      prop: "userId",
      width: 120,
      name: "登记人id"
    }, {
      prop: "orgId",
      name: "登记单位id"
    }, {
      prop: "username",
      name: "登记人姓名"
    }, {
      prop: "userOrg",
      name: "登记单位"
    }, {
      prop: "teacherName",
      name: "教师姓名"
    }, {
      prop: "country",
      name: "地区/国别"
    }, {
      prop: "dstOrg",
      name: "访问机构"
    }, {
      prop: "reason",
      name: "事由和身份"
    }, {
      prop: "type",
      name: "类别"
    }, {
      prop: "period",
      name: "起止时间"
    }, {
      prop: "lastTime",
      name: "时长"
    }, {
      prop: "intro",
      name: "简介"
    }, {
      prop: "files",
      name: "附件列表",
      noQuery: true
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