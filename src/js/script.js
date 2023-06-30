const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.pokemon-card')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () =>{

    const cartaoPokemonAberto = document.querySelector('.open')
    cartaoPokemonAberto.classList.remove('open')

    const idPokemonSelecionado = pokemon.attributes.id.value

    const idCartaoPokemonParaAbrir = idPokemonSelecionado + '-card'
    const cartaoPokemonparaAbrir = document.getElementById(idCartaoPokemonParaAbrir)
    cartaoPokemonparaAbrir.classList.add('open')

    const pokemonAtivoNaListagem = document.querySelector('.ativo')
    pokemonAtivoNaListagem.classList.remove('ativo')

    const pokemonSelecionaNaListagem = document.getElementById(idPokemonSelecionado)
    pokemonSelecionaNaListagem.classList.add('ativo')

    
    })
});