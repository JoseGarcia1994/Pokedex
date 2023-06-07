import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from "./isLoading.slice"

export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState: [],
    reducers: {
        setPokemons : ( state, action ) => {
            return action.payload
        }
    }
})

export const { setPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;

export const getPokemonsThunk = () => dispatch => {
    dispatch( setIsLoading(true))

    axios
        .get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1281`)
        .then( resp => dispatch( setPokemons( resp.data ) ) )
        .catch( error => console.error(error))
        .finally( () => dispatch( setIsLoading(false) ) )

}

export const filterPokemonsThunk = name => dispatch => {
    dispatch( setIsLoading(true))

    axios
        .get(`https://pokeapi.co/api/v2/type/${name}/`)
        .then( resp => {
            dispatch( setPokemons( resp.data ) )
        } )
        .catch( error => console.error(error))
        .finally( () => dispatch( setIsLoading(false) ) )

} 


