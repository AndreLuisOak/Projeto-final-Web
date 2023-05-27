import { RouteRecordRaw, createRouter } from 'vue-router'
import anunciosHome from '../pages/anunciosHome.vue'
import AnunciosDetailsVue from '../pages/AnunciosDetails.vue'

const routes: RouteRecordRaw[] = [
  { path: "/",  component: anunciosHome},
  {path: "/anuncios/:id", component: AnunciosDetailsVue, props: true}
]

export const router = createRouter({
  routes
})