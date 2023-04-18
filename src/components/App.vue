<template>
  <div>
    <div class="mainControl">
      <CounterItems :items="items"></CounterItems>
      <FormTask @createItem="createItem"></FormTask>
      <FilterTasks @changeFilter="changeFilter"></FilterTasks>
      <default-dialog v-if="isDialog">
        <WindowDelete @closeModal="toggleModal" :deleteItem="deleteItem"></WindowDelete>
      </default-dialog>
    </div>
    <List :items="filterItems" @deleteItem="deleteItem" @changeDone="changeDone" @openModal="toggleModal"></List>
    <notifications group="foo" />
  </div>
</template>

<script>
import { uniqueId } from "lodash";
import { createToast } from "mosha-vue-toastify";
import FormTask from "@/components/FormTask.vue";
import List from "@/components/ListItems.vue";
import FilterTasks from "@/components/FilterTasks.vue";
import WindowDelete from "@/components/WindowDelete.vue";
import CounterItems from "@/components/CounterItems.vue";

export default {
  components: { CounterItems, WindowDelete, FormTask, List, FilterTasks },
  data() {
    return {
      items: [],
      filterItems: [],
      filter: "all",
      isDialog: false
    };
  },
  methods: {
    createItem(newItem) {
      if (this.isItemInItems(newItem)) {
        createToast("The same task is already exist", { toastBackgroundColor: "black" });
        return;
      }

      this.items = [...this.items, { id: uniqueId(), value: newItem, isDone: false }];
    },

    deleteItem(id) {
      createToast(`The task is deleted`, { toastBackgroundColor: "black" });

      this.items = this.items.filter(item => item.id !== id);
    },

    changeDone(id) {
      const itemIndex = this.items.findIndex(item => item.id === id);

      this.items[itemIndex] = { ...this.items[itemIndex], isDone: !this.items[itemIndex].isDone };
    },

    changeFilter(value) {
      this.filter = value;
    },

    isItemInItems(newItem) {
      return this.items.some((item) => item.value === newItem);
    },

    updateDataByFilter() {
      switch (this.filter) {
        case "all":
          this.filterItems = [...this.items];
          break;
        case "done":
          this.filterItems = [...this.items.filter(item => !item.isDone)];
          break;
        case "process":
          this.filterItems = [...this.items.filter(item => item.isDone)];
          break;
      }
    },
    toggleModal(id) {
      this.isDialog = !this.isDialog;

      if (this.isDialog) {
        sessionStorage.setItem("ID_DELETE", id);
      }
    }
  },
  watch: {
    filter() {
      this.updateDataByFilter();
    },
    items: {
      handler() {
        this.updateDataByFilter();
      },
      deep: true
    }
  }
};
</script>

<style scoped>
.mainControl {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px;
}
</style>
