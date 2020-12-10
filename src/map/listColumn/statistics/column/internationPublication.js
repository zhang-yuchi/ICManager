module.exports = {
  title: "国际组织刊物任职汇总",
  reqOpt: {
    get: "/endpoint/publicationjob/list2",
    getOne: (id) => { //获取详情 or 跳转?
      return "/endpoint/teacherexchange/info/" + id
    },
    delete:"/endpoint/publicationjob/delete"
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
      name: "姓名",
      prop: "fullName",
    },
    {
      name: "单位",
      prop: "enterprise",
    },
    {
      name: "职务职称",
      prop: "title",
    },
    {
      name: "类型",
      prop: "type",
    },
    {
      name: "国际组织（刊物）刊物名称",
      width:220,
      prop: "pubName",
    },
    {
      name: "担任职务名称",
      prop: "job",
    },
    {
      name: "起止时间",
      prop: "period",
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