
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import { Pokemons, Items, Pokemon } from "./pages/index"

function App() {
  return (
  <BrowserRouter>  
    <div className="app">
      <Routes>
      <Route path='/pokemons/:name' element= {<Pokemon/>} />
      <Route path='/pokemons' element= {<Pokemons/>} />
      <Route path='/items' element= {<Items/>} />
      <Route path='/' element= {<Pokemons/>} />
      </Routes>
    </div>
    </BrowserRouter>

    //5.00 en el v4
  
  );
}

export default App;
