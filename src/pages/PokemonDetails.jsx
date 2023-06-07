import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { setIsLoading } from "../store/slices/isLoading.slice"
import { useDispatch } from "react-redux";

const PokemonDetails = () => {

	const [data, setData] = useState({})
	const { id } = useParams()
	const navigate = useNavigate();
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch( setIsLoading(true) )
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
			.then(resp => setData(resp.data))
			.catch(error => console.error(error))
			.finally( () => dispatch( setIsLoading(false) ) )
	}, [id])

	const backToList = () => {
		navigate("/pokedex")
	}

	const background = () => {
		if (data.types?.[0].type?.name === "grass") {
			return "rgb(87, 177, 154)"
		} else if (data.types?.[0].type?.name === "flying") {
			return "rgb(39, 21, 197)"
		} else if (data.types?.[0].type?.name === "poison") {
			return "rgb(224, 168, 11)"
		} else if (data.types?.[0].type?.name === "bug") {
			return "rgb(32, 167, 39)"
		} else if (data.types?.[0].type?.name === "fire") {
			return " rgb(221, 104, 50)"
		} else if (data.types?.[0].type?.name === "ice") {
			return "rgb(10, 212, 226)"
		} else if (data.types?.[0].type?.name === "ground") {
			return "rgb(94, 85, 38)"
		} else if (data.types?.[0].type?.name === "water") {
			return "rgb(12, 197, 230)"
		} else if (data.types?.[0].type?.name === "electric") {
			return "rgb(185, 204, 18)"
		} else if (data.types?.[0].type?.name === "rock") {
			return "rgb(114, 88, 17)"
		} else if (data.types?.[0].type?.name === "steel") {
			return "rgb(90, 86, 89)"
		} else if (data.types?.[0].type?.name === "dragon") {
			return "rgb(196, 11, 11)"
		} else if (data.types?.[0].type?.name === "normal") {
			return "rgb(131, 127, 89)"
		} else if (data.types?.[0].type?.name === "fighting") {
			return "rgb(182, 166, 166)"
		} else if (data.types?.[0].type?.name === "ghost") {
			return "rgb(108, 73, 204)"
		} else if (data.types?.[0].type?.name === "psychic") {
			return "rgb(223, 141, 17)"
		} else if (data.types?.[0].type?.name === "dark") {
			return "rgb(90, 85, 85)"
		} else if (data.types?.[0].type?.name === "fairy") {
			return "rgb(151, 83, 151)"
		}
	}

	const statsHp = () => {
		if (data.stats?.[0].base_stat) {
			return data.stats?.[0].base_stat / 100 * 360 - 96
		}
	}

	const statsAttack = () => {
		if (data.stats?.[1].base_stat) {
			return data.stats?.[1].base_stat / 100 * 360 - 96
		}
	}

	const statsDefense = () => {
		if (data.stats?.[2].base_stat) {
			return data.stats?.[2].base_stat / 100 * 360 - 96 
		}
	}

	const statsSpeed = () => {
		if (data.stats?.[3].base_stat) {
			return data.stats?.[3].base_stat / 100 * 360 - 96
		}
	}

	return (
		<div>
			<Header />

			<button onClick={backToList} className='pokemon-detail-btn'><i className='bx bx-left-arrow-circle bx-md'></i></button>

			<div className='pokemons-details'>

				<div className='pokemonDetail-container'>

					<div className='pokemonDetail-header' style={{ backgroundColor: background() }}>
						<div className='pokemonDetail-img'>
							<img src={data.sprites?.other.dream_world.front_default} alt="" className="card-image" />
						</div>
					</div>

					<div className='pokemonDetail-info'>
						<div className='pokemons-id'  style={{ color: background() }}>
							<p>#{data.id}</p>
						</div>

						<div className='pokemons-name' style={{ color: background() }}>
							<p className='pokemons-name-p'>{data.name}</p>
						</div>

						<div className='pokemons-wh'>
							<div className='pokemons-w'>
								<p className='pokemons-wh-title'>WEIGHT</p>
								<p className='pokemons-wh-data'>{data.weight}</p>
							</div>
							<div className='pokemons-h'>
								<p className='pokemons-wh-title'>HEIGHT</p>
								<p className='pokemons-wh-data'>{data.height}</p>
							</div>
						</div>

						<div className='pokemons-th-container'>
							<div className='pokemons-th'>
								<div className='pokemons-type'>
									<p className='pokemons-type-title'>Type</p>
									<div className='pokemons-type-data'>
										<p className='type-one' style={{ backgroundColor: background() }}>{data.types?.[0].type.name}</p>
										<p className='type-two' style={{ backgroundColor: background() }}>{data.types?.[1]?.type.name}</p>
									</div>
								</div>
								<div className='pokemons-Ability'>
									<p className='pokemons-type-title'>Abilities</p>
									<div className='pokemons-type-data'>
										<p className='ability-one'>{data.abilities?.[0]?.ability.name}</p>
										<p className='ability-two'>{data.abilities?.[1]?.ability.name}</p>
									</div>
								</div>
							</div>
						</div>

					</div>

					<div className='pokemonDetail-stats'>
						<h2>Stats</h2>
						<div className='stats-container'>

							<div className='stats'>
								<p><span>HP</span>{data.stats?.[0].base_stat}/150</p>
								<div className='bar'>
									<div className='progress hp' style={{ width: statsHp() }}></div>
								</div>
							</div>

							<div className='stats'>
								<p><span>Attack</span>{data.stats?.[1].base_stat}/150</p>
								<div className='bar'>
									<div className='progress attack' style={{ width : statsAttack() }}  ></div>
								</div>
							</div>

							<div className='stats'>
								<p><span>Defense</span>{data.stats?.[2].base_stat}/150</p>
								<div className='bar'>
									<div className='progress defense' style={{ width: statsDefense() }}></div>
								</div>
							</div>

							<div className='stats'>
								<p><span>Speed</span>{data.stats?.[3].base_stat}/150</p>
								<div className='bar'>
									<div className='progress speed' style={{ width: statsSpeed() }}></div>
								</div>

							</div>
						</div>
					</div>

				</div>

				<div className='movements-container'>
					<h2 className='movements-title'>Movements</h2>
					<div className='movements'>
						<p className='moves'>{data.moves?.[0]?.move.name}</p>
						<p className='moves'>{data.moves?.[1]?.move.name}</p>
						<p className='moves'>{data.moves?.[2]?.move.name}</p>
						<p className='moves'>{data.moves?.[3]?.move.name}</p>
						<p className='moves'>{data.moves?.[4]?.move.name}</p>
						<p className='moves'>{data.moves?.[5]?.move.name}</p>
						<p className='moves'>{data.moves?.[6]?.move.name}</p>
						<p className='moves'>{data.moves?.[7]?.move.name}</p>
						<p className='moves'>{data.moves?.[8]?.move.name}</p>
						<p className='moves'>{data.moves?.[9]?.move.name}</p>
						<p className='moves'>{data.moves?.[10]?.move.name}</p>
						<p className='moves'>{data.moves?.[11]?.move.name}</p>
						<p className='moves'>{data.moves?.[12]?.move.name}</p>
						<p className='moves'>{data.moves?.[13]?.move.name}</p>
						<p className='moves'>{data.moves?.[14]?.move.name}</p>
						<p className='moves'>{data.moves?.[15]?.move.name}</p>
						<p className='moves'>{data.moves?.[16]?.move.name}</p>
					</div>
				</div>
			</div>


		</div>
	);
};

export default PokemonDetails;