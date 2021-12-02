import axios from "axios";

//URL Filmes em Cartaz
//https://api.themoviedb.org/3
// /movie/now_playing?api_key=46662014d0da58a4180424b8d451ca59&language=pt-br&page=1

export const key = '46662014d0da58a4180424b8d451ca59'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;