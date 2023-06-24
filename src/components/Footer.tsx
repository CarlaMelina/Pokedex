import { Link } from "react-router-dom";
import PokemonPic from '../assets/pikachu.png'
import LocationPic from '../assets/pointer.png'
import BalbausurPic from '../assets/pokeball.png'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link to="/pokemons" className={styles.footerLink}>
                <img src={PokemonPic}alt="Pokeball" className={styles.footerImg}/>
                Pokemons
            </Link>
            <Link to="/items" className={styles.footerLink}>
                <img src={BalbausurPic} alt="Pokeball" className={styles.footerImg}/>
                Items
            </Link>
            <Link to="/locations" className={styles.footerLink}>
                <img src={LocationPic} alt="Pokeball" className={styles.footerImg}/>
                Map
            </Link>
            
        </footer>
    );
};

export default Footer;