//import { downloadPokemons } from "./downloadPokemons";

const pokemonsInit = [{ name: 'Здесь будет Покемон', id: getRandomIntInclusive(1, 20) }]

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//    [
// {
//   name: "bulbasaur",
//   id: "1"
// },
// {
//   name: "ivysaur",
//   id: "2"
// },
// {
//   name: "venusaur",
//   id: "3"
// },
// {
//   name: "charmander",
//   id: "4"
// },
// {
//   name: "charmeleon",
//   id: "5"
// },
// {
//   name: "charizard",
//   id: "6"
// },
// {
//   name: "squirtle",
//   id: "7"
// },
// {
//   name: "wartortle",
//   id: "8"
// },
// {
//   name: "blastoise",
//   id: "9"
// },
// {
//   name: "caterpie",
//   id: "10"
// },
// {
//   name: "metapod",
//   id: "11"
// },
// {
//   name: "butterfree",
//   id: "12"
// },
// {
//   name: "weedle",
//   id: "13"
// },
// {
//   name: "kakuna",
//   id: "14"
// },
// {
//   name: "beedrill",
//   id: "15"
// },
// {
//   name: "pidgey",
//   id: "16"
// },
// {
//   name: "pidgeotto",
//   id: "17"
// },
// {
//   name: "pidgeot",
//   id: "18"
// },
// {
//   name: "rattata",
//   id: "19"
// },
// {
//   name: "raticate",
//   id: "20"
// }
// ]
// https://pokeapi.co/api/v2/pokemon/


// downloadPokemons().then(x => {
//   console.log("1>>>>>", x);
// });

// 1. функция downloadPokemons должна возвращать проми с массивом объектов { id, name }
// 2. dispatch экшн типа DOWNLOADED_POKEMONS с этими покемонами из п.1
// 3*. https://pokeapi.co/api/v2/pokemon/?offset=45&limit=15
//     добавить пагинацию на страницу с покемонами
//     кнопки «вперед» и «назад», показываем по 12 покемонов
//     1..12   13..24   25..36
//     1 page  2 page   3 page
// https://topvisor.com/ru/api/v2/basic-params/paging/
// https://developer.box.com/guides/api-calls/pagination/offset-based/
// 


export function viewReducer(state = pokemonsInit, action) {

  if (action.type === 'DOWNLOADED_POKEMONS') {

    return action.downloadedPokemons;

  }
  return state;
}
