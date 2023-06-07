import { configureStore } from '@reduxjs/toolkit'
import userName from './slices/UsersName.slice'
import pokemons from "./slices/pokemon.slice"
import isLoading from './slices/isLoading.slice'

export default configureStore({
  reducer: {
    userName,
    pokemons,
    isLoading
	}
})