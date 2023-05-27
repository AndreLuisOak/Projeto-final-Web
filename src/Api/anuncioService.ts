import { api } from '../configPf'

export interface Anuncio {
  id: number,
  title: string,
  price: number,
  cover: {
    url: string
  },
  comments?:{
    description: string
  }
}


export interface AnunciosCollection {
  items: Anuncio[]
}

class AnuncioService {

  async get(): Promise<AnunciosCollection> {
    const { data } = await api.get('/anuncios', {
      params: {
        populate: ['cover']
      }
    })
    return { items: data.data }
  }

  async getById(id: number): Promise<Anuncio> {
    const { data } = await api.get(`/anuncios/${id}`, {
      params: {
        populate: ['cover', 'comments']
      }
    })
    return data.data
  }
}




export const useAnuncioService = () => new AnuncioService()