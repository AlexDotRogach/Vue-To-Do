<template>
  <ul class="list" v-for="item of items">
    <ListItem :item="item" @deleteItem="deleteItem" />
  </ul>
</template>

<script>
import ListItem from '@/components/ListItem.vue'
export default {
  components: { ListItem },
  props: {
    items: {
      type: Array
    }
  },
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id)
    }
  }
}
</script>

<style scoped>
.list {
  list-style: none;
}

.list li {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  max-width: 250px;
  padding: 10px 0;
}
</style>
