const baseurl = "http://39.107.24.47:8080/file";
// const tip = '只能上传 doc，docx，pdf，png，jpg 文件，且不超过500kb'
const tip = "";
module.exports = {
  "teacher-board": {
    // 教师出国交流申请
    request:"teacherexchange",
    title: "教师出国（境）交流",
    config: [
      {
        type: "input",
        prop: "username",
        label: "姓名",
        required: true, // 默认为true
      },
      {
        type: "input",
        prop: "userOrg",
        label: "单位",
      },
      {
        type: "input",
        prop: "job",
        label: "职务/职称",
      },
      {
        type: "input",
        prop: "country",
        label: "地区/国别",
      },
      {
        type: "input",
        prop: "dstOrg",
        label: "访问机构",
      },
      {
        type: "textarea",
        prop: "reason",
        label: "事由及出国身份",
        extraInfo:
          "访问学者、合作研究、国际会议、一般性考察交流、博士后及其他事项",
        // maxlength: 50,
      },
      {
        type: "select",
        prop: "type",
        label: "类别",
        options: [
          {
            label: "中长期",
            value: 1,
          },
          {
            label: "短期",
            value: 0,
          },
        ],
      },
      {
        type: "input",
        prop: "period",
        label: "起止时间",
        extraInfo: "格式为 xxxx/xx/xx-xxxx/xx/xx",
      },
      {
        type: "input",
        prop: "lastTime",
        label: "时长",
      },
      {
        type: "file",
        prop: "files",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl + "", // 上传地址
        // headers:{token:sessionStorage.getItem('ICtoken')},
        tip,
      },
      {
        type: "textarea",
        prop: "intro",
        label: "简介",
        required: false,
        // maxlength: 50
      },
    ],
  },
  "internation-publication": {
    // 国际组织刊物任职（个人填报、单位汇总）
    request:"publicationjob",
    title: "国际组织、刊物任职",
    config: [
      {
        type: "input",
        prop: "fullName",
        label: "姓名",
      },
      {
        type: "input",
        prop: "enterprise",
        label: "单位",
      },
      {
        type: "input",
        prop: "title",
        label: "职务/职称",
      },
      {
        type: "radio",
        prop: "type",
        label: "类型",
        options: [
          { label: "国际组织", value: "国际组织" },
          { label: "国际学术刊物", value: "国际学术刊物" },
        ],
      },
      {
        type: "input",
        prop: "pubName",
        label: "国际组织（刊物）刊物名称",
        extraInfo: "注明具体组织或刊物名称",
      },
      {
        type: "input",
        prop: "job",
        label: "担任职务名称",
      },
      {
        type: "input",
        prop: "period",
        label: "任职起止日期",
      },
      {
        type: "file",
        prop: "files",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl,
        tip,
      },
      {
        type: "textarea",
        prop: "intro",
        label: "简介",
        required: false,
        // maxlength: 50
      },
    ],
  },
  "student-board": {
    // 在校生出国交流申请
    request:"studentexchange",
    title: "在校生出国（境）交流",
    config: [
      {
        type: "input",
        prop: "username",
        label: "登记人",
      },
      {
        type: "input",
        prop: "userOrg",
        label: "登记单位",
      },
      {
        type: "input",
        prop: "studentName",
        label: "姓名",
      },
      {
        type: "select",
        prop: "degree",
        label: "学位",
        options: [
          {
            label: "本科",
            value: "本科",
          },
          {
            label: "硕士",
            value: "硕士",
          },
          {
            label: "博士",
            value: "博士",
          },
        ],
      },
      {
        type: "select",
        prop: "type",
        label: "类型",
        options: [
          {
            label: "中长期",
            value: 1,
          },
          {
            label: "短期",
            value: 0,
          },
        ],
      },
      {
        type: "input",
        prop: "country",
        label: "访问地区/国别",
      },
      {
        type: "input",
        prop: "dstOrg",
        label: "接待机构",
      },
      {
        type: "input",
        prop: "period",
        label: "起止时间",
        extraInfo: "格式为 xxxx/xx/xx-xxxx/xx/xx",
      },
      {
        type: "input",
        prop: "lastTime",
        label: "时长",
      },
      {
        type: "file",
        prop: "files",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl,
        tip,
      },
      {
        type: "textarea",
        prop: "reason",
        label: "事由",
        required: false,
        // maxlength: 50
      },
    ],
  },
  "overseas-expert-exchange": {
    // 国外专家来校交流申请
    request:"longtermexpert",
    title: "长期国（境）外专家来校交流(3个月（含）以上）",
    config: [
      {
        type: "input",
        prop: "username",
        label: "登记人",
      },
      {
        type: "input",
        prop: "userOrg",
        label: "登记单位",
      },
      {
        type: "input",
        prop: "fullName",
        label: "外专护照姓名",
      },
      {
        type: "radio",
        prop: "gender",
        label: "性别",
        options: [
          { label: "男", value: 1 },
          { label: "女", value: 0 },
        ],
      },
      {
        type: "input",
        prop: "country",
        label: "国籍",
      },
      {
        type: "input",
        prop: "enterprise",
        label: "所在单位",
      },
      {
        type: "input",
        prop: "academicRank",
        label: "学衔",
      },
      {
        type: "input",
        prop: "period",
        label: "聘期起止日期",
      },
      {
        type: "radio",
        prop: "isTutor",
        label: "是否担任导师",
        options: [
          { label: "是", value: 1 },
          { label: "否", value: 0 },
        ],
      },
      {
        type: "textarea",
        prop: "reason",
        label: "事由",
        extraInfo:
          "来校授课、合作研究、学术交流、学术会议、一般性访问及其他事项，数据统计包括国（境）外博士后",
        // maxlength: 50
      },
      {
        type: "file",
        prop: "files",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl,
        tip,
      },
      {
        type: "textarea",
        prop: "intro",
        label: "简介",
        required: false,
        // maxlength: 50
      },
    ],
  },
  "overseas-expert-exchange-short": {
    // 国外专家来校交流申请
    request:"shorttermexpert",
    title: "短期国（境）外专家来校交流（3个月以下）",
    config: [
      {
        type: "input",
        prop: "username",
        label: "登记人",
      },
      {
        type: "input",
        prop: "userOrg",
        label: "登记单位",
      },
      {
        type: "input",
        prop: "fullName",
        label: "护照姓名",
      },
      {
        type: "radio",
        prop: "gender",
        label: "性别",
        options: [
          { label: "男", value: 1 },
          { label: "女", value: 0 },
        ],
      },
      {
        type: "input",
        prop: "country",
        label: "国籍",
      },
      {
        type: "input",
        prop: "enterprise",
        label: "所在单位",
      },
      {
        type: "input",
        prop: "academicRank",
        label: "学衔",
      },
      {
        type: "input",
        prop: "purpose",
        label: "来访目的",
      },
      {
        type: "input",
        prop: "period",
        label: "来访起止日期",
      },
      {
        type: "input",
        prop: "reportTopics",
        label: "报告/讲课题目",
      },
      {
        type: "input",
        prop: "reportNum", // Integer
        label: "报告场数",
      },
      {
        type: "input",
        prop: "isAgreement",
        label: "来访是否依托校际协议",
        extraInfo: "如是，请注明具体协议名称",
      },
      {
        type: "input",
        prop: "isProjected",
        label: "来访是否依托引智及外国专家等项目",
        extraInfo: "如是，请注明具体项目名称",
      },
      {
        type: "textarea",
        prop: "reason",
        label: "事由",
        extraInfo:
          "来校授课、合作研究、学术交流、学术会议、一般性访问及其他事项，数据统计包括国（境）外博士后",
        // maxlength: 50
      },
      {
        type: "file",
        prop: "files",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl,
        tip,
      },
      {
        type: "textarea",
        prop: "intro",
        label: "简介",
        required: false,
        // maxlength: 50
      },
    ],
  },
  "overseas-teacher": {
    // 添加海外学历教师
    request:"overseasteacher",
    title: "新增具有海外学历的教师",
    config: [
      {
        type: "input",
        prop: "fullName",
        label: "姓名",
      },
      {
        type: "input",
        prop: "enterprise",
        label: "单位",
      },
      {
        type: "input",
        prop: "graduateSchool",
        label: "海外毕业院校",
      },
      {
        type: "input",
        prop: "degree",
        label: "所获学历",
      },
      {
        type: "input",
        prop: "period",
        label: "受聘时间",
      },
      {
        type: "file",
        prop: "files",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl,
        tip,
      },
      {
        type: "textarea",
        prop: "intro",
        label: "简介",
        required: false,
        // maxlength: 50
      },
    ],
  },
  "overseas-expert-part-time": {
    // 国外专家兼职登记
    request:"expertjob",
    title: "国（境）外专家担任兼职教授、客座教授和荣誉教授",
    config: [
      {
        type: "input",
        prop: "username",
        label: "登记人",
      },
      {
        type: "input",
        prop: "userOrg",
        label: "登记单位",
      },
      {
        type: "input",
        prop: "fullName",
        label: "专家姓名",
      },
      {
        type: "input",
        prop: "country",
        label: "国别/地区",
      },
      {
        type: "input",
        prop: "enterprise",
        label: "机构",
      },
      {
        type: "input",
        prop: "hired",
        label: "受聘荣誉",
      },
      {
        type: "input",
        prop: "period",
        label: "受聘时间",
      },
      {
        type: "file",
        prop: "files",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl,
        tip,
      },
      {
        type: "textarea",
        prop: "intro",
        label: "简介",
        required: false,
        // maxlength: 50
      },
    ],
  },
  "overseas-expert-prize": {
    // 国外专家获奖登记
    request:"expertaward",
    title: "国（境）外专家担任兼职教授、客座教授和荣誉教授",
    config: [
      {
        type: "input",
        prop: "username",
        label: "登记人",
      },
      {
        type: "input",
        prop: "userOrg",
        label: "登记单位",
      },
      {
        type: "input",
        prop: "fullName",
        label: "专家姓名",
      },
      {
        type: "date",
        prop: "awardTime",
        label: "获奖时间",
        placeholder: "请选择日期",
      },
      {
        type: "select",
        prop: "awardLevel",
        label: "获奖级别",
        options: [
          {
            label: "市级",
            value: "市级",
          },
          {
            label: "省级",
            value: "省级",
          },
          {
            label: "国家级",
            value: "国家级",
          },
        ],
      },
      {
        type: "input",
        prop: "awardName",
        label: "获奖名称",
      },
      {
        type: "file",
        prop: "files",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl,
        tip,
      },
      {
        type: "textarea",
        prop: "intro",
        label: "简介",
        required: false,
        // maxlength: 50
      },
    ],
  },
  "interation-education": {
    // 国际学生及港澳台学生教育
    request:"iternationalstudentedu",
    title: "国际学生及港澳台学生教育",
    config: [
      {
        type: "input",
        prop: "username",
        label: "登记人",
      },
      {
        type: "input",
        prop: "userOrg",
        label: "登记单位",
      },
      {
        type: "select",
        prop: "type",
        label: "类型",
        options: [
          {
            label: "国际学生教育",
            value: "国际学生教育",
          },
          {
            label: "港澳台学生教育",
            value: "港澳台学生教育",
          },
        ],
      },
      {
        type: "input",
        prop: "benkeNum", // Integer
        label: "本科生人数",
      },
      {
        type: "input",
        prop: "shuoshiNum", // Integer
        label: "硕士研究生人数",
      },
      {
        type: "input",
        prop: "boshiNum", // Integer
        label: "博士研究生人数",
      },
      {
        type: "input",
        prop: "longnoneNum", // Integer
        label: "非学历生（3个月（含）以上）人数",
      },
      {
        type: "input",
        prop: "shortnoneNum", // Integer
        label: "非学历生（3个月以下）人数",
      },
    ],
  },

  "open-internation-course": {
    // 开设国际化课程
    request:"itcourse",
    title: "国际化课程",
    config: [
      {
        type: "input",
        prop: "username",
        label: "登记人",
      },
      {
        type: "input",
        prop: "userOrg",
        label: "登记单位",
      },
      {
        type: "input",
        prop: "type",
        label: "类型",
      },
      {
        type: "input",
        prop: "courseName",
        label: "专业（课程）名称",
      },
      {
        type: "input",
        prop: "passTime",
        label: "获批时间(年月)",
      },
      {
        type: "select",
        prop: "courseLevel",
        label: "授课层次",
        options: [
          {
            label: "本科",
            value: "本科",
          },
          {
            label: "硕士",
            value: "硕士",
          },
          {
            label: "博士",
            value: "博士",
          },
        ],
      },
      {
        type: "input",
        prop: "coursePeriod",
        label: "本年度授课起止时间（年月）",
      },

      {
        type: "addInput",
        prop: "courseList",
        label: "本年度该专业已开设全英文课程名称",
      },
    ],
  },

  "cooperation-education": {
    // 中外合作办学登记
    request:"cooperativeeducation",
    title: "国际化课程",
    config: [
      {
        type: "input",
        prop: "username",
        label: "登记人",
      },
      {
        type: "input",
        prop: "userOrg",
        label: "登记单位",
      },
      {
        type: "select",
        prop: "type",
        label: "类型",
        options: [
          {
            label: "中外合作办学机构",
            value: "中外合作办学机构",
          },
          {
            label: "中外合作办学项目",
            value: "中外合作办学项目",
          },
        ],
      },
      {
        type: "input",
        prop: "fullName",
        label: "机构（项目）名称",
      },
      {
        type: "select",
        prop: "isNew",
        label: "是否新增",
        options: [
          {
            label: "是",
            value: 1,
          },
          {
            label: "否",
            value: 0,
          },
        ],
      },
      {
        type: "input",
        prop: "passYear",
        label: "获批年份",
      },
      {
        type: "input",
        prop: "outerBelong",
        label: "国别及外方学校",
      },
      {
        type: "select",
        prop: "degreeLevel",
        label: "学历层次",
        options: [
          {
            label: "本科",
            value: "本科",
          },
          {
            label: "硕士",
            value: "硕士",
          },
          {
            label: "博士",
            value: "博士",
          },
        ],
      },
      {
        type: "input",
        prop: "majorName",
        label: "专业名称",
      },
      {
        type: "file",
        prop: "files",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl,
        tip,
      },
      {
        type: "textarea",
        prop: "intro",
        label: "简介",
        required: false,
        // maxlength: 50
      },
    ],
  },
  "student-exchange": {
    // 学生交流项目登记
    request:"stuexchangeproject",
    title: "学生交流项目",
    config: [
      {
        type: "input",
        prop: "username",
        label: "登记人",
      },
      {
        type: "input",
        prop: "userOrg",
        label: "登记单位",
      },
      {
        type: "select",
        prop: "type",
        label: "类型",
        options: [
          {
            label: "常规项目",
            value: "常规项目",
          },
          {
            label: "重点项目",
            value: "重点项目",
          },
        ],
      },
      {
        type: "input",
        prop: "fullName",
        label: "项目名称",
      },
      {
        type: "select",
        prop: "isNew",
        label: "是否新增",
        options: [
          {
            label: "是",
            value: 1,
          },
          {
            label: "否",
            value: 0,
          },
        ],
      },
      {
        type: "input",
        prop: "passYear",
        label: "获批/执行起始年份",
      },
      {
        type: "input",
        prop: "outerBelong",
        label: "国别及外方学校",
      },
      {
        type: "select",
        prop: "degreeLevel",
        label: "学历层次",
        options: [
          {
            label: "本科",
            value: "本科",
          },
          {
            label: "硕士",
            value: "硕士",
          },
          {
            label: "博士",
            value: "博士",
          },
        ],
      },
      {
        type: "input",
        prop: "majorName",
        label: "专业名称",
      },
      {
        type: "input",
        prop: "pointCondition",
        label: "满足重点项目条件",
      },
      {
        type: "input",
        prop: "sendNum", // Integer
        label: "当年度派出人数",
      },
      {
        type: "input",
        prop: "receiveNum", // Integer
        label: "本年度来校交流人数",
      },
      {
        type: "file",
        prop: "files",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl,
        tip,
      },
      {
        type: "textarea",
        prop: "intro",
        label: "简介",
        required: false,
        // maxlength: 50
      },
    ],
  },
  "internation-research": {
    // 国际联合科研平台填报
    request:"itresearchplatform",
    title: "国际联合科研平台",
    config: [
      {
        type: "input",
        prop: "username",
        label: "登记人",
      },
      {
        type: "input",
        prop: "userOrg",
        label: "登记单位",
      },
      {
        type: "select",
        prop: "type",
        label: "类型",
        options: [
          {
            label: "国家级",
            value: "国家级",
          },
          {
            label: "省部级",
            value: "省部级",
          },
        ],
      },
      {
        type: "input",
        prop: "fullName",
        label: "机构名称",
      },
      {
        type: "select",
        prop: "isNew",
        label: "是否新增",
        options: [
          {
            label: "是",
            value: 1,
          },
          {
            label: "否",
            value: 0,
          },
        ],
      },
      {
        type: "input",
        prop: "coopOrgName",
        label: "合作机构名称",
      },
      {
        type: "date",
        // subType: 'year',
        prop: "coopOrgName",
        label: "批准时间",
        placeholder: "请选择日期",
      },
      {
        type: "file",
        prop: "files",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl,
        tip,
      },
      {
        type: "textarea",
        prop: "intro",
        label: "简介",
        required: false,
        // maxlength: 50
      },
    ],
  },
  "interation-result-change": {
    // 国际成果转化或人才培训平台
    request:"itachievementtrainingplatform",
    title: "国际成果转化或人才培训平台",
    config: [
      {
        type: "input",
        prop: "username",
        label: "登记人",
      },
      {
        type: "input",
        prop: "userOrg",
        label: "登记单位",
      },
      {
        type: "select",
        prop: "type",
        label: "类型",
        options: [
          {
            label: "国家级",
            value: "国家级",
          },
          {
            label: "省部级",
            value: "省部级",
          },
        ],
      },
      {
        type: "input",
        prop: "fullName",
        label: "机构名称",
      },
      {
        type: "select",
        prop: "isNew",
        label: "是否新增",
        options: [
          {
            label: "是",
            value: 1,
          },
          {
            label: "否",
            value: 0,
          },
        ],
      },
      {
        type: "date",
        // subType: 'year',
        prop: "passTime",
        label: "批准时间",
        placeholder: "请选择日期",
      },
      {
        type: "file",
        prop: "files",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl,
        tip,
      },
      {
        type: "textarea",
        prop: "intro",
        label: "简介",
        required: false,
        // maxlength: 50
      },
    ],
  },
  "interation-area-research": {
    // 国别与区域研究中心登记
    request:"nationalregionalcenter",
    title: "国别与区域研究中心",
    config: [
      {
        type: "input",
        prop: "username",
        label: "登记人",
      },
      {
        type: "input",
        prop: "userOrg",
        label: "登记单位",
      },
      {
        type: "select",
        prop: "type",
        label: "类型",
        options: [
          {
            label: "教育部备案",
            value: "教育部备案",
          },
          {
            label: "学校备案",
            value: "学校备案",
          },
        ],
      },
      {
        type: "input",
        prop: "fullName",
        label: "机构名称",
      },
      {
        type: "select",
        prop: "isNew",
        label: "是否新增",
        options: [
          {
            label: "是",
            value: 1,
          },
          {
            label: "否",
            value: 0,
          },
        ],
      },
      {
        type: "date",
        // subType: 'year',
        prop: "passTime",
        label: "批准时间",
        placeholder: "请选择日期",
      },
      {
        type: "file",
        prop: "files",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl,
        tip,
      },
      {
        type: "textarea",
        prop: "intro",
        label: "简介",
        required: false,
        // maxlength: 50
      },
      {
        type: "input",
        prop: "website",
        label: "网址",
      },
    ],
  },
  "advanced-expert-import": {
    // 高端专家引进计划登记
    request:"expertintroplan",
    title: "高端专家引进计划",
    config: [
      {
        type: "input",
        prop: "username",
        label: "登记人",
      },
      {
        type: "input",
        prop: "userOrg",
        label: "登记单位",
      },
      {
        type: "select",
        prop: "type",
        label: "类型",
        options: [
          {
            label: "国家级",
            value: "国家级",
          },
          {
            label: "省级",
            value: "省级",
          },
        ],
      },
      {
        type: "input",
        prop: "fullName",
        label: "项目名称",
      },
      {
        type: "input",
        prop: "expertsNum", // Integer
        label: "引进外专人数",
      },
      {
        type: "input",
        prop: "expertsDays", // Integer
        label: "外专在校累计天数",
      },
      {
        type: "input",
        prop: "expertsCountry",
        label: "引进外专国别",
      },
      {
        type: "input",
        prop: "expertsLevel",
        label: "引进外专层次",
      },
      {
        type: "date",
        // subType: 'year',
        prop: "createTime",
        label: "立项时间",
        placeholder: "请选择日期",
      },
      {
        type: "input",
        prop: "existYears",
        label: "项目执行年限",
      },
      {
        type: "select",
        prop: "isFinished",
        label: "是否按期执行完毕",
        options: [
          {
            label: "是",
            value: 1,
          },
          {
            label: "否",
            value: 0,
          },
        ],
      },
      {
        type: "file",
        prop: "files",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl,
        tip,
      },
      {
        type: "textarea",
        prop: "intro",
        label: "简介",
        required: false,
        // maxlength: 50
      },
    ],
  },
  "advanced-project-import": {
    // 引智平台项目登记
    request:"introwiseproject",
    title: "引智平台项目(包括“111计划”等)",
    config: [
      {
        type: "input",
        prop: "username",
        label: "登记人",
      },
      {
        type: "input",
        prop: "userOrg",
        label: "登记单位",
      },
      {
        type: "select",
        prop: "type",
        label: "类型",
        options: [
          {
            label: "国家级",
            value: "国家级",
          },
          {
            label: "省级",
            value: "省级",
          },
        ],
      },
      {
        type: "input",
        prop: "fullName",
        label: "项目名称",
      },
      {
        type: "input",
        prop: "expertsNum", // Integer
        label: "引进外专人数",
      },
      {
        type: "input",
        prop: "expertsDays", // Integer
        label: "外专在校累计天数",
      },
      {
        type: "input",
        prop: "expertsCountry",
        label: "引进外专国别",
      },
      {
        type: "input",
        prop: "expertsTitle",
        label: "外专职务/职称",
      },
      {
        type: "select",
        prop: "isMaster",
        label: "是否有国际学术大师",
        options: [
          {
            label: "是",
            value: 1,
          },
          {
            label: "否",
            value: 0,
          },
        ],
      },
      {
        type: "date",
        // subType: 'year',
        prop: "createTime",
        label: "立项时间",
        placeholder: "请选择日期",
      },
      {
        type: "select",
        prop: "isNew",
        label: "是否为新增项目",
        options: [
          {
            label: "是",
            value: 1,
          },
          {
            label: "否",
            value: 0,
          },
        ],
      },
      {
        type: "file",
        prop: "files",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl,
        tip,
      },
      {
        type: "textarea",
        prop: "intro",
        label: "简介",
        required: false,
        // maxlength: 50
      },
    ],
  },
  "interation-meeting-login": {
    // 国际会议负责人登记
    request:"itmeeting",
    title: "举办国际学术会议",
    config: [
      {
        type: "input",
        prop: "username",
        label: "登记人",
      },
      {
        type: "input",
        prop: "userOrg",
        label: "登记单位",
      },
      {
        type: "input",
        prop: "meetingName",
        label: "会议名称（中英文）",
      },
      {
        type: "select",
        prop: "type",
        label: "类型",
        options: [
          {
            label: "会议申报、召开",
            value: "会议申报、召开",
          },
          {
            label: "会议成果总结",
            value: "会议成果总结",
          },
        ],
      },
      {
        type: "date",
        // subType: 'year',
        prop: "time",
        label: "时间",
        placeholder: "请选择日期",
      },
      {
        type: "input",
        prop: "place",
        label: "地点",
      },
      {
        type: "input",
        prop: "cnNum", // Integer
        label: "中方与会人数",
      },
      {
        type: "input",
        prop: "enNum", // Integer
        label: "外方与会人数",
      },
      {
        type: "select",
        prop: "isRecorded",
        label: "会议综述是否被《国际学术动态》收录",
        options: [
          {
            label: "是",
            value: 1,
          },
          {
            label: "否",
            value: 0,
          },
        ],
      },
      {
        type: "textarea",
        prop: "subjectAchi",
        label: "主要议题及成果",
        maxlength: 100,
      },
      {
        type: "file",
        prop: "files",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl,
        tip,
      },
    ],
  },

  "interation-guarantee": {
    // 国际化保障及办学特色
    request:"itguaranteefeature",
    title: "国际化保障及办学特色",
    config: [
      {
        type: "input",
        prop: "username",
        label: "登记人",
      },
      {
        type: "input",
        prop: "userOrg",
        label: "登记单位",
      },
      {
        type: "select",
        prop: "haveSecretary",
        label: "是否有专/兼职外事秘书",
        options: [
          {
            label: "是",
            value: 1,
          },
          {
            label: "否",
            value: 0,
          },
        ],
      },

      {
        type: "addInput",
        prop: "secretaryList",
        label: "外事秘书姓名",
      },

      {
        type: "select",
        prop: "haveSecWeb",
        label: "是否有二级英文网站并持续更新",
        options: [
          {
            label: "是",
            value: 1,
          },
          {
            label: "否",
            value: 0,
          },
        ],
      },
      {
        type: "textarea",
        prop: "webIntro",
        label: "二级英文网站建设情况简介",
        required: false,
        maxlength: 500,
      },
      {
        type: "select",
        prop: "haveProfile",
        label: "是否制作外文宣传材料",
        options: [
          {
            label: "是",
            value: 1,
          },
          {
            label: "否",
            value: 0,
          },
        ],
      },
      {
        type: "textarea",
        prop: "profileMetery",
        label: "制作外文宣传材料情况简介",
        extraInfo: "如有请提供附件材料",
        maxlength: 200,
        required: false,
      },
      {
        type: "select",
        prop: "haveVideo",
        label: "是否制作外文宣传片情况",
        options: [
          {
            label: "是",
            value: 1,
          },
          {
            label: "否",
            value: 0,
          },
        ],
      },
      {
        type: "textarea",
        prop: "video",
        label: "制作外文宣传片情况简介",
        extraInfo: "如有请提供附件材料",
        maxlength: 200,
        required: false,
      },
      {
        type: "select",
        prop: "haveFeature",
        label: "是否特色活动或特色项目",
        options: [
          {
            label: "是",
            value: 1,
          },
          {
            label: "否",
            value: 0,
          },
        ],
      },
      {
        type: "textarea",
        prop: "feature",
        label: "特色活动或特色项目简介",
        extraInfo: "如有请提供附件材料",
        maxlength: 500,
        required: false,
      },
      {
        type: "file",
        prop: "file",
        label: "附件",
        limit: 3,
        required: false,
        action: baseurl,
        tip,
      },
    ],
  },

  "overseas-treaty": {
    // 与海外院校新签署协议并有实质性交流合作
    request:"exchangecooperation",
    title: "与海外院校新签署协议并有实质性交流合作",
    config: [
      {
        type: "input",
        prop: "username",
        label: "登记人",
      },
      {
        type: "input",
        prop: "userOrg",
        label: "登记单位",
      },
      {
        type: "input",
        prop: "protocolName",
        label: "合作协议名称",
      },
      {
        type: "date",
        // subType: 'year',
        prop: "signTime",
        label: "签约时间",
        placeholder: "请选择日期",
      },
      {
        type: "input",
        prop: "effectiveTime",
        label: "有效期限",
      },
      {
        type: "input",
        prop: "outerBelong",
        label: "外方合作院校及国别",
      },
      {
        type: "input",
        prop: "worldRank",
        label: "外方合作院校世界排名",
        extraInfo: "参考当年QS排名",
      },
      {
        type: "file",
        prop: "files",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl,
        tip,
      },
      {
        type: "textarea",
        prop: "intro",
        label: "简介",
        required: false,
      },
    ],
  },

  "interation-ally": {
    // 国际联盟发起,联合成立
    request:"leaguenations",
    title: "国际联盟",
    config: [
      {
        type: "input",
        prop: "username",
        label: "登记人",
      },
      {
        type: "input",
        prop: "userOrg",
        label: "登记单位",
      },
      {
        type: "input",
        prop: "leagueName",
        label: "联盟名称",
      },
      {
        type: "date",
        // subType: 'year',
        prop: "createTime",
        label: "成立时间",
        placeholder: "请选择日期",
      },
      {
        type: "select",
        prop: "type",
        label: "类型",
        options: [
          {
            label: "发起",
            value: "发起",
          },
          {
            label: "联合成立",
            value: "联合成立",
          },
        ],
      },
      {
        type: "file",
        prop: "files",
        label: "附件",
        limit: 1,
        required: false,
        action: baseurl,
        tip,
      },
      {
        type: "textarea",
        prop: "intro",
        label: "简介",
        required: false,
      },
    ],
  },
};
