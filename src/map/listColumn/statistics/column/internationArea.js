module.exports = {
  title: "国别与区域研究中心汇总",
  reqOpt: {
    get: "/endpoint/nationalregionalcenter/list2",
    getOne: (id) => { //获取详情 or 跳转?
      return "/endpoint/teacherexchange/info/" + id
    },
    delete:"/endpoint/nationalregionalcenter/delete"
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
      name: "机构名称",
      prop: "fullName",
    },
    {
      name: "是否新增",
      prop: "isNew",
    },
    {
      name: "批准时间",
      prop: "passTime",
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
      name: "网址",
      prop: "website",
      width:220
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