import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const PokemonCard = ({ url }) => {

	const [data, setData] = useState({})


	useEffect(() => {
		getPokemonData()
	}, [])

	const getPokemonData = () => {
		axios
			.get(url)
			.then(resp => setData(resp.data))
			.catch(error => console.error(error))
	}

	const backgroundCard = () => {
		if (data.types?.[0].type?.name === "grass") {
			return " rgb(105, 216, 188)"
		} else if (data.types?.[0].type?.name === "flying") {
			return "rgb(39, 21, 197)"
		} else if (data.types?.[0].type?.name === "poison") {
			return "rgb(250, 187, 13)"
		} else if (data.types?.[0].type?.name === "bug") {
			return "rgb(36, 187, 44)"
		} else if (data.types?.[0].type?.name === "fire") {
			return " rgb(238, 112, 54)"
		} else if (data.types?.[0].type?.name === "ice") {
			return "rgb(6, 227, 243)"
		} else if (data.types?.[0].type?.name === "ground") {
			return "rgb(128, 116, 58)"
		} else if (data.types?.[0].type?.name === "water") {
			return "rgb(13, 211, 247)"
		} else if (data.types?.[0].type?.name === "electric") {
			return "rgb(202, 223, 17)"
		} else if (data.types?.[0].type?.name === "rock") {
			return "rgb(146, 113, 22)"
		} else if (data.types?.[0].type?.name === "steel") {
			return "rgb(114, 110, 113)"
		} else if (data.types?.[0].type?.name === "dragon") {
			return "rgb(236, 58, 58)"
		} else if (data.types?.[0].type?.name === "normal") {
			return "rgb(167, 161, 113)"
		} else if (data.types?.[0].type?.name === "fighting") {
			return " rgb(206, 187, 187)"
		} else if (data.types?.[0].type?.name === "ghost") {
			return "rgb(122, 90, 209)"
		} else if (data.types?.[0].type?.name === "psychic") {
			return "rgb(241, 149, 10)"
		} else if (data.types?.[0].type?.name === "dark") {
			return "rgb(112, 106, 106)"
		} else if (data.types?.[0].type?.name === "fairy") {
			return "rgb(173, 95, 173)"
		}
	}

	const backgroundDivision = () => {
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

	return (
		<div>
			<Link to={`/pokedex/${data.id}`}>
				<div className="pokemon-card" style={{ backgroundColor: backgroundCard() }}>
					<div className="card-division" style={{ backgroundColor: backgroundDivision() }}>
						<div className="card-central">
							<img src={data.sprites?.other.dream_world.front_default} alt="pokemon" className="card-image" />
						</div>
					</div>
					<div className="card-info">
						<div className="pokemon-name">
							<h2 style={{ color: backgroundDivision() }}>{data.name}</h2>
							<span>{data.types?.[0].type.name}</span>
							<p>Type</p>
						</div>
						<div className="pokemon-info">

							<div className="pokemon-data">
								<p>HP</p>
								<h2 style={{ color: backgroundDivision() }}>{data.stats?.[0].base_stat}</h2>
							</div>

							<div className="pokemon-data">
								<p>ATTACK</p>
								<h2 style={{ color: backgroundDivision() }}>{data.stats?.[1].base_stat}</h2>
							</div>

							<div className="pokemon-data">
								<p>DEFENSE</p>
								<h2 style={{ color: backgroundDivision() }}>{data.stats?.[2].base_stat}</h2>
							</div>

							<div className="pokemon-data">
								<p>SPEED</p>
								<h2 style={{ color: backgroundDivision() }}>{data.stats?.[5].base_stat}</h2>
							</div>

						</div>

					</div>
				</div>
			</Link>
		</div>
	);
};

export default PokemonCard;