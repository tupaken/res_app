<script setup>
import { onMounted, ref } from "vue";
import { pingBackend } from "./api/pingService";

const message = ref("loading...");

onMounted(async () => {
  const res = await pingBackend();
  message.value = res.data;
});
</script>

<template>
  <h1>Backend says: {{ message }}</h1>
</template>