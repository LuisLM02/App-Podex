import './sass/styles.scss';
import { getPokemons } from './ts/getPokemons';

document.addEventListener("DOMContentLoaded", (e)=>{
  getPokemons('.cardPokemon', '.busqueda', '.btn-buscar');
})