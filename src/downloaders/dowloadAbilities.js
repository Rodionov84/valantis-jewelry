export function downloadAbilities(id) {
  const urlAbilities = 'https://pokeapi.co/api/v2/pokemon/';

  return new Promise((resolve) => setTimeout(resolve, 2000))
    .then(() => fetch(urlAbilities + id))
    .then(response => response.json())
    .then(afterResponse => {
      const abilities = afterResponse.abilities;
      return abilities.map(ability => {
        return ability.ability.name;
      })
    })
}
