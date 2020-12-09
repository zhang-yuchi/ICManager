let config = require('../../../network/config');
const baseurl = config.upFileUrl;
// const tip = '只能上传 doc，docx，pdf，png，jpg 文件，且不超过500kb'
const tip = "";

module.exports = {
  fill: {
    request: "deductionitem",
    title: "扣分项填写",
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
        type: "radio",
        prop: "type",
        label: "类型",
        options: [
          {
            label:
              "1、未经允许随意改变出访行程或者超出出访规定时间等违反学校因公出国（境）管理规定",
            value: '1',
          },
          {
            label: "2、违反有关学生出国（境）以及所参加出国项目相关管理规定",
            value: '2',
          },
          {
            label:
              "3、违反留学生、港澳台生管理规定并受到严重警告（含严重警告）以上处分",
            value: '3',
          },
          {
            label:
              "4、国（境）外专家违反学校《国（境）外专家管理暂行办法》及国家法律的相关规定",
            value: '4',
          },
        ],
      },
      {
        type: "file",
        prop: "files",
        label: "附件",
        limit: 3,
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
};
