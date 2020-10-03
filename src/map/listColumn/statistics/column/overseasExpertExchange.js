module.exports = {
  title: "国外专家来校交流汇总",
  reqOpt: {
    get: "/endpoint/longtermexpert/list2",
    getOne: (id) => { //获取详情 or 跳转?
      return "/endpoint/teacherexchange/info/" + id
    }
  },
  column: [{
      prop: "userId",
      name: "登记人id"
    },
    {
      prop: "userId",
      name: "登记人id"
    },
    {
      prop: "userId",
      name: "登记人id"
    },
    {
      prop: "userId",
      name: "登记人id"
    },
    {
      prop: "userId",
      name: "登记人id"
    },
    {
      prop: "userId",
      name: "登记人id"
    },
    {
      prop: "userId",
      name: "登记人id"
    },
    {
      prop: "userId",
      name: "登记人id"
    },
    {
      prop: "userId",
      name: "登记人id"
    },
    {
      prop: "userId",
      name: "登记人id"
    },
    {
      prop: "userId",
      name: "登记人id"
    },
    {
      prop: "userId",
      name: "登记人id"
    },
    {
      prop: "userId",
      name: "登记人id"
    },
    {
      prop: "userId",
      name: "登记人id"
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