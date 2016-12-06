<template>
  <a class="mint-tab-item"
    @click="clickTabItem"
    :class="{ 'is-selected': $parent.value === id }">
    <div v-if="$parent.value == id" class="mint-tab-item-icon">
      <slot name="iconActive"></slot>
    </div>
    <div v-else class="mint-tab-item-icon">
      <slot name="icon"></slot>
    </div>
    <div class="mint-tab-item-label"><slot></slot></div>
  </a>
</template>

<script>
  import emitter from '../../mixins/emitter'
  export default {
    name: 'rd-tab-item',
    componentName: 'rd-tab-item',
    props: ['id'],
    mixins: [emitter],
    methods:{
      clickTabItem: function() {
         this.dispatch('rd-tabbar', 'rd-tabItem-click', this.id);
        // this.$parent.$emit('input', this.id)
      }
    }
  };
</script>

<style lang="postcss">

  @component-namespace mint {
    @component tab-item {
      display: block;
      padding: 7px 0;
      flex: 1;
      text-decoration: none;

      @descendent icon {
        size: 24px;
        margin: 0 auto 5px;

        &:empty {
          display: none;
        }

        & > * {
          display: block;
          size: 100%;
        }
      }

      @descendent label {
        color: inherit;
        font-size: $tab-item-font-size;
        line-height: 1;
      }
    }
  }
</style>
