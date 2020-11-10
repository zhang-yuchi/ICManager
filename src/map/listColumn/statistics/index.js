const teacherBoard = require('./column/teacherBoard')
const overseasExpertExchange = require('./column/overseasExpertExchange')
const overseasExpertExchangeShort = require('./column/overseasExpertExchangeShort')
const internationPublication = require('./column/internationPublication')
const overseasExpertPartTime = require('./column/overseasExpertPartTime')
const overseasExpertPrize = require('./column/overseasExpertPrize')
const sutdentBoard = require('./column/sutdentBoard')
const internationStudentEducation = require('./column/internationStudentEducation')
const internationCourse = require('./column/internationCourse')
const overseasEducation = require('./column/overseasEducation')
const studentExchange = require('./column/studentExchange')
const internationResearch = require('./column/internationResearch')
const internationResult = require('./column/internationResult')
const internationArea = require('./column/internationArea')
const advancedExpert = require('./column/advancedExpert')
const advancedProjectImport = require('./column/advancedProjectImport')
const internationResearchMeeting = require('./column/internationResearchMeeting')
const internationGuarantee = require('./column/internationGuarantee')
const overseasTreaty = require('./column/overseasTreaty')
const interationAlly = require('./column/interationAlly')
//------
const tableSechma = require('../../../schema/table')
const columnSechma = require("../../../schema/column")

const { reflectSchema } = require('../../../utils')
let table = {
  'teacher-board': fixColumn(teacherBoard),//教师出国交流信息汇总
  'overseas-expert-exchange':fixColumn(overseasExpertExchange),//国外专家来校交流汇总 长期
  'overseas-expert-exchange-short':fixColumn(overseasExpertExchangeShort),//国外专家来校交流汇总 短期
  'internation-publication':fixColumn(internationPublication),//国际组织刊物任职汇总
  'overseas-expert-part-time':fixColumn(overseasExpertPartTime),//国外专家兼职汇总
  'overseas-expert-prize':fixColumn(overseasExpertPrize),//国外专家获奖汇总
  'student-board':fixColumn(sutdentBoard),//在校生出国交流汇总
  'internation-student-education':fixColumn(internationStudentEducation),//国际学生及港澳台学生教育汇总
  'open-internation-course':fixColumn(internationCourse),//国际化课程汇总
  'overseas-education':fixColumn(overseasEducation),//中外合作办学汇总
  'student-exchange':fixColumn(studentExchange),//学生交流项目汇总
  'internation-research':fixColumn(internationResearch),//国际联合科研平台汇总
  'internation-result':fixColumn(internationResult),//国际联合科研平台汇总
  'internation-area':fixColumn(internationArea),//国别与区域研究中心汇总
  'advanced-expert':fixColumn(advancedExpert),//高端专家引进计划汇总
  'advanced-project-import':fixColumn(advancedProjectImport),//引智平台项目汇总
  'internation-research-meeting':fixColumn(internationResearchMeeting),//国际组织刊物任职汇总
  'internation-guarantee':fixColumn(internationGuarantee),//国际化保障及办学特色汇总
  'overseas-treaty':fixColumn(overseasTreaty),//交流合作汇总
  'interation-ally':fixColumn(interationAlly),//国际联盟汇总
}
//对table进行增强
function tableProxy(table){
  table = schemaReflect(table)
  return table
}
//增加后端字段映射
function schemaReflect(table){
  Object.keys(table).map(item=>{
    table[item].backendTableName = tableSechma[item]
  })
  return table
}
//增强每列属性
function fixColumn(columns){
  let column = columns.column
  const noQueryArr = ['files','intro','period','reason','lastTime','passTime'] 
  const timeArr = ['passTime','createTime','time']
  columns.column = column.map(item=>{
    // if(columnSechma[item.prop]){
    //   //若存在相应映射关系则改变该字段为Oracle映射字段
    //   item.prop = columnSechma[item.prop]
    // }
    if(noQueryArr.findIndex(elem=>{
      return item.prop==elem
    })!==-1){
      item.noQuery = true
    }
    if(timeArr.findIndex(elem=>{
      return item.prop==elem
    })!==-1){
      item.type = 'time'
    }
    return item
  })
  columns.column = reflectSchema(columns,columnSechma)
  console.log(columns);
  return columns
}
module.exports = tableProxy(table)