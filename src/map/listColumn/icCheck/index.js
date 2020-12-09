module.exports = {
  'IC': {
    reqOpt:{
      get:"/endpoint/icorg/list2",
      add:{
        url:"/endpoint/icorg/save",
        type:"put"
      },
      delete:"/endpoint/icorg/delete"
    },
    column: [{
        prop: "orgCode",
        name: "国合机构码",
        required:true
      },
      {
        prop: "orgCnName",
        name: "机构名称",
        required:true
      },
      {
        prop:"orgType",
        name:"国合机构类型",
      },
      {
        prop:"orgWebsite",
        name:"国合机构网址",
      },
      {
        prop:"superOrg",
        name:"上级国合机构",
        noQuery:true
      },
      {
        prop:"headerName",
        name:"领导姓名",
      },
      {
        prop:"headerTele",
        name:"领导电话",
        noQuery:true
      },
      {
        prop:"headerMobile",
        name:"领导手机号",
        noQuery:true
      },
      {
        prop:"headerEmail",
        name:"领导邮箱",
        noQuery:true
      },
      {
        prop:"headerFax",
        name:"领导传真",
        noQuery:true
      },
      {
        prop:"secretaryName",
        name:"秘书姓名",
      },
      {
        prop:"secretaryTele",
        name:"秘书电话",
        noQuery:true
      },
      {
        prop:"secretaryMoblie",
        name:"秘书手机号",
        noQuery:true
      },
      {
        prop:"secretaryEmail",
        name:"秘书邮箱",
        noQuery:true
      },
      {
        prop:"secretaryFax",
        name:"秘书传真",
        noQuery:true
      },
      {
        prop: "operator",
        name: "操作",
        width: 200,
        button: [{
          btnName: "查看",
          emit: "handleCheck"//get
        }],
      },
    ]
  }
}