module.exports = {
  title: "国际组织刊物任职汇总",
  reqOpt: {
    get: "/endpoint/teacherexchange/list2",
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
      name: "登记人id",
      prop: "username",
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