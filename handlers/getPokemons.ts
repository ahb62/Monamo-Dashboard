const gettingPokemons = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=30`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

export default gettingPokemons;