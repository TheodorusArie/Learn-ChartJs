import { FETCH_DATA,INPUT_POKEMON_DATA } from './type'
import axios from 'axios'

export const fetchData = () => {
    return async (dispatch, getState) => {
        // console.log('fetchData')
        let pokemonData = await axios({
            method: 'get',
            url: 'https://pokeapi.co/api/v2/pokemon/?limit=150',
        })
        dispatch({
            type: FETCH_DATA,
            payload: pokemonData.data.results
        })
    }
}

export const inputDataPokemon = (data) => {
    return async (dispatch, getState) => {
        for (let i = 0; i < data.length; i++) {
            let pokemonData = await axios({
                method:'get',
                url:`${data[i].url}`
            })
            dispatch({
                type: INPUT_POKEMON_DATA,
                payload:pokemonData.data
            })
        }
    }
}