import axios from 'axios';

const api=axios.create({
    baseURL:'http://localhost:5000/api', //your Node.js server URL
});

export const getPokemonOwners=()=> api.get('/pokemon-owners');
export const addPokemonOwner=(owner) => api.post('/pokemon-owners',owner);
export const deletePokemonOwner=(id) => api.delete('/pokemon-owners/${id}');
export const updatePokemonOwner=(id,owner)=>api.put('/pokemon-owners/${id}',owner);