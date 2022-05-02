import './App.css';
import Inicio from './component/Inicio.jsx'
import {Route} from 'react-router-dom'
import { useState } from 'react';
import Cards from './component/Cards';



async function App() {
  const [pokemon, setPokemon] = useState([])

  await fetch('http://localhost:3001/pokemons')
  .then(data => data.json())
  .then(data => {
    if(data.name){
      const pokemones = {
        img: data.img,
        name: data.name,
        tipos: data.types
      }
      setPokemon(onPokemon => [...onPokemon, pokemones])
      console.log(pokemon)
    }
  })
  return (
    <div className="App">
      <Route exact path='/' component={Inicio}></Route>
      <Route path='/inicio'>
        <Cards arr={pokemon}/>
      </Route>
    </div>
  );
}

export default App;