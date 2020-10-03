module.exports = {
  title: "国际组织刊物任职汇总",
  reqOpt: {
    get: "/endpoint/itmeeting/list2",
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
      name: "会议名称（中英文）",
      prop: "meetingName",
    },
    {
      name: "类型",
      prop: "type",
    },
    {
      name: "时间",
      prop: "time",noQuery:true,
    },
    {
      name: "地点",
      prop: "place",
    },
    {
      name: "中方与会人数",
      prop: "cnNum",noQuery:true,
    },
    {
      name: "外方与会人数",
      prop: "enNum",noQuery:true,
    },
    {
      name: "会议综述是否被《国际学术动态》收录",
      prop: "isRecorded",
      noQuery:true,
      width:300,
    },
    {
      name: "附件",
      prop: "files",
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