<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { anuncio, useAnuncioService } from '../api/anuncioService';
import { useUploadFile } from '../composables/useUploadURL';

const props = defineProps<{
    id: number
}> ()


const anuncioService = useAnuncioService()
const anuncio = ref({} as anuncio)
onBeforeMount(async () => anuncio.value = await anuncioService.getById(props.id))  
</script>

<template>
    <LoadingContainer :loading="anuncio.id == undefined">
      <div class="row justify-content-center">
          <div class="col-lg-8 col-sm-12">
              <div class="card mb-3">
                  <div class="row g-0">
                      <div class="col-md-4">
                          <img :src="useUploadFile(anuncio.cover.url)" class="w-100 rounded-start" alt="">
                      </div>
                      <div class="col-md-8">
                          <div class="card-body">
                              <h5 class="card-title">{{anuncio.title}}</h5>
                              <hr>
                              <div class="text-start">
                                  <p class="card-text"><strong>Preco: <small class="text-danger">{{anuncio.price}}</small></strong></p>
                              </div>
                          </div>
                      </div>
                  </div>
                  
              </div>
          </div>

          <section class="row">
            <p vfor="comment" of anuncio.comments>
                
            </p>
          </section>
      </div>
    </LoadingContainer>
    
</template>