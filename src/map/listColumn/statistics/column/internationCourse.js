module.exports = {
  title: "国际化课程汇总",
  reqOpt: {
    get: "/endpoint/itcourse/list2",
    getOne: (id) => { //获取详情 or 跳转?
      return "/endpoint/teacherexchange/info/" + id
    },
    delete:"/endpoint/itcourse/delete"
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
      name: "专业（课程）名称",
      prop: "courseName",
    },
    {
      name: "获批时间（年月）",
      prop: "passTime",
      noQuery:true
    },
    {
      name: "授课层次（本/硕/博）",
      prop: "courseLevel",
      noQuery:true
    },
    {
      name: "本年度授课起止时间（年月）",
      prop: "coursePeriod",
      noQuery:true
    },
    {
      name: "本年度该专业已开设全英文课程数及课程名称",
      prop: "courseList",
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