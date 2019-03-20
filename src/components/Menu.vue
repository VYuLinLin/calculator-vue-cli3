<template>
  <main class="menu">
    <Button
      v-for="(item, i) in menus"
      :key="i"
      :bj-color="item.bjColor"
      @onClick="$emit('onClick', item.text)">
      {{ item.text }}
    </Button>
  </main>
</template>
<script>
import Button from './CalcButton'
export default {
  name: 'Menu',
  components: {
    Button
  },
  data() {
    return {
      menus: [
        { text: '存储', bjColor: '3a5278' },
        { text: '取存', bjColor: '415d84' },
        { text: '退格', bjColor: '4c5461' },
        { text: '清屏', bjColor: '4c5461' },
        { text: '累存', bjColor: '3a5278' },
        { text: '积存', bjColor: '415d84' },
        { text: '清存', bjColor: '415d84' },
        { text: '÷', bjColor: '82573f' },
        { text: '7', bjColor: '366cb7' },
        { text: '8', bjColor: '366cb7' },
        { text: '9', bjColor: '366cb7' },
        { text: '×', bjColor: '82573f' },
        { text: '4', bjColor: '366cb7' },
        { text: '5', bjColor: '366cb7' },
        { text: '6', bjColor: '366cb7' },
        { text: '-', bjColor: '82573f' },
        { text: '1', bjColor: '366cb7' },
        { text: '2', bjColor: '366cb7' },
        { text: '3', bjColor: '366cb7' },
        { text: '+', bjColor: '82573f' },
        { text: '0', bjColor: '366cb7' },
        { text: '.', bjColor: '366cb7' },
        { text: '+/-', bjColor: '366cb7' },
        { text: '=', bjColor: 'd37500' }
      ]
    }
  }
}
</script>
<style scoped>
.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
}
</style>
