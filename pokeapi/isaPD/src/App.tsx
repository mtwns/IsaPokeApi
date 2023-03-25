import { useState, useEffect } from 'react'
import './App.css'
import axios,{AxiosResponse} from 'axios';
import { Searchbar } from './components/Searchbar';
import { Sidebar } from './components/Sidebar';
import PokeInfo from './components/PokeInfo';
type Pokemon={
  name?:String,
  sprites?:String[]
}

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [input, setInput] = useState('')
  const [currentPokemon, setCurrentPokemon] = useState(null)

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then((response:AxiosResponse) =>{
      const {data} = response
      console.log(data);
      setPokemons(data.results)
    })
  }, [])
  
  const getVal =(value:string) => {
    setInput(value);
  } 

  let pokemonList:any = [];

  if (!input) {
      pokemonList = pokemons;
  } else {
      if (pokemons) {
          const filteredValues = pokemons.filter((pokemon) => pokemon.name?.includes(input.toLowerCase() || ""));
          pokemonList = filteredValues;
      }
  }

  return (
    <div className="App">
      <Searchbar getVal={getVal}/>
      {pokemonList.length>0?<Sidebar setCurrentPokemon={setCurrentPokemon} pokemonList={pokemonList}/>:<></>} 
      {currentPokemon?<PokeInfo currentPokemon={currentPokemon}/>:<></>}
    </div>
  )
}

export default App