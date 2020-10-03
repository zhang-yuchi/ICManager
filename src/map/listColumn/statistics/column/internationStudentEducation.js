module.exports = {
  title: "国际学生及港澳台学生教育汇总",
  reqOpt: {
    get: "/endpoint/iternationalstudentedu/list2",
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
      name: "本科人数",
      prop: "benkeNum",
    },
    {
      name: "硕士研究生人数",
      prop: "shuoshiNum",
    },
    {
      name: "博士研究生人数",
      prop: "boshiNum",
    },
    {
      name: "非学历生（3个月（含）以上）人数",
      prop: "longnoneNum",
      width:300,
      noQuery:true
    },
    {
      name: "非学历生（3个月以下）人数",
      prop: "shortnoneNum",
      width:300,
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