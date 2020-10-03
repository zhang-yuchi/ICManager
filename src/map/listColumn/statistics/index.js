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
module.exports = {
  'teacher-board': fixColumn(teacherBoard),//教师出国交流信息汇总
  'overseas-expert-exchange':fixColumn(overseasExpertExchange),//国外专家来校交流汇总 长期
  'overseas-expert-exchange-short':fixColumn(overseasExpertExchangeShort),//国外专家来校交流汇总 短期
  'internation-publication':fixColumn(internationPublication),
  'overseas-expert-part-time':fixColumn(overseasExpertPartTime),
  'overseas-expert-prize':fixColumn(overseasExpertPrize),
  'student-board':fixColumn(sutdentBoard),
  'internation-student-education':fixColumn(internationStudentEducation),
  'internation-course':fixColumn(internationCourse),
  'overseas-education':fixColumn(overseasEducation),
  'student-exchange':fixColumn(studentExchange),
  'internation-research':fixColumn(internationResearch),
  'internation-result':fixColumn(internationResult),
  'internation-area':fixColumn(internationArea),
  'advanced-expert':fixColumn(advancedExpert),
  'advanced-project-import':fixColumn(advancedProjectImport),
  'internation-research-meeting':fixColumn(internationResearchMeeting),
  'internation-guarantee':fixColumn(internationGuarantee),
  'overseas-treaty':fixColumn(overseasTreaty)
}
function fixColumn(columns){
  let column = columns.column
  const noQueryArr = ['files','intro','period','reason','lastTime','passTime']
  const timeArr = ['passTime','createTime','time']
  column = columns.column
  // console.log(column);
  column.map(item=>{
    console.log(item);
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
  return columns
}