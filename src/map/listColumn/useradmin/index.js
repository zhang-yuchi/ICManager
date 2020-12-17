const role = require('../../../enum/selector/role')
module.exports = {
  user: {
    title: "用户管理",
    reqOpt: {
      get: "/endpoint/icuser/list2",
      getOne: (id) => { //获取详情 or 跳转?
        return "/endpoint/teacherexchange/info/" + id
      },
      update: {
        url: "/endpoint/icuser/update",
        method: "post"
      },
      add:{
        url:"/endpoint/icuser/save",
        type:"put"
      },
      delete:"/endpoint/icuser/delete"
    },
    column: [{
        name: "角色",
        prop: "icRole",
        type:"select",
        required:true,
        enum:role
      },
      {
        name: "机构Id",
        prop: "orgId",
        required:true
      },
      {
        name: "用户名",
        prop: "username",
        required:true
      },
      {
        name:"密码",
        prop:"password",
        noQuery:true,
      },
      {
        name: "用户类型",
        prop: "userType"
      },
      {
        name: "是否统计",
        prop: "isStatistics"
      },
      {
        name: "第一单位",
        prop: "firstEnterprise"
      },
      {
        name: "人员代码",
        prop: "personCode"
      },
      {
        name: "姓名",
        prop: "fullName"
      },
      {
        name: "性别",
        prop: "gender"
      },
      {
        name: "出生年月",
        prop: "birth",
        type: "time",
        noQuery: true,
      },
      {
        name: "最后学历",
        prop: "lastEducation",
        noQuery: true,
      },
      {
        name: "最后学位",
        prop: "lastDegree",
        noQuery: true,
      },
      {
        name: "职称",
        prop: "title",
        noQuery: true,
      },
      {
        name: "学科分类",
        prop: "subClass",
        noQuery: true,
      },
      {
        name: "身份证号码",
        prop: "identityNum",
        noQuery: true,
      },
      {
        name: "政治面貌",
        prop: "politicsStatus",
        noQuery: true,
      },
      {
        name: "英文名",
        prop: "englishName",
        noQuery: true,
      },
      {
        name: "曾用名",
        prop: "oldName",
        noQuery: true,
      },
      {
        name: "国籍",
        prop: "country",
        noQuery: true,
      },
      {
        name: "民族",
        prop: "people",
        noQuery: true,
      },
      {
        name: "行政职务",
        prop: "administrativeRank",
        noQuery: true,
      },
      {
        name: "定职时间",
        prop: "postTime",
        type: "time",
        noQuery: true,
      },
      {
        name: "家庭住址",
        prop: "address",
        noQuery: true,
      },
      {
        name: "邮政编码",
        prop: "postalCode",
        noQuery: true,
      },
      {
        name: "办公电话",
        prop: "bussinessPhone",
        noQuery: true,
      },
      {
        name: "传真",
        prop: "fax",
        noQuery: true,
      },
      {
        name: "移动电话",
        prop: "mobilePhone",
        noQuery: true,
      },
      {
        name: "电子邮箱",
        prop: "email",
        noQuery: true,
      },
      {
        name: "个人主页",
        prop: "personalWebsite",
        noQuery: true,
      },
      {
        name: "是否博导",
        prop: "isDoctoralSupervisor",
        noQuery: true,
      },
      {
        name: "外语",
        prop: "foreignLanguages",
        noQuery: true,
      },
      {
        name: "外语水平",
        prop: "foreignLevel",
        noQuery: true
      },
      {
        name: "用户简介",
        prop: "introduction",
        noQuery: true,
      },
      {
        prop: "operator",
        name: "操作",
        width: 150,
        button: [{
          btnName: "修改",
          emit: "handleUpdate"
        }],
      }
    ]
  }
}