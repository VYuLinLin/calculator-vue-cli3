<template>
  <button class="calc-button" @click="$emit('onClick')" :style="styles">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'CalcButton',
  props: {
    bjColor: ''
  },
  computed: {
    styles() {
      return `background-color: #${this.bjColor}`
    }
  }
}
</script>
<style scoped>
.calc-button {
  color: #fff;
  width: 78px;
  height: 32px;
  border-radius: 4px;
  border-color: rgba(50, 58, 72, 0.8);
  margin-top: 8px;
}
</style>
