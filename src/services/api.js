import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.spacexdata.com/v5/launches'
})