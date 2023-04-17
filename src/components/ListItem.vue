<template>
  <li class="item">
    <span :key="item.id">{{ item.value }}</span
    ><DefaultBtn @click="deleteItem">delete</DefaultBtn>
  </li>
</template>

<script>
import DefaultBtn from '@/components/UI/DefaultBtn.vue'
export default {
  components: { DefaultBtn },
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    deleteItem() {
      const {
        item: { id }
      } = this.$props

      this.$emit('deleteItem', id)
    }
  }
}
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;

  border-top: 1px solid black;
  border-bottom: 1px solid black;

  max-width: 250px;
  padding: 10px 0;
}
</style>
