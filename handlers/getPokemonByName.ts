
const getPokemonByName = async (pokemon: any) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const data = await response.json();
<<<<<<< HEAD
    return data;
=======
    const pokemons = await data.results.map((pokemon: any) => pokemon);
    return pokemons;
>>>>>>> d8951aaf29328430d09859a2c2c29248dd4db4d0
}
export default getPokemonByName;