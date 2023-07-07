export function downloadPokemons1() {
    //const offset = (page - 1) * 12;
    const urlPokemons = 'https://pokeapi.co/api/v2/pokemon/';
    //const urlPokemons = `https://pokeapi.co/api/v2/pokemon/`;

    return fetch(urlPokemons)
        .then(response => response.json())
        .then(afterResponse => {
            const results = afterResponse.results;
            return results.map(result => {
                return {
                    name: result.name,
                    id: result.url.slice(34, -1),
                }
            })
        })
}
