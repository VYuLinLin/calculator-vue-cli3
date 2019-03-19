import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
// 关键字解释
// 储存：将当前值存到暂存器；
// 取存：将暂存器的值取出；
// 累存：将当前值与存储器的暂存值相加，再存入暂存器；
// 积存：将当前值与存储器的暂存值相乘，再存入暂存器；
// 清存：将存储器暂存值清零。
// 推荐使用class,decorator
// 推荐使用less,scss
// 目标：代码规范，对模块的理解。