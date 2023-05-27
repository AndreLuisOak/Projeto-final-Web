<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router';
import { useAnuncioService, AnuncioCollection } from '../api/AnuncioService'
import AnunciosApp from '../components/AnunciosApp.vue'

const anuncioService = useAnuncioService()
const anuncioCollection = ref({} as AnuncioCollection)
const anuncios = computed(() => anuncioCollection.value.items)

const route = useRoute()
const curretPage = route.query ? route.query.page : 1

onMounted(async () => {
  anuncioCollection.value = await anuncioService.get(curretPage)
})
</script>

<template>
   <div class="album py-5 bg-body-tertiary">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col" v-for="anuncio in anuncios">
          <AnunciosApp :id="anuncio.id" :title="anuncio.title" :price="anuncio.price" :cover="anuncio.cover"></AnunciosApp> 
        </div>

      </div>
    </div>
  </div>
</template>