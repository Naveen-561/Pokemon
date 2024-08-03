import React, {useState,useEffect} from 'react';
import axios from 'axios';

const AddPokemonPage= () => {
    const [pokemonOwners,setPokemonOwners]=useState([]);
    const[selectedOwner,setSelectedOwner]=useState('');
    const[pokemonName,setPokemonName]=useState('');
    const[pokemonAbility,setpokemonAbility]=usestate('');
    const[initialPositionX,setIntialPositionX]=useState(0);
    const[initialPositionY,setIntialPositionY]=useState(0);
    const[speed,setSpeed]=useState(0);
    const[direction,setDirection]=useState('');

    useEffect(()=>
    {
        //Fetch pokemon owners and set state
    }, []);
    const handleAddPokemon=()=>{
        //Handle form submission to add a pokemon
    };

    return(
        <div>
        <h2>Add Pokemon</h2>
        <form onSubmit={handleAddPokemon}>
        {/*Form fields here*/}
        <button type="submit">Add Pokemon</button>
        </form>
        </div>

    );

};
export default AddPokemonPage;