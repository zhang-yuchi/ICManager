const teacherBoard = require('./column/teacherBoard')
const overseasExpertExchange = require('./column/overseasExpertExchange')
const overseasExpertExchangeShort = require('./column/overseasExpertExchangeShort')
const internationPublication = require('./column/internationPublication')
const overseasExpertPartTime = require('./column/overseasExpertPartTime')
const overseasExpertPrize = require('./column/overseasExpertPrize')
const sutdentBoard = require('./column/sutdentBoard')
const internationStudentEducation = require('./column/internationStudentEducation')
const internationCourse = require('./column/internationCourse')
module.exports = {
  'teacher-board': fixColumn(teacherBoard),//教师出国交流信息汇总
  'overseas-expert-exchange':fixColumn(overseasExpertExchange),//国外专家来校交流汇总 长期
  'overseas-expert-exchange-short':fixColumn(overseasExpertExchangeShort),//国外专家来校交流汇总 短期
  'internation-publication':fixColumn(internationPublication),
  'overseas-expert-part-time':fixColumn(overseasExpertPartTime),
  'overseas-expert-prize':fixColumn(overseasExpertPrize),
  'student-board':fixColumn(sutdentBoard),
  'internation-student-education':fixColumn(internationStudentEducation),
  'internation-course':fixColumn(internationCourse)
}
function fixColumn(columns){
  let column = columns.column
  const noQueryArr = ['files','intro','period','reason','lastTime']
  column = columns.column
  // console.log(column);
  column.map(item=>{
    console.log(item);
    if(noQueryArr.findIndex(elem=>{
      return item.prop==elem
    })!==-1){
      item.noQuery = true
    }
    return item
  })
  return columns
}