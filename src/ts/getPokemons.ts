export function getPokemons(display:string, input:string, btn:string){
  const $display:Element = document.querySelector(display),
    $busqueda:HTMLFormElement = document.querySelector(input),
    $btnBuscar:Element = document.querySelector(btn);

  async function getPokemons(busqueda:string){
    try {
      let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`);
      let json = await respuesta.json();

      if(!respuesta.ok) throw {status: respuesta.status, statusText: respuesta.statusText};
        
      $display.classList.remove('none');
      $display.querySelector('.pokeimagen').setAttribute('src', json.sprites.front_default);
      $display.querySelector('.nombre').textContent = json.name;
      $display.querySelector('.id').textContent = json.id;
      $display.querySelector('.vida').textContent = json.stats[0].base_stat;
      $display.querySelector('.ataque').textContent = json.stats[1].base_stat;
      $display.querySelector('.defensa').textContent = json.stats[2].base_stat;
      $display.querySelector('.ataque-especial').textContent = json.stats[3].base_stat;
      $display.querySelector('.defensa-especial').textContent = json.stats[4].base_stat;
      $display.querySelector('.velocidad').textContent = json.stats[5].base_stat;

    } catch (err) {
      console.log(err)
    }
  }

  document.addEventListener('click', async (e)=>{
    if(e.target === $btnBuscar){
      let busqueda:string = $busqueda.value.toLowerCase();
      getPokemons(busqueda);
    }
  })

  document.addEventListener("keyup", (e)=>{
    if(e.target === $busqueda && $busqueda.value.length > 1){
      let busqueda:string = $busqueda.value.toLowerCase();
      getPokemons(busqueda);
    }

    if(e.key === 'Enter' && e.target === $busqueda){
      let busqueda:string = $busqueda.value.toLowerCase();
      getPokemons(busqueda);
    }

    if(!$busqueda.value){
      $display.classList.add('none')
    }
  })
}