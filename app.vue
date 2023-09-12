<script setup lang="ts">
/*
  1. We don't get auto completion for API endpoint with custom fetch
  2. Type error when defining default value for data
*/
const { data } = await useCustomFetch<Record<string, any>>('/hello', {
  default: () => {},
})
</script>

<template>
  <div>
    {{ data }}
  </div>
</template>
