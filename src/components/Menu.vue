<template>
  <main class="menu">
    <Button 
      v-for="(item, i) in menus"
      :key="i"
      :bj-color="item.bjColor"
      @onClick="fn(item.fn)">
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
        { text: '存储', bjColor: '3a5278', fn: 'add' },
        { text: '取存', bjColor: '415d84', fn: 'add' },
        { text: '退格', bjColor: '4c5461', fn: 'add' },
        { text: '清屏', bjColor: '4c5461', fn: 'add' },
        { text: '累存', bjColor: '3a5278', fn: 'add' },
        { text: '积存', bjColor: '415d84', fn: 'add' },
        { text: '清存', bjColor: '415d84', fn: 'add' },
        { text: '÷', bjColor: '82573f', fn: 'add' },
        { text: '7', bjColor: '366cb7', fn: 'add' },
        { text: '8', bjColor: '366cb7', fn: 'add' },
        { text: '9', bjColor: '366cb7', fn: 'add' },
        { text: '×', bjColor: '82573f', fn: 'add' },
        { text: '4', bjColor: '366cb7', fn: 'add' },
        { text: '5', bjColor: '366cb7', fn: 'add' },
        { text: '6', bjColor: '366cb7', fn: 'add' },
        { text: '-', bjColor: '82573f', fn: 'add' },
        { text: '1', bjColor: '366cb7', fn: 'add' },
        { text: '2', bjColor: '366cb7', fn: 'add' },
        { text: '3', bjColor: '366cb7', fn: 'add' },
        { text: '+', bjColor: '82573f', fn: 'add' },
        { text: '0', bjColor: '366cb7', fn: 'add' },
        { text: '.', bjColor: '366cb7', fn: 'add' },
        { text: '+/-', bjColor: '366cb7', fn: 'add' },
        { text: '＝', bjColor: 'd37500', fn: 'add' }
      ]
    }
  },
  methods: {
    fn(name) {
      if (!name) return
      typeof this[name] === 'function' && this[name]()
    },
    add(a) {
      console.log(a)
    }
  }
}
</script>
<style lang="scss" scoped>
.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
}
</style>
