import axios from "axios"

const key = "9da5f35756174161a9e943df4d83ce31"
const axiosCreate = axios.create({
    baseURL: 'https://api.rawg.io/api'
})

const getGenreList = axiosCreate.get('/genres?key='+key);
const getAllGames = axiosCreate.get('/games?key='+key);

export default{
    getGenreList,
    getAllGames
}

