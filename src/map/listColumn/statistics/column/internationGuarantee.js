module.exports = {
  title: "国际化保障及办学特色汇总",
  reqOpt: {
    get: "/endpoint/itguaranteefeature/list2",
    getOne: (id) => { //获取详情 or 跳转?
      return "/endpoint/teacherexchange/info/" + id
    },
    delete:"/endpoint/itguaranteefeature/delete"
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
      name: "是否有专/兼职外事秘书",
      prop: "haveSecretary",
      type: 'boolean',
    },
    {
      name: "外事秘书人数",
      prop: "secretaryNum",
    },
    {
      name: "是否有二级英文网站并持续更新",
      width: 240,
      type: 'boolean',
      prop: "haveSecWeb",
    },
    {
      name: "是否制作外文宣传材料",
      prop: "haveProfile",
      type: 'boolean',
    },
    {
      name: "是否特色活动或特色项目",
      prop: "haveFeature",
      type: 'boolean',
    },
    {
      name: "附件",
      prop: "file",
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