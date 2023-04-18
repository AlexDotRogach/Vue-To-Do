<template>
  <div class="window">
    <span>Вы уверены что хотите удалить?</span>
    <div class="windowControls">
      <default-btn @click="closeModal" delete>Удалить</default-btn>
      <default-btn @click="closeModal">Отмена</default-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    deleteItem: {
      type: Function
    }
  },
  methods: {
    closeModal({ target }) {
      if (target.hasAttribute("delete")) {
        const idDelete = sessionStorage.getItem("ID_DELETE");

        if (idDelete) {
          this.deleteItem(idDelete);
        }
      }
      this.$emit("closeModal");
    }
  }
};
</script>

<style scoped>
.window {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 10px;
  border: 1px solid black;
  background: white;
  padding: 20px;
  box-shadow: 0px 0px 3px black;
}

.windowControls {
  display: flex;
  gap: 10px
}
</style>