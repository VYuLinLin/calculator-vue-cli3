<template>
  <input class="calc-head" type="text" :value="value" disabled>
</template>
<script>
export default {
  name: 'CalcHead',
  props: {
    value: [String, Number]
  }
}
</script>
<style lang="scss" scoped>
.calc-head {
  width: 100%;
  height: 48px;
  font-size: 30px;
  text-align: right;
  box-sizing: border-box;
  padding: 0 8px;
  border-radius: 4px;
  color: #333;
  border-color: rgba(50, 58, 72, 0.8);
  &:disabled {
    background-color: #fff;
  }
}
</style>
