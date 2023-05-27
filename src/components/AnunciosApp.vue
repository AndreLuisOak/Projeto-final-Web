<script setup lang="ts">
import { anuncio } from '../api/anuncioService';
import { useUploadFile } from '../composables/useUploadURL';

defineProps<Anucio>()

</script>

<template>
  <div class="card shadow-sm">
    <img :src="useUploadFile(cover.url)">
    <div class="card-body">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-text">Price: {{ price }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <router-link :to="`/mangas/${anuncio.id}`" class="btn btn-sm btn-outline-secondary">View</router-link>
          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
          <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
        </div>
        <small class="text-body-secondary">9 mins</small>
      </div>
    </div>
  </div>
</template>