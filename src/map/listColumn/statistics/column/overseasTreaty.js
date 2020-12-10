module.exports = {
  title: "交流合作汇总",
  reqOpt: {
    get: "/endpoint/exchangecooperation/list2",
    getOne: (id) => { //获取详情 or 跳转?
      return "/endpoint/teacherexchange/info/" + id
    },
    delete:"/endpoint/exchangecooperation/delete"
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
      name: "合作协议名称",
      prop: "protocolName",
    },
    {
      name: "签约时间",
      prop: "signTime",
      type:'time'
    },
    {
      name: "有效期限",
      prop: "effectiveTime",
    },
    {
      name: "外方合作院校及国别",
      prop: "outerBelong",
    },
    {
      name: "外方合作院校世界排名（参考当年QS排名）",
      prop: "worldRank",
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