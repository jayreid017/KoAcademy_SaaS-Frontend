<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from './api'

const message = ref('Loading...')

onMounted(async () => {
  const res = await api.get('/test')
  message.value = res.data.message
})
</script>

<template>
  <h1>{{ message }}</h1>
</template>