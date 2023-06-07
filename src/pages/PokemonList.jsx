import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import Header from "../components/Header";
import Pagination from "../components/Pagination"
import { getPokemonsThunk, filterPokemonsThunk } from "../store/slices/pokemon.slice";


const PokemonList = () => {

  const dispatch = useDispatch()
  const userName = useSelector(state => state.userName)
  const pokemonsList = useSelector(state => state.pokemons)
  const [types, setTypes] = useState({})
  const navigate = useNavigate()
  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonsPerPage, setPokemonsPerPage] = useState(20)
  const indexOfLastPokemon = currentPage * pokemonsPerPage


  useEffect(() => {
    dispatch(getPokemonsThunk())

    axios
      .get(`https://pokeapi.co/api/v2/type/`)
      .then(resp => {
        setTypes(resp.data)
      })
      .catch(error => console.error(error))
  }, [])
 
    let pokemons
    let pokemonsCount
   const route = () => {
     if (pokemonsList?.results) {
       pokemons = pokemonsList?.results
       pokemonsCount = pokemonsList?.count
     } else {
       pokemons = pokemonsList?.pokemon
       pokemonsCount = pokemonsList?.pokemon?.length
     }
   }
   route() 

   /* Pagination */
   const totalPages = Math.ceil( pokemonsCount / pokemonsPerPage )
   const currentPokemons = pokemons?.slice( indexOfLastPokemon - pokemonsPerPage , indexOfLastPokemon)
   const arrPages = []
   const pages = () => {
    for (let i = 1; i <= totalPages; i++) {
      arrPages.push(i)
    }
   }
   pages()

   let show
   const showPages = () => {
    if (totalPages > 10) {
      if (currentPage > totalPages - 5) {
        show = arrPages.slice( totalPages - 10, totalPages )
      } else if (currentPage > 5) {
        show =  arrPages.slice( currentPage - 5, currentPage + 5)
      } else {
        show =  arrPages.slice( 0, 10 )
      }
    } else {
      show =  arrPages.slice( 0, totalPages )
    }
   }
  showPages()


  return (
    <>
    <Header />
    
    <div className="pokemons-list">

      <div className="welcome">
        <p className="welcome-sms">
          <span className="welcome-name">Welcome {userName}, </span> here you can find your favorite pokemon.
        </p>
      </div>

      <div className="search">

        <div className="pokemon-search">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by Name"
            className="search-input"
            id="search-by-name"
            name="sbn"
            autoComplete="sbn"
            />
          <button onClick={() => navigate(`/pokedex/${search}`)} className="search-btn">Search</button>
        </div>

        <div className="search-type">
          <select name="" id="" onChange={ e => {
            dispatch( filterPokemonsThunk(e.target.value))
            setCurrentPage(1)
          }} className="search-select">
            <option value="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1281">AllPokemons</option>
            {
              types.results?.map(( type) => (
                <option value={type.name} key={type.url}> {type.name} </option>
                ))
              }
          </select>
        </div>

      </div>

      <div className="pokemoncard-container">
        {
          currentPokemons?.map( pokemon => (
            <PokemonCard
            key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            />
            ))
          }
      </div>

      <div className="page-container">
          {
            show.map( (num) => (
              <Pagination
              setCurrentPage={ setCurrentPage } 
              num={ num }
              key={ num }
              />
              ) )
            }
      </div>

    </div>
    </>
  );
 
};

export default PokemonList;