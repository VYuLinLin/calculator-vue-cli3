<template>
  <div class="layout">
    <CalcHead v-model="calcValue"></CalcHead>
    <Menu @onClick="clickBtn"></Menu>
  </div>
</template>
<script>
import CalcHead from './CalcHead'
import Menu from './Menu'
import CalcMath from '../assets/js/math.js'
let math = new CalcMath()

export default {
  name: 'Layout',
  components: {
    CalcHead,
    Menu
  },
  data() {
    return {
      calcValue: '0'
    }
  },
  methods: {
    clickBtn(text) {
      this.calcValue = math.getCurrentValue(text)
    }
  }
}
</script>
<style scoped>
.layout {
  background-color: #767f8a;
  border-radius: 4px;
  width: 370px;
  height: 350px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 10px;
}
</style>
