module.exports = {
  title: "国外专家来校交流汇总(短期)",
  reqOpt: {
    get: "/endpoint/shorttermexpert/list2",
    getOne: (id) => { //获取详情 or 跳转?
      return "/endpoint/teacherexchange/info/" + id
    },
    delete:"/endpoint/shorttermexpert/delete"
  },
  column: [{
      prop: "userId",
      width: 120,
      name: "登记人id"
    },
    {
      prop: "orgId",
      name: "登记单位id"
    },
    {
      prop: "username",
      name: "登记人姓名"
    },
    {
      prop: "userOrg",
      name: "登记单位"
    },
    {
      prop: "fullName",
      name: "护照姓名"
    },
    {
      prop: "gender",
      name: "性别"
    },
    {
      prop: "country",
      name: "国籍"
    },
    {
      prop: "enterprise",
      name: "所在单位"
    },
    {
      prop: "academicRank",
      name: "学衔"
    },
    {
      prop: "period",
      name: "来访起止日期"
    },
    {
      prop: "isTutor",
      name: "是否导师"
    },
    {
      prop: "purpose",
      name: "来访目的"
    },
    {
      prop: "reportTopics",
      name: "报告/讲课题目"
    },
    {
      prop: "reportNum",
      name: "报告场数",
      width:200
    },
    {
      prop: "isAgreement",
      name: "是否依托校际协议",
      noQuery:true
    },
    {
      prop: "isProjected",
      width:250,
      name: "是否依托引智及外国专家等项目",
      noQuery:true
    },
    {
      prop: "reason",
      name: "事由",
      noQuery:true
    },
    {
      prop: "files",
      name: "附件",
      noQuery:true
    },
    {
      prop: "isProjected",
      name: "简介",
      noQuery:true
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