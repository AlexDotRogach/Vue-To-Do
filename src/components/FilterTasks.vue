<template>
  <select class="chooseList" @change="changeFilter">
    <option v-for="value in values">
      <span :key="value"> {{ value }} </span>
    </option>
  </select>
</template>

<script>

export default {
  data() {
    return {
      values: {
        "all": "Все",
        "done": "В работе",
        "process": "Выполненые"
      }
    };
  },
  methods: {
    changeFilter({ target: { value } }) {
      const arr = Object.entries(this.values).filter(([, item]) => item === value)[0];
      const [chooseValue] = arr;

      this.$emit("changeFilter", chooseValue);
    }
  }

};
</script>

<style scoped>
.chooseList {
  height: 30px;
}
</style>