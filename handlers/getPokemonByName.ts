
const getPokemonByName = async (pokemon: any) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
export default getPokemonByName;