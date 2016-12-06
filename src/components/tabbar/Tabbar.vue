<template>
  <div class="mint-tabbar" :class="{
      'is-fixed': fixed
    }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'rd-tabbar',
  componentName: 'rd-tabbar',
  props: {
    fixed: Boolean,
    value: {}
  },
  mounted(){
    this.$on('rd-tabItem-click', (...params) => {
      let [id] = params
      this.$parent.$emit('rd-tabItem-click', id);
    })
  }
}
</script>
<style lang="postcss">

@component tabbar {
  background-image:linear-gradient(180deg, $color-grey, $color-grey 50%, transparent 50%);
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-position: top left;
  position: relative;
  background-color: $tabbar-background-color;
  display: flex;
  position: absolute * 0 0 0;
  text-align: center;

  @when fixed {
    position: fixed * 0 0 0;
    z-index: $z-index-normal;
  }

  > .mint-tab-item.is-selected {
    background-color: $tabbar-tab-item-selected-background-color;
    color: $tabbar-tab-item-selected-color;
  }
}
</style>
