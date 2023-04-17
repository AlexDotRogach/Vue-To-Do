<template>
  <div>
    <FormTask @createItem="createItem"></FormTask>
    <List :items="items" @deleteItem="deleteItem"></List>
    <notifications group="foo" />
  </div>
</template>

<script>
import { uniqueId } from 'lodash'
import { createToast } from 'mosha-vue-toastify';
import FormTask from '@/components/FormTask.vue'
import List from '@/components/List.vue'

export default {
  components: { FormTask, List },
  data() {
    return {
      items: []
    }
  },
  methods: {
    createItem(newItem) {
      if (this.isItemInItems(newItem)) {
        createToast("The same task is already exist", {toastBackgroundColor : "black"})
        return;
      }

      this.items.push({ id: uniqueId(), value: newItem })
    },

    deleteItem(id) {
      const taskIndex = this.items.findIndex((item) => item.id === id);

      createToast(`The task "${this.items[taskIndex].value}" is deleted`, {toastBackgroundColor : "black"})

      this.items.splice(
        taskIndex,
        1
      )
    },

    isItemInItems(newItem) {
      return this.items.some((item) => item.value === newItem)
    }
  }
}
</script>

<style scoped></style>
