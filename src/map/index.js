import info from './module/user/info' //个人中心
import checkIC from './module/user/checkIC'
import apply from './module/apply/index'
import statistics from './module/statistics/index'
export const authMap = {
  "0": [
    info
  ],
  "1": [
    info,
    checkIC ,
    statistics([0,1,20,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19])
  ],
  "2": [
    info,
    checkIC,
    apply([18]),
    statistics([0,1,20,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19])
  ],
  "3": [
    info,
    checkIC,
    apply([3,20, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
    statistics([0,1,20,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18])
  ],
  "4": [
    info,
    checkIC,
    apply([0, 1, 3,20, 7, 12])
  ],
  "5": [
    info,
    checkIC,
    apply([1, 2])
  ]
}