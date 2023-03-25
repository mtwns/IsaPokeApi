import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokeInfo = (props:any) => {
  const [choicedPokemon, setChoicedPokemon] = useState<any>({});

  useEffect(() => {
    axios.get(props.currentPokemon.url)
      .then((response: any) => setChoicedPokemon(response.data))
      .catch((error: Error) => console.log(error));
  }, [props.currentPokemon.url]);
  
  return (
    <div className="poke-info">
      <h2 className="poke-name">{choicedPokemon.name}</h2>
      <div className="sprites">
        <img src={choicedPokemon.sprites?.front_default} alt="front_default" />
        <img src={choicedPokemon.sprites?.back_default} alt="back_default" />
        <img src={choicedPokemon.sprites?.front_shiny} alt="front_shiny" />
        <img src={choicedPokemon.sprites?.back_shiny} alt="back_shiny" />
      </div>
      <div className="stats">
        <h3>Stats:</h3>
        <ul>
          {choicedPokemon.stats?.map((stat: any) => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
      <div className="abilities">
        <h3>Abilities:</h3>
        <ul>
          {choicedPokemon.abilities?.map((ability: any) => (
            <li key={ability.ability.name}>
              {ability.ability.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="type-container">
        <span className="type">{choicedPokemon.types?.[0].type.name}</span>
      </div>
    </div>
  )
}

export default PokeInfo;
