module.exports = {
  'IC': {
    column: [{
        prop: "orgCode",
        name: "国合机构码",
      },
      {
        prop: "orgCnName",
        name: "机构名称",
      },
      {
        prop: "operator",
        name: "操作",
        width: 200,
        button: [{
          btnName: "查看",
          emit: "handleCheck",
        }],
      },
    ]
  }
}