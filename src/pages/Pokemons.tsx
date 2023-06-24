import  { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import styles from './pokemons.module.css'
import { fetchPokemon } from '../api/fetchPokemons';
import {Pokemon} from '../types/types.d';
import LoadingScreen from '../components/LoadingScreen';
import { waitFor } from "../utils/utils"

const Pokemons = () => {
     const [ isLoading, setIsLoading ] = useState(false);
    const [ query, setQuery ] = useState('')
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect( ( )=>{
      const fetchAllPokemons= async ()=>{
        setIsLoading(true);
        await waitFor(1000)
        const allPokemons = await fetchPokemon();
        setPokemons(allPokemons);
       setIsLoading(false);
      };
      fetchAllPokemons()
    }, [ ] );
    if(isLoading || !pokemons){
      return <LoadingScreen/>
    }
    const filterPokemons = pokemons?.slice(0 , 151).filter((p)=>{return p.name.toLowerCase().match(query.toLowerCase())})
    

    return (
       <>
           <Header query={query} setQuery= {setQuery}/>
            <main>
              <nav className={styles.nav}>
                {filterPokemons?.slice(0, 151).map((p)=>(
                <Link key={p.id} className={styles.listItem} to={`/pokemons/${p.name.toLowerCase()}`}>
            <img 
            className={styles.listItemIcon} 
            src={p.imgSrc} 
            alt={p.name}  />
            <div className={styles.listItemText}>
                <span>{p.name}</span>
                <span> {p.id}</span>
            </div>
          </Link>))}
                
              </nav>
           </main>
           <Footer/>
            
        </>   )
};
          

export default Pokemons;