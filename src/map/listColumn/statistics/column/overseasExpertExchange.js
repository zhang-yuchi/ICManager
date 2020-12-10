module.exports = {
  title: "国外专家来校交流汇总(长期)",
  reqOpt: {
    get: "/endpoint/longtermexpert/list2",
    getOne: (id) => { //获取详情 or 跳转?
      return "/endpoint/teacherexchange/info/" + id
    },
    delete:"/endpoint/longtermexpert/delete"
  },
  column: [{
      prop: "userId",
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
      name: "聘期起止日期"
    },
    {
      prop: "isTutor",
      name: "是否导师"
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
      prop: "intro",
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