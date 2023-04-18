<template>
  <li :key="item.id" :class="[{show : item.isDone}, 'item']" ref="itemRef">
    <span class="itemText">{{ item.value }}</span
    >
    <div class="actionElement">
      <default-btn @click="openModal">delete</default-btn>
      <input name="check" type="checkbox" :checked="item.isDone" @change="changeState" />
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    deleteItem() {
      const {
        item: { id }
      } = this.$props;

      this.$emit("deleteItem", id);
    },
    changeState() {
      this.$emit("changeDone", this.item.id);
    },
    openModal() {
      this.$emit("openModal", this.item.id);
    }
  }
};
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid black;
  border-bottom: 1px solid black;

  max-width: 250px;
  padding: 10px;
}

.actionElement {
  display: flex;
  gap: 5px
}

.show {
  background: green;
}
</style>
