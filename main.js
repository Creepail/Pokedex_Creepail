const damn = document.querySelector('.pokemonNname')
const pokemonType = document.querySelector('.pokemontype')
const pokeimg = document.querySelector('.pokeimg')
const search = document.querySelector('.search')
const searchbtn = document.querySelector('.searchbtn')
const pokedexEntry = document.querySelector('.pokedexEntry')

const nextbtn = document.querySelector('.btn')
const lastbtn = document.querySelector('.previousbtn')
const shinycheck = document.querySelector('.shiny')

let isShiny = false

// Selecting every stats
const hp = document.querySelector('#p_HP')
const attack = document.querySelector('#p_AT')
const defense = document.querySelector('#p_DE')
const special_def = document.querySelector('#p_SD')
const sepcial_att = document.querySelector('#p_SA')
const speed = document.querySelector('#p_SP')

// Selecting every stats bar
const hp_bar = document.querySelector('.HP')
const attack_bar = document.querySelector('.AT')
const defense_bar = document.querySelector('.DE')
const special_def_bar = document.querySelector('.SD')
const sepcial_att_bar = document.querySelector('.SA')
const speed_bar = document.querySelector('.SP')


let pokemonnumber = 1
let pokeurl ='https://pokeapi.co/api/v2/pokemon/'

// searchbtn.addEventListener('click', function(){
//     pokemonnumber = parseInt(search.value)
//     fetch(pokeurl + pokemonnumber )
//     .then(response => response.json())
//     .then(pokemondata =>  updatePokemonInfo(pokemondata))

//     if(pokemonnumber == 1){
//         lastbtn.disabled = true
    
//     }else{
//         lastbtn.disabled = false
//     }
// })

function fetchpokemon(url){
    fetch(url + 1)
    .then(response => response.json())
    .then(pokemondata =>  updatePokemonInfo(pokemondata))
}
fetchpokemon(pokeurl)


// ! Function in charge of updating all of the pokemon info !

function updatePokemonInfo(data){
    pokemonnumber = data.id
   
    // Updating the pokemon type
    NumberofTypes  = Object.keys(data.types).length
    if(Object.keys(data.types).length == 1){
        pokemonType.innerHTML = 'Type: ' + data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1);
    }
    else{
        pokemonType.innerHTML = 'Type: ' + data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1) + ' - ' +  data.types[1].type.name.charAt(0).toUpperCase() + data.types[1].type.name.slice(1);

    }
    // Updating the pokemon name
    damn.innerHTML = data.species.name.charAt(0).toUpperCase() + data.species.name.slice(1);

    // Updating the pokemon stats
    hp.innerHTML = 'HP: ' + data.stats[0].base_stat
    attack.innerHTML = 'ATTACK: ' + data.stats[1].base_stat
    defense.innerHTML = 'DEFENSE: ' + data.stats[2].base_stat
    special_def.innerHTML = 'SPECIAL DEFENSE: ' + data.stats[3].base_stat
    sepcial_att.innerHTML = 'SPECIAL ATTACK: ' + data.stats[4].base_stat
    speed.innerHTML = 'SPEED: ' + data.stats[5].base_stat

    // Updating the pokemon stats bar
    hp_bar.style.width =  (data.stats[0].base_stat*100)/255 +'%' 
    attack_bar.style.width =  (data.stats[1].base_stat*100)/255 +'%'
    defense_bar.style.width =  (data.stats[2].base_stat*100)/255 +'%'
    special_def_bar.style.width =  (data.stats[3].base_stat*100)/255 +'%'
    sepcial_att_bar.style.width =  (data.stats[4].base_stat*100)/255 +'%'
    speed_bar.style.width =  (data.stats[5].base_stat*100)/255 +'%'
    
    // Update the pokemon pokedex entry
    fetch('https://pokeapi.co/api/v2/pokemon-species/' + data.species.name)
    .then(response => response.json())
    .then(pokedexentry =>  updatePokedex(pokedexentry))


    // Checking if the pokemon is shiny
    if(isShiny == false){pokeimg.style.backgroundImage = 'url('+ data.sprites.other.home.front_default + ')'}
    else
    {pokeimg.style.backgroundImage = 'url('+ data.sprites.other.home.front_shiny + ')'}
}

// Function to update the pokedex
function updatePokedex(data){
    data1 = data.flavor_text_entries[1].flavor_text.replace('', ' ')
    pokedexEntry.innerHTML = data1.toUpperCase()
}

shinycheck.addEventListener('click', function(){
    if(isShiny== false){
    fetch(pokeurl + pokemonnumber)
    .then(response => response.json())
    .then(pokemondata =>  pokeimg.style.backgroundImage = 'url('+ pokemondata.sprites.other.home.front_shiny + ')')
    isShiny = true
    } 
    else {
        fetch(pokeurl + pokemonnumber)
    .then(response => response.json())
    .then(pokemondata =>  pokeimg.style.backgroundImage = 'url('+ pokemondata.sprites.other.home.front_default + ')')
    isShiny = false
    }
})

// Making the "next" btn work

nextbtn.addEventListener('click', function(){
    pokemonnumber += 1;
    fetch(pokeurl + pokemonnumber)
    .then(response => response.json())
    .then(pokemondata =>  updatePokemonInfo(pokemondata))
    
    lastbtn.disabled = false
    

})

// Making the "previous" btn work

lastbtn.addEventListener('click', function(){
    if(pokemonnumber != 0){
    pokemonnumber -= 1;
    fetch(pokeurl + pokemonnumber)
    .then(response => response.json())
    .then(pokemondata =>  updatePokemonInfo(pokemondata))

    }

     
    if(pokemonnumber == 1){
        lastbtn.disabled = true
    
    }else{
        lastbtn.disabled = false
    }
})



// Creating object with all pokemon types and associated colors

const PokeType = {
    bug:{ 
        main: 'wow',
        second:'wow2'
    }
    
    
    
  };