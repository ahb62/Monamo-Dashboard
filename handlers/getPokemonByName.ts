
const getPokemonByName = async (pokemon: any) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const data = await response.json();
    const pokemons = await data.results.map((pokemon: any) => pokemon);
    return pokemons;
}
export default getPokemonByName;