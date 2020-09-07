import info from './module/user/info' //个人中心
import checkIC from './module/user/checkIC'
import apply from './module/apply/index'

export const authMap = {
  "0": [
    info
  ],
  "1": [
    info,
    checkIC
  ],
  "2": [
    info,
    checkIC,
    apply([18])
  ],
  "3": [
    info,
    checkIC,
    apply([3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])
  ],
  "4": [
    info,
    checkIC,
    apply([0, 1, 3, 7, 12])
  ],
  "5": [
    info,
    checkIC,
    apply([1, 2])
  ]
}