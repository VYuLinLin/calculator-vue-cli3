<template>
  <input class="calc-head" type="number" v-model="calcValue" readonly>
</template>
<script>
export default {
  name: 'CalcHead',
  data() {
    return {
      calcValue: 0
    }
  }
}
</script>
<style lang="scss" scoped>
.calc-head {
  width: 100%;
  height: 42px;
  font-size: 30px;
  text-align: right;
  box-sizing: border-box;
  border-radius: 4px;
  border-color: rgba(50, 58, 72, 0.8);
}
</style>
