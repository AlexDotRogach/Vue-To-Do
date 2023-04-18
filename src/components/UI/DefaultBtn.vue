<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
  name : "default-btn"
}
</script>

<style scoped>
.btn {
  outline: none;
  border: none;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}
</style>
