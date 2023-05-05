<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
header {
  background-color: #333;
  color: white;
  padding: 1rem;
}
</style>
