import axios,{AxiosResponse} from 'axios';
type Pokemon ={
    name:string,
    url:string
}

export const Sidebar = (props:any) => {
    const handleSelection = (pokemon:Pokemon) => {
        props.setCurrentPokemon(pokemon)
    }
    console.log(props);

    return(
        <div className="sidebar">
            <h2>POKEMONES</h2>
            <ul>
                <span>
                {
                    props.pokemonList.map((pokemon:Pokemon)=>(<button onClick={()=>handleSelection(pokemon)}><li>{pokemon.name}</li></button>))
                }
                </span>
            </ul>
        </div>
    );
}