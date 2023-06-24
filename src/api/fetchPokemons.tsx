import { Pokemon } from "../types/types";
import { formatName } from "../utils/utils";

export const  fetchPokemon= async(): Promise <Pokemon[]>=>{
    const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");
    if(!response.ok){
        throw new Error ("Failed to fetch pokemons");
    }
    const results = await response.json( );
    console.log(results);
    const pokemons= results.results.map( (p: any) => ({
        name: p.name,
        id: p.national_number,
        imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatName(p.name.toLowerCase())}.gif`
       
    }));
     
    const uniquePokemon= pokemons.filter(
        (pokemon: any, index: number) =>
        pokemons.findIndex((other: any)=> other.id === pokemon.id) === index
    );
    return uniquePokemon;
};
    
    