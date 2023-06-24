import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import pokeballImg from "../assets/pokeball.png";
import Footer from "../components/Footer";
import styles from "./pokemon.module.css"
import { PokemonDetails } from "../types/types";
import { fetchPokemon } from "../api/fetchPokemon";
import LoadingScreen from "../components/LoadingScreen";
import { waitFor } from "../utils/utils";


const Pokemon = () => {
  const [isLoading, setIsLoading] = useState(false);
    const [pokemon, SetPokemon] = useState<PokemonDetails>()
    const { name } = useParams();
    const navigate = useNavigate(); //para que funcione el botton hacia atras, con navigate (-1)

    useEffect(()=>{
        async function getPokemon(){
          setIsLoading(true);
          await waitFor(500);
          const fetchedPokemon = await fetchPokemon(name as string);
          SetPokemon(fetchedPokemon)
          setIsLoading(false)
        }
        getPokemon()
    }
 , [name] )
//[name] debido a que cambia si el nombre cambia

if(isLoading|| !pokemon) return <LoadingScreen/>;

    return (
        <>
          <button
          className={styles.pokeballButton} onClick={()=> navigate(-1)}>
            <img 
            className={styles.pokeballImg}
            src={pokeballImg} 
            alt="
            Pokeball" />
            Go Back
          </button>
          <Footer/>
          <div className={styles.pokemon}>
            <main className={styles.pokemonInfo}>
<div className={styles.pokemonTitle}>{name?.toUpperCase( )}</div>
<div>Nr. {pokemon?.id}</div>
<div>
    <img 
    className={styles.pokemonImg}
    src={pokemon?.imgSrc} 
    alt="bulbasaur" />
    </div>
    <div>HP: {pokemon?.hp}</div>
    <div>Attack: {pokemon?.attack}</div>
    <div>Defense: {pokemon?.defense}</div>
            </main>
          </div>
        </>
    );
};

export default Pokemon;