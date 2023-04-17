<template>
  <form class="form" v-on:submit.prevent="addNewItem">
    <input name="value" v-model="value"/>
    <DefaultBtn>add</DefaultBtn>
  </form>
</template>

<script>
import DefaultBtn from '@/components/UI/DefaultBtn.vue'
export default {
  components: { DefaultBtn },
  data() {
    return {
      value : ""
    }
  },
  methods: {
    addNewItem({
      target: {
        elements: {
          value: { value: newItem }
        }
      }
    }) {
      this.value = "";

      this.$emit('createItem', newItem)
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  gap: 10px;
  margin: 30px;
}
</style>
