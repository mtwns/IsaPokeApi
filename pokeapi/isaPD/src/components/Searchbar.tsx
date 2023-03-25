import {useState} from 'react'
// import axios,{AxiosResponse} from 'axios';
type Pokemon={
    name?:String,
    sprites?:String[]
}
export const Searchbar = (props:any) => {
    // export const Searchbar = (props: { pokemons: Pokemon[] }) => {
    
    const [pokemon, setPokemon] = useState<Pokemon>({})
    const handleChangeName = (event:any) => {
        console.log(event.target.value);
        props.getVal(event.target.value.toLowerCase())
    }
    
    const handleQueryButton = () =>{
        console.log(props)
    }

    const handleSubmit = (event:any) =>{
        event.preventDefault()
    }

  return (
    <div>
        <div className="SearchBar">
            <form action="" method="get" onSubmit={(event)=>handleSubmit(event)}>
                <input className="InputBar" type="text" name="searchbar"
                placeholder='Introduce name' onChange={(event)=>handleChangeName(event)}/>
                <label htmlFor="searchbar"></label>
                {/* <button id="SearchButton" onClick={handleQueryButton}>
                    SEARCH
                </button> */}
            </form>
        </div>
    </div>
  )
}
