const { authMap } = require('../..');
const { listAuth } = require('./info');

module.exports = {
    "name": "查看国合机构",
    "path": "/user/icCheck",
    "icon": "el-icon-s-management",
    listAuth:[1,2,3,4,5]
}