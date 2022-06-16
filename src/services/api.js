import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.spacexdata.com/v5/launches'
})

export const SERVICE = {
  nextLaunch: async () => {
    try {
      const { data } = await api.get('/next')
      return [data]
    } catch (error) {
      console.error(error)   
    }
  },
  latestLaunch: async () => {
    try {
      const { data } = await api.get('/latest')
      return [data]
    } catch (error) {
      console.error(error)   
    }
  },
  pastLaunch: async () => {
    try {
      const { data } = await api.get('/past')
      return data
    } catch (error) {
      console.error(error)   
    }
  },
  upComingLaunch: async () => {
    try {
      const { data } = await api.get('/upcoming')
      return data
    } catch (error) {
      console.error(error)   
    }
  }
}
