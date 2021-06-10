<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <p>Count Value is: {{ counterValue.value }}</p>
    <button @click="selectTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  inject: ['selectTopic', 'counterValue'],
  props: ['id', 'topicName', 'description'],
};
</script>