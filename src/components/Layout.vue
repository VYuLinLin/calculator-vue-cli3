<template>
  <div class="layout">
    <CalcHead></CalcHead>
    <Menu></Menu>
  </div>
</template>
<script>
import CalcHead from './CalcHead'
import Menu from './Menu'

export default {
  name: 'Layout',
  components: {
    CalcHead,
    Menu
  }
}
</script>
<style lang="scss" scoped>
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
