const baseurl = ''
const tip = '只能上传 doc，docx，pdf，png，jpg 文件，且不超过500kb'
module.exports = {
  'teacher-board': { // 教师出国交流申请
    // differ:true,  // true 表格会根据角色变化而变化
    title: '教师出国（境）交流',
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
            value: "中长期"
          },
          {
            label: "短期",
            value: "短期"
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
        action: baseurl + '', // 上传地址
        // headers:{token:sessionStorage.getItem('ICtoken')},
        tip,
      },
      // { type: "checkbox", prop: "hobit", label: "爱好", required: false },
    ],
    rules: {},
  },
  'internation-publication': { // 国际组织刊物任职（个人填报、单位汇总）
    title: '国际组织、刊物任职',
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
        prop: "teacherName",
        label: "类型（注明具体组织或刊物名称）",
      },
      {
        type: "radio",
        prop: "gender",
        label: "性别",
        options: ["男", "女"],
      },
      {
        type: "input",
        prop: "category",
        label: "国籍",
      },
      {
        type: "input",
        prop: "magzineName",
        label: "所在单位",
      },
      {
        type: "input",
        prop: "jobName",
        label: "学衔",
      },
      {
        type: "date",
        prop: "start",
        label: "聘期开始日期",
        placeholder: "请选择日期",
      },
      {
        type: "date",
        prop: "end",
        label: "聘期结束日期",
        placeholder: "请选择日期",
      },
      {
        type: "radio",
        prop: "gender",
        label: "是否担任导师",
        options: ["是", "否"],
      },
      {
        type: "textarea",
        prop: "overview",
        label: "事由",
        placeholder: "请输入",
        // maxlength: 50
      },
      {
        type: "file",
        prop: "appendix",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl + "", // 上传地址
        // headers:{token:sessionStorage.getItem('ICtoken')},
        tip
      },
      {
        type: "textarea",
        prop: "overview",
        label: "简介",
        placeholder: "请输入",
        required: false,
        // maxlength: 50
      },
    ],
    rules: {

    },
  },
  'student-board': { // 在校生出国交流申请
    title: '在校生出国（境）交流',
    config: [{
        type: "input",
        prop: "teacherName",
        label: "登记人",
        required: true, // 默认为true
        placeholder: "请输入",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "登记单位",
        required: true, // 默认为true
        placeholder: "请输入",
      }, {
        type: "input",
        prop: "teacherName",
        label: "姓名",
        required: true, // 默认为true
        placeholder: "请输入",
      },
      {
        type: "select",
        prop: "category",
        label: "学位",
        options: [{
            label: "本科",
            value: "本科"
          },
          {
            label: "硕士",
            value: "硕士"
          },
          {
            label: "博士",
            value: "博士"
          },
        ],
      },
      {
        type: "select",
        prop: "category",
        label: "类型",
        options: [{
            label: "中长期",
            value: "中长期"
          },
          {
            label: "短期",
            value: "短期"
          },
        ],
      },
      {
        type: "input",
        prop: "country",
        label: "访问地区/国别",
        placeholder: "请输入",
      },
      {
        type: "input",
        prop: "unit",
        label: "接待机构",
        placeholder: "请输入",
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
        action: baseurl + '', // 上传地址
        // headers:{token:sessionStorage.getItem('ICtoken')},
        tip,
      },
      {
        type: "textarea",
        prop: "overview",
        label: "事由",
        required: false,
        // maxlength: 50
      },
      // { type: "checkbox", prop: "hobit", label: "爱好", required: false },
    ],
    rules: {
      teacherName: [{
        required: true,
        message: "请输入姓名",
        trigger: "blur"
      }, ],
    },
  },
  'overseas-expert-exchange': { // 国外专家来校交流申请
    title: '长期国（境）外专家来校交流(3个月（含）以上）',
    config: [{
        type: "input",
        prop: "name",
        label: "登记人",
      },
      {
        type: "input",
        prop: "unit",
        label: "登记单位",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "外专护照姓名",
      },
      {
        type: "radio",
        prop: "gender",
        label: "性别",
        options: ["男", "女"],
      },
      {
        type: "input",
        prop: "category",
        label: "国籍",
      },
      {
        type: "input",
        prop: "magzineName",
        label: "所在单位",
      },
      {
        type: "input",
        prop: "jobName",
        label: "学衔",
      },
      {
        type: "date",
        prop: "start",
        label: "聘期开始日期",
        placeholder: "请选择日期",
      },
      {
        type: "date",
        prop: "end",
        label: "聘期结束日期",
        placeholder: "请选择日期",
      },
      {
        type: "radio",
        prop: "gender",
        label: "是否担任导师",
        options: ["是", "否"],
      },
      {
        type: "textarea",
        prop: "overview",
        label: "事由",
        placeholder: "请输入",
        // maxlength: 50
      },
      {
        type: "file",
        prop: "appendix",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl + '', // 上传地址
        // headers:{token:sessionStorage.getItem('ICtoken')},
        tip
      },
      {
        type: "textarea",
        prop: "overview",
        label: "简介",
        placeholder: "请输入",
        required: false,
        // maxlength: 50
      },
    ],
    rules: {

    },
    title2: '短期国（境）外专家来校交流（3个月以下）',
    config2: [{
        type: "input",
        prop: "name",
        label: "登记人",
      },
      {
        type: "input",
        prop: "unit",
        label: "登记单位",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "护照姓名",
      },
      {
        type: "radio",
        prop: "gender",
        label: "性别",
        options: ["男", "女"],
      },
      {
        type: "input",
        prop: "category",
        label: "国籍",
      },
      {
        type: "input",
        prop: "magzineName",
        label: "所在单位",
      },
      {
        type: "input",
        prop: "jobName",
        label: "学衔",
      },
      {
        type: "input",
        prop: "magzineName",
        label: "来访目的",
      },
      {
        type: "date",
        prop: "start",
        label: "来访开始日期",
        placeholder: "请选择日期",
      },
      {
        type: "date",
        prop: "end",
        label: "来访结束日期",
        placeholder: "请选择日期",
      },
      {
        type: "input",
        prop: "magzineName",
        label: "报告/讲课题目",
      },
      {
        type: "input",
        prop: "magzineName",
        label: "报告场数",
      },
      {
        type: "input",
        prop: "magzineName",
        label: "来访是否依托校际协议，（如是，请注明具体协议名称）",
      },
      {
        type: "radio",
        prop: "gender",
        label: "来访是否依托引智及外国专家等项目",
        options: ["是", "否"],
      },
      {
        type: "input",
        prop: "magzineName",
        label: "如是，请注明具体项目名称",
        required: false,
      },
      {
        type: "textarea",
        prop: "overview",
        label: "事由",
        placeholder: "请输入",
        // maxlength: 50
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
    ]
  },
  'overseas-teacher': { // 添加海外学历教师
    title: '新增具有海外学历的教师人数',
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
        label: "海外毕业院校",
      },

      {
        type: "input",
        prop: "category",
        label: "所获学历",
      },
      {
        type: "date",
        prop: "start",
        label: "受聘时间",
        placeholder: "请选择日期",
      },
      {
        type: "file",
        prop: "appendix",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl + '', // 上传地址
        // headers:{token:sessionStorage.getItem('ICtoken')},
        tip
      },
      {
        type: "textarea",
        prop: "overview",
        label: "简介",
        placeholder: "请输入",
        required: false,
        // maxlength: 50
      },
    ],
    rules: {

    },
  },
  'overseas-expert-part-time': { // 国外专家兼职登记
    title: '国（境）外专家担任兼职教授、客座教授和荣誉教授',
    config: [{
        type: "input",
        prop: "name",
        label: "登记人",
      },
      {
        type: "input",
        prop: "unit",
        label: "登记单位",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "专家姓名",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "国别/地区",
      },
      {
        type: "input",
        prop: "category",
        label: "机构",
      },
      {
        type: "input",
        prop: "category",
        label: "受聘荣誉",
      },
      {
        type: "date",
        prop: "start",
        label: "受聘时间",
        placeholder: "请选择日期",
      },
      {
        type: "file",
        prop: "appendix",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl + '', // 上传地址
        // headers:{token:sessionStorage.getItem('ICtoken')},
        tip
      },
      {
        type: "textarea",
        prop: "overview",
        label: "简介",
        placeholder: "请输入",
        required: false,
        // maxlength: 50
      },
    ],
    rules: {

    },
  },
  'overseas-expert-prize': { // 国外专家获奖登记
    title: '国（境）外专家担任兼职教授、客座教授和荣誉教授',
    config: [{
        type: "input",
        prop: "name",
        label: "登记人",
      },
      {
        type: "input",
        prop: "unit",
        label: "登记单位",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "专家姓名",
      },
      {
        type: "date",
        prop: "start",
        label: "获奖时间",
        placeholder: "请选择日期",
      },
      {
        type: "select",
        prop: "category",
        label: "获奖级别",
        options: [{
            label: "市级",
            value: "市级"
          }, {
            label: "省级",
            value: "省级"
          },
          {
            label: "国家级",
            value: "国家级"
          },
        ],
      },
      {
        type: "input",
        prop: "teacherName",
        label: "获奖名称",
      },
      {
        type: "file",
        prop: "appendix",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl + '', // 上传地址
        // headers:{token:sessionStorage.getItem('ICtoken')},
        tip
      },
      {
        type: "textarea",
        prop: "overview",
        label: "简介",
        placeholder: "请输入",
        required: false,
        // maxlength: 50
      },
    ],
    rules: {

    },
  },
  "interation-education": { // 国际学生及港澳台学生教育
    title: '国际学生及港澳台学生教育',
    config: [{
        type: "input",
        prop: "name",
        label: "登记人",
      },
      {
        type: "input",
        prop: "unit",
        label: "登记单位",
      },
      {
        type: "select",
        prop: "category",
        label: "类型",
        options: [{
          label: "国际学生教育",
          value: "国际学生教育"
        }, {
          label: "港澳台学生教育",
          value: "港澳台学生教育"
        }, ],
      },
      {
        type: "input",
        prop: "teacherName",
        label: "本科生人数",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "硕士研究生人数",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "博士研究生人数",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "非学历生（3个月（含）以上）人数",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "非学历生（3个月以下）人数",
      },
    ]
  },
  'open-internation-course': { // 开设国际化课程
    title: '国际化课程',
    config: [{
        type: "input",
        prop: "name",
        label: "登记人",
      },
      {
        type: "input",
        prop: "unit",
        label: "登记单位",
      },
      {
        type: "input",
        prop: "category",
        label: "类型",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "专业（课程）名称",
      },
      {
        type: "date",
        subType: 'month',
        prop: "start",
        label: "获批时间", // 年月
        placeholder: "请选择日期",
      },
      {
        type: "select",
        prop: "category",
        label: "授课层次",
        options: [{
            label: "本科",
            value: "本科"
          }, {
            label: "硕士",
            value: "硕士"
          },
          {
            label: "博士",
            value: "博士"
          },
        ],
      },
      {
        type: "date",
        subType: 'month', // 年月
        prop: "start",
        label: "本年度授课开始时间",
        placeholder: "请选择日期",
      },
      {
        type: "date",
        subType: 'month', // 年月
        prop: "start",
        label: "本年度授课结束时间",
        placeholder: "请选择日期",
      },
      {
        type: 'addInput',
        prop: 'courses',
        label: '本年度该专业已开设全英文课程数及课程名称'
      }
    ],
  },
  'cooperation-education': { // 中外合作办学登记
    title: '国际化课程',
    config: [{
        type: "input",
        prop: "name",
        label: "登记人",
      },
      {
        type: "input",
        prop: "unit",
        label: "登记单位",
      },
      {
        type: "select",
        prop: "category",
        label: "类型",
        options: [{
          label: "中外合作办学机构",
          value: "中外合作办学机构"
        }, {
          label: "中外合作办学项目",
          value: "中外合作办学项目"
        }, ],
      },
      {
        type: "input",
        prop: "teacherName",
        label: "机构（项目）名称",
      },
      {
        type: "select",
        prop: "category",
        label: "是否新增",
        options: [{
          label: "是",
          value: "是"
        }, {
          label: "否",
          value: "否"
        }, ],
      },
      {
        type: "date",
        subType: 'year',
        prop: "start",
        label: "获批年份", // 年
        placeholder: "请选择日期",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "国别及外方学校",
      },
      {
        type: "select",
        prop: "category",
        label: "学历层次",
        options: [{
            label: "本科",
            value: "本科"
          }, {
            label: "硕士",
            value: "硕士"
          },
          {
            label: "博士",
            value: "博士"
          },
        ],
      },
      {
        type: "input",
        prop: "teacherName",
        label: "专业名称",
      },
      {
        type: "file",
        prop: "appendix",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl + '', // 上传地址
        // headers:{token:sessionStorage.getItem('ICtoken')},
        tip,
      },
      {
        type: "textarea",
        prop: "overview",
        label: "简介",
        placeholder: "请输入",
        required: false,
        // maxlength: 50
      },
    ],
  },
  'student-exchange': { // 学生交流项目登记
    title: '学生交流项目',
    config: [{
        type: "input",
        prop: "name",
        label: "登记人",
      },
      {
        type: "input",
        prop: "unit",
        label: "登记单位",
      },
      {
        type: "select",
        prop: "category",
        label: "类型",
        options: [{
          label: "常规项目",
          value: "常规项目"
        }, {
          label: "重点项目",
          value: "重点项目"
        }, ],
      },
      {
        type: "input",
        prop: "teacherName",
        label: "项目名称",
      },
      {
        type: "select",
        prop: "category",
        label: "是否新增",
        options: [{
          label: "是",
          value: "是"
        }, {
          label: "否",
          value: "否"
        }, ],
      },
      {
        type: "date",
        subType: 'year',
        prop: "start",
        label: "获批/执行起始年份", // 年
        placeholder: "请选择日期",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "国别及外方学校",
      },
      {
        type: "select",
        prop: "category",
        label: "学历层次",
        options: [{
            label: "本科",
            value: "本科"
          }, {
            label: "硕士",
            value: "硕士"
          },
          {
            label: "博士",
            value: "博士"
          },
        ],
      },
      {
        type: "input",
        prop: "teacherName",
        label: "专业名称",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "满足重点项目条件",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "当年度派出人数",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "本年度来校交流人数",
      },
      {
        type: "file",
        prop: "appendix",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl + '', // 上传地址
        // headers:{token:sessionStorage.getItem('ICtoken')},
        tip,
      },
      {
        type: "textarea",
        prop: "overview",
        label: "简介",
        placeholder: "请输入",
        required: false,
        // maxlength: 50
      },
    ],
  },
  'internation-research': { // 国际联合科研平台填报
    title: '国际联合科研平台',
    config: [{
        type: "input",
        prop: "name",
        label: "登记人",
      },
      {
        type: "input",
        prop: "unit",
        label: "登记单位",
      },
      {
        type: "select",
        prop: "category",
        label: "类型",
        options: [{
          label: "国家级",
          value: "国家级"
        }, {
          label: "省部级",
          value: "省部级"
        }, ],
      },
      {
        type: "input",
        prop: "teacherName",
        label: "机构名称",
      },
      {
        type: "select",
        prop: "category",
        label: "是否新增",
        options: [{
          label: "是",
          value: "是"
        }, {
          label: "否",
          value: "否"
        }, ],
      },
      {
        type: "input",
        prop: "teacherName",
        label: "合作机构名称",
      },
      {
        type: "date",
        // subType: 'year',
        prop: "start",
        label: "批准时间",
        placeholder: "请选择日期",
      },
      {
        type: "file",
        prop: "appendix",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl + '', // 上传地址
        // headers:{token:sessionStorage.getItem('ICtoken')},
        tip,
      },
      {
        type: "textarea",
        prop: "overview",
        label: "简介",
        placeholder: "请输入",
        required: false,
        // maxlength: 50
      },
    ],
  },
  'interation-result-change': { // 国际成果转化或人才培训平台
    title: '国际成果转化或人才培训平台',
    config: [{
        type: "input",
        prop: "name",
        label: "登记人",
      },
      {
        type: "input",
        prop: "unit",
        label: "登记单位",
      },
      {
        type: "select",
        prop: "category",
        label: "类型",
        options: [{
          label: "国家级",
          value: "国家级"
        }, {
          label: "省部级",
          value: "省部级"
        }, ],
      },
      {
        type: "input",
        prop: "teacherName",
        label: "机构名称",
      },
      {
        type: "select",
        prop: "category",
        label: "是否新增",
        options: [{
          label: "是",
          value: "是"
        }, {
          label: "否",
          value: "否"
        }, ],
      },
      {
        type: "date",
        // subType: 'year',
        prop: "start",
        label: "批准时间",
        placeholder: "请选择日期",
      },
      {
        type: "file",
        prop: "appendix",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl + '', // 上传地址
        // headers:{token:sessionStorage.getItem('ICtoken')},
        tip,
      },
      {
        type: "textarea",
        prop: "overview",
        label: "简介",
        placeholder: "请输入",
        required: false,
        // maxlength: 50
      },
    ],
  },
  'interation-area-research': { // 国别与区域研究中心登记
    title: '国别与区域研究中心',
    config: [{
        type: "input",
        prop: "name",
        label: "登记人",
      },
      {
        type: "input",
        prop: "unit",
        label: "登记单位",
      },
      {
        type: "select",
        prop: "category",
        label: "类型",
        options: [{
          label: "教育部备案",
          value: "教育部备案"
        }, {
          label: "学校备案",
          value: "学校备案"
        }, ],
      },
      {
        type: "input",
        prop: "teacherName",
        label: "机构名称",
      },
      {
        type: "select",
        prop: "category",
        label: "是否新增",
        options: [{
          label: "是",
          value: "是"
        }, {
          label: "否",
          value: "否"
        }, ],
      },
      {
        type: "date",
        // subType: 'year',
        prop: "start",
        label: "批准时间",
        placeholder: "请选择日期",
      },
      {
        type: "file",
        prop: "appendix",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl + '', // 上传地址
        // headers:{token:sessionStorage.getItem('ICtoken')},
        tip,
      },
      {
        type: "textarea",
        prop: "overview",
        label: "简介",
        placeholder: "请输入",
        required: false,
        // maxlength: 50
      },
      {
        type: "input",
        prop: "teacherName",
        label: "网址",
      },
    ],
  },
  'advanced-expert-import': { // 高端专家引进计划登记
    title: '国别与区域研究中心',
    config: [{
        type: "input",
        prop: "name",
        label: "登记人",
      },
      {
        type: "input",
        prop: "unit",
        label: "登记单位",
      },
      {
        type: "select",
        prop: "category",
        label: "类型",
        options: [{
          label: "国家级",
          value: "国家级"
        }, {
          label: "省级",
          value: "省级"
        }, ],
      },
      {
        type: "input",
        prop: "teacherName",
        label: "项目名称",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "引进外专人数",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "外专在校累计天数",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "引进外专国别",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "引进外专层次",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "项目名称",
      },
      {
        type: "date",
        // subType: 'year',
        prop: "start",
        label: "立项时间",
        placeholder: "请选择日期",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "项目执行年限",
      },
      {
        type: "select",
        prop: "category",
        label: "是否按期执行完毕",
        options: [{
          label: "是",
          value: "是"
        }, {
          label: "否",
          value: "否"
        }, ],
      },
      {
        type: "file",
        prop: "appendix",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl + '', // 上传地址
        // headers:{token:sessionStorage.getItem('ICtoken')},
        tip,
      },
      {
        type: "textarea",
        prop: "overview",
        label: "简介",
        placeholder: "请输入",
        required: false,
        // maxlength: 50
      },
    ],
  },
  'advanced-project-import': { // 引智平台项目登记
    title: '引智平台项目',
    config: [{
        type: "input",
        prop: "name",
        label: "登记人",
      },
      {
        type: "input",
        prop: "unit",
        label: "登记单位",
      },
      {
        type: "select",
        prop: "category",
        label: "类型",
        options: [{
          label: "国家级",
          value: "国家级"
        }, {
          label: "省级",
          value: "省级"
        }, ],
      },
      {
        type: "input",
        prop: "teacherName",
        label: "项目名称",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "引进外专人数",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "外专在校累计天数",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "引进外专国别",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "外专职务/职称",
      },
      {
        type: "select",
        prop: "category",
        label: "是否有国际学术大师",
        options: [{
          label: "是",
          value: "是"
        }, {
          label: "否",
          value: "否"
        }, ],
      },
      {
        type: "date",
        // subType: 'year',
        prop: "start",
        label: "立项时间",
        placeholder: "请选择日期",
      },
      {
        type: "select",
        prop: "category",
        label: "是否为新增项目",
        options: [{
          label: "是",
          value: "是"
        }, {
          label: "否",
          value: "否"
        }, ],
      },
      {
        type: "file",
        prop: "appendix",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl + '', // 上传地址
        // headers:{token:sessionStorage.getItem('ICtoken')},
        tip,
      },
      {
        type: "textarea",
        prop: "overview",
        label: "简介",
        placeholder: "请输入",
        required: false,
        // maxlength: 50
      },
    ],
  },
  'interation-meeting-login': { // 国际会议负责人登记
    title: '举办国际学术会议',
    config: [{
        type: "input",
        prop: "name",
        label: "登记人",
      },
      {
        type: "input",
        prop: "unit",
        label: "登记单位",
      },
      {
        type: "input",
        prop: "unit",
        label: "会议名称（中英文）",
      },
      {
        type: "select",
        prop: "category",
        label: "类型",
        options: [{
          label: "会议申报、召开",
          value: "会议申报、召开"
        }, {
          label: "会议成果总结",
          value: "会议成果总结"
        }, ],
      },
      {
        type: "date",
        // subType: 'year',
        prop: "start",
        label: "时间",
        placeholder: "请选择日期",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "地点",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "中方与会人数",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "外方与会人数",
      },
      {
        type: "select",
        prop: "category",
        label: "会议综述是否被《国际学术动态》收录",
        options: [{
          label: "是",
          value: "是"
        }, {
          label: "否",
          value: "否"
        }, ],
      },
      {
        type: "textarea",
        prop: "overview",
        label: "主要议题及成果",
        placeholder: "请输入",
        maxlength: 100
      },
      {
        type: "file",
        prop: "appendix",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl + '', // 上传地址
        // headers:{token:sessionStorage.getItem('ICtoken')},
        tip,
      },
    ],
  },
  'interation-guarantee': { // 国际化保障及办学特色
    title: '国际化保障及办学特色',
    config: [{
        type: "input",
        prop: "name",
        label: "登记人",
      },
      {
        type: "input",
        prop: "unit",
        label: "登记单位",
      },
      {
        type: "select",
        prop: "category",
        label: "是否有专/兼职外事秘书",
        options: [{
          label: "是",
          value: "是"
        }, {
          label: "否",
          value: "否"
        }, ],
      },
      {
        type: 'addInput',
        prop: 'courses',
        label: '外事秘书姓名'
      },
      {
        type: "select",
        prop: "category",
        label: "是否有二级英文网站并持续更新",
        options: [{
          label: "是",
          value: "是"
        }, {
          label: "否",
          value: "否"
        }, ],
      },
      {
        type: "textarea",
        prop: "overview",
        label: "二级英文网站建设情况简介",
        placeholder: "请输入",
        required: false,
        maxlength: 500
      },
      {
        type: "select",
        prop: "category",
        label: "是否制作外文宣传材料",
        options: [{
          label: "是",
          value: "是"
        }, {
          label: "否",
          value: "否"
        }, ],
      },
      {
        type: "textarea",
        prop: "overview",
        label: "制作外文宣传材料情况简介，如有请提供附件材料",
        placeholder: "请输入",
        maxlength: 200,
        required: false,
      },
      {
        type: "select",
        prop: "category",
        label: "是否制作外文宣传片情况",
        options: [{
          label: "是",
          value: "是"
        }, {
          label: "否",
          value: "否"
        }, ],
      },
      {
        type: "textarea",
        prop: "overview",
        label: "制作外文宣传片情况简介，如有请提供附件材料",
        placeholder: "请输入",
        maxlength: 200,
        required: false,
      },
      {
        type: "select",
        prop: "category",
        label: "是否特色活动或特色项目",
        options: [{
          label: "是",
          value: "是"
        }, {
          label: "否",
          value: "否"
        }, ],
      },
      {
        type: "textarea",
        prop: "overview",
        label: "特色活动或特色项目简介，如有请提供附件材料",
        placeholder: "请输入",
        maxlength: 500,
        required: false,
      },
      {
        type: "file",
        prop: "appendix",
        label: "附件",
        limit: 3,
        required: false,
        action: baseurl + '', // 上传地址
        // headers:{token:sessionStorage.getItem('ICtoken')},
        tip,
      },
    ],
  },
  'overseas-treaty': { // 与海外院校新签署协议并有实质性交流合作
    title: '与海外院校新签署协议并有实质性交流合作',
    config: [{
        type: "input",
        prop: "name",
        label: "登记人",
      },
      {
        type: "input",
        prop: "unit",
        label: "登记单位",
      },
      {
        type: "input",
        prop: "unit",
        label: "合作协议名称",
      },
      {
        type: "date",
        // subType: 'year',
        prop: "start",
        label: "签约时间",
        placeholder: "请选择日期",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "有效期限",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "外方合作院校及国别",
      },
      {
        type: "input",
        prop: "teacherName",
        label: "外方合作院校世界排名（参考当年QS排名）",
      },
      {
        type: "file",
        prop: "appendix",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl + '', // 上传地址
        // headers:{token:sessionStorage.getItem('ICtoken')},
        tip,
      },
      {
        type: "textarea",
        prop: "overview",
        label: "简介",
        placeholder: "请输入",
        required: false,
      },
    ],
  },
  'interation-ally': { // 国际联盟发起,联合成立
    title: '国际联盟',
    config: [{
        type: "input",
        prop: "name",
        label: "登记人",
      },
      {
        type: "input",
        prop: "unit",
        label: "登记单位",
      },
      {
        type: "input",
        prop: "unit",
        label: "联盟名称",
      },
      {
        type: "date",
        // subType: 'year',
        prop: "start",
        label: "成立时间",
        placeholder: "请选择日期",
      },
      {
        type: "select",
        prop: "category",
        label: "类型",
        options: [{
          label: "发起",
          value: "发起"
        }, {
          label: "联合成立",
          value: "联合成立"
        }, ],
      },
      {
        type: "file",
        prop: "appendix",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl + '', // 上传地址
        // headers:{token:sessionStorage.getItem('ICtoken')},
        tip,
      },
      {
        type: "textarea",
        prop: "overview",
        label: "简介",
        placeholder: "请输入",
        required: false,
      },
    ],
  },
}