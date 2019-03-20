/* 关键字解释
储存：将当前值存到暂存器；
取存：将暂存器的值取出；
累存：将当前值与存储器的暂存值相加，再存入暂存器；
积存：将当前值与存储器的暂存值相乘，再存入暂存器；
清存：将存储器暂存值清零。
推荐使用class,decorator
推荐使用less,scss
目标：代码规范，对模块的理解。 */

export default class CalcMath {
  constructor({total, currentValue} = {}) {
    this.total = total || 0 // 初始化累计值
    this.currentValue = currentValue || 0 // 初始化当前值
    this.regexp = /[\d|.|+|\-|×|÷]/
  }
  getCurrentValue(text) {
    this.regexp.test(text) && (this.currentValue += text.replace('+/-', '-'))
    return this.currentValue
  }
  // 加
  add(a1, a2) {
    let arg1 = Number(a1)
    let arg2 = Number(a2)
    let r1
    let r2
    let m
    let c
    try {
      r1 = (arg1 - 0).toString().split('.')[1].length
    } catch (e) {
      r1 = 0
    }
    try {
      r2 = (arg2 - 0).toString().split('.')[1].length
    } catch (e) {
      r2 = 0
    }
    c = Math.abs(r1 - r2)
    m = Math.pow(10, Math.max(r1, r2))
    if (c > 0) {
      let cm = Math.pow(10, c)
      if (r1 > r2) {
        arg1 = Number((arg1 - 0).toString().replace('.', ''))
        arg2 = Number((arg2 - 0).toString().replace('.', '')) * cm
      } else {
        arg1 = Number((arg1 - 0).toString().replace('.', '')) * cm
        arg2 = Number((arg2 - 0).toString().replace('.', ''))
      }
    } else {
      arg1 = Number((arg1 - 0).toString().replace('.', ''))
      arg2 = Number((arg2 - 0).toString().replace('.', ''))
    }
    return Number((arg1 + arg2) / m)
  }
  // 减
  sub(arg1, arg2) {
    let r1
    let r2
    let m
    let n
    try {
      r1 = (arg1 - 0).toString().split('.')[1].length
    } catch (e) {
      r1 = 0
    }
    try {
      r2 = (arg2 - 0).toString().split('.')[1].length
    } catch (e) {
      r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2))
    // 动态控制精度长度
    n = r1 >= r2 ? r1 : r2
    return Number(((arg1 * m - arg2 * m) / m).toFixed(n))
  }
  // 乘
  mul(arg1, arg2) {
    let m = 0
    let s1 = (arg1 - 0).toString()
    let s2 = (arg2 - 0).toString()
    try {
      m += s1.split('.')[1].length
    } catch (e) {}
    try {
      m += s2.split('.')[1].length
    } catch (e) {}
    return (
      Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
    )
  }
  // 除
  div(arg1, arg2) {
    let t1 = 0
    let t2 = 0
    let r1
    let r2
    try {
      t1 = (arg1 - 0).toString().split('.')[1].length
    } catch (e) {}
    try {
      t2 = (arg2 - 0).toString().split('.')[1].length
    } catch (e) {}
    r1 = Number((arg1 - 0).toString().replace('.', ''))
    r2 = Number((arg2 - 0).toString().replace('.', ''))
    return Number(r1 / r2 * Math.pow(10, t2 - t1))
  }
}
