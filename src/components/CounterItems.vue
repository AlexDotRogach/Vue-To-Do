<template>
  <div>
    <div>
      <span>Статистика:</span>
    </div>
    <span>{{ this.items.length }}<span></span>/<span>{{ haveDoneLength }}</span></span>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array
    }
  },
  computed: {
    haveDoneLength() {
      return this.items.filter(item => item.isDone).length || 0;
    }
  }
};
</script>

<style scoped>

</style>