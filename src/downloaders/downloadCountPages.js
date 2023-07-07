export function downloadCountPages() {

    const urlPokemons = 'https://pokeapi.co/api/v2/pokemon/';

    return fetch(urlPokemons)
        .then(response => {
            return response.json();
        })
        .then(afterResponse => {
            const results = afterResponse.count;
            return results
        })
}
