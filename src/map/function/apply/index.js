module.exports = {
  'teacher-board': { // 教师出国交流申请
    // differ:true,  // true 表格会根据角色变化而变化
    title:'教师出国（境）交流',
    config: [{
        type: "input",
        prop: "teacherName",
        label: "姓名",
        required: true, // 默认为true
        placeholder: "请输入",
      },
      {
        type: "input",
        prop: "unit",
        label: "单位",
        placeholder: "请输入",
      },
      {
        type: "input",
        prop: "job",
        label: "职务/职称",
        placeholder: "请输入",
      },
      {
        type: "input",
        prop: "country",
        label: "地区/国别",
        placeholder: "请输入",
      },
      {
        type: "input",
        prop: "organization",
        label: "访问机构",
        placeholder: "请输入",
      },
      {
        type: "textarea",
        prop: "reason",
        label: "事由及出国身份",
        placeholder: "请输入",
        maxlength: 50
      },
      {
        type: "radio",
        prop: "gender",
        label: "性别",
        options: ["男", "女"],
      },
      {
        type: "select",
        prop: "category",
        label: "类别",
        options: [{
            label: "中长期",
            value: "1"
          },
          {
            label: "短期期",
            value: "0"
          },
        ],
      },
      {
        type: "date",
        prop: "start",
        label: "开始日期",
        placeholder: "请选择日期",
      },
      {
        type: "date",
        prop: "end",
        label: "结束日期",
        placeholder: "请选择日期",
      },
      {
        type: "input",
        prop: "period",
        label: "时长",
        placeholder: "请输入",
      },
      {
        type: "file",
        prop: "appendix",
        label: "附件",
        limit: 1,
        required: false,
        action: "https://jsonplaceholder.typicode.com/posts/", // 上传地址
        // headers:{token:sessionStorage.getItem('ICtoken')},
        tip: '只能上传 doc，docx，pdf，png，jpg 文件，且不超过500kb'
      },
      // { type: "checkbox", prop: "hobit", label: "爱好", required: false },
    ],
    rules: {
      teacherName: [{
        required: true,
        message: "请输入姓名",
        trigger: "blur"
      }, ],
      // unit: [],
      // job: [],
      // country: [],
      // organization: [],
      // reason: [],
      // gender: [],
      // category: [],
      // start: [],
      // end: [],
      // period: [],
      // file:[],
    },
  },
  'internation-publication': { // 国际组织刊物任职（个人填报、单位汇总）

    config: [{
        type: "input",
        prop: "name",
        label: "姓名",
      },
      {
        type: "input",
        prop: "unit",
        label: "单位",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "职务/职称",
      },
      {
        type: "input",
        prop: "category",
        label: "类型",
      },
      {
        type: "input",
        prop: "magzineName",
        label: "国际组织（刊物）刊物名称",
      },
      {
        type: "input",
        prop: "jobName",
        label: "担任职务名称",
      },
      {
        type: "date",
        prop: "start",
        label: "任职开始日期",
        placeholder: "请选择日期",
      },
      {
        type: "date",
        prop: "end",
        label: "任职结束日期",
        placeholder: "请选择日期",
      },
      {
        type: "file",
        prop: "appendix",
        label: "附件",
        limit: 1,
        required: false,
        action: "https://jsonplaceholder.typicode.com/posts/", // 上传地址
        // headers:{token:sessionStorage.getItem('ICtoken')},
        tip: '只能上传 doc，docx，pdf，png，jpg 文件，且不超过500kb'
      },
      {
        type: "textarea",
        prop: "overview",
        label: "简介",
        placeholder: "请输入",
        // maxlength: 50
      },
    ],
    rules: {

    }

  },
  'student-board': { // 在校生出国交流申请

  },
  'overseas-expert-exchange': { // 国外专家来校交流申请

  },
  'overseas-teacher': { // 添加海外学历教师

  },
  'overseas-expert-part-time': { // 国外专家兼职登记

  },
  'overseas-expert-prize': { // 国外专家获奖登记

  },
  'open-internation-course': { // 开设国际化课程

  },
  'cooperation-education': { // 中外合作办学登记

  },
  'student-exchange': { // 学生交流项目登记

  },
  'internation-research': { // 国际联合科研平台填报

  },
  'interation-result-change': { // 国际成果转化或人才培训平台

  },
  'interation-area-research': { // 国别与区域研究中心登记

  },
  'advanced-expert-import': { // 高端专家引进计划登记

  },
  'advanced-project-import': { // 引智平台项目登记

  },
  'interation-meeting-login': { // 国际会议负责人登记

  },
  'interation-guarantee': { // 国际化保障及办学特色

  },
  'overseas-treaty': { // 与海外院校新签署协议并有实质性交流合作

  },
  'interation-ally': { // 国际联盟发起,联合成立

  },

}