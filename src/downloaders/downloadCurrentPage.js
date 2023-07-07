export function downloadCurrentPage(page, limit) {
  //const limit = 12;

  const offsetLimit = {
    offset: (page - 1) * limit,
    limit,
  }

  //const urlPokemons = 'https://pokeapi.co/api/v2/pokemon/';
  const urlPokemons = `https://pokeapi.co/api/v2/pokemon/?offset=${offsetLimit.offset}&limit=${offsetLimit.limit}`;

  return fetch(urlPokemons)
    .then(response => {
      return response.json();
    })
    .then(afterResponse => {
      const results = afterResponse.results;
      const count = afterResponse.count;
      return {
        count,
        results:
        results.map(result => {
          return {
            name: result.name,
            id: result.url.slice(34, -1),
          }
        })
      }
    })

}
