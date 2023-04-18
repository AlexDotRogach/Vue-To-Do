<template>
  <div class="dialog">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "default-dialog"
};
</script>

<style scoped>
.dialog {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, .5);
}
</style>