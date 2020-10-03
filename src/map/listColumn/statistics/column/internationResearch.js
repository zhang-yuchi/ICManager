module.exports = {
  title: "国际联合科研平台汇总",
  reqOpt: {
    get: "/endpoint/itresearchplatform/list2",
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
      name: "机构名称",
      prop: "fullName",
    },
    {
      name: "是否新增",
      prop: "isNew",
    },
    {
      name: "合作机构名称",
      prop: "coopOrgName",
    },
    {
      name: "批准时间",
      prop: "passTime",
      type:'time'
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