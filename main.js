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
let root = document.documentElement;


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

// Creating object with all pokemon types and associated colors

const PokeType = {
    bug:{ 
        main: 'rgb(24, 136, 52)',
        second:'rgb(17, 99, 41)'
    },
    
    dark:{ 
        main: 'wow',
        second:'wow2'
    },
    
    dragon:{ 
        main: 'wow',
        second:'wow2'
    },
    
    electric:{ 
        main: 'rgb(255, 255, 0)',
        second:'rgb(197, 179, 16)'
    },
    
    fairy:{ 
        main: 'rgb(255, 192, 203)',
        second:'rgb(219, 121, 167)'
    },
    
    fighting:{ 
        main: 'rgb(119, 22, 22)',
        second:'rgb(80, 34, 7)'
    },
    
    fire:{ 
        main: 'rgb(255, 5, 5)',
        second:'rgb(228, 44, 44)'
    },
    
    flying:{ 
        main: 'wow',
        second:'wow2'
    },
    
    ghost:{ 
        main: 'rgb(165, 13, 140)',
        second:'rgb(117, 8, 99)'
    },
    
    grass:{ 
        main: 'rgb(44, 228, 90)',
        second:'rgb(8, 82, 26)'
    },
    
    ground:{ 
        main: 'rgb(165, 126, 42)',
        second:'rgb(126, 86, 27)'
    },
    
    ice:{ 
        main: 'rgb(5, 255, 234)',
        second:'rgb(6, 158, 179)'
    },
    
    normal:{ 
        main: 'rgb(255, 255, 255)',
        second:'rgb(131, 121, 121)'
    },
    
    poison:{ 
        main: 'rgb(128, 0, 128)',
        second:'rgb(73, 3, 87)'
    },
    
    psychic:{ 
        main: 'rgb(223, 80, 228)',
        second:'rgb(185, 70, 189)'
    },
    
    rock:{ 
        main: 'rgb(211, 119, 58)',
        second:'rgb(161, 71, 29)'
    },
    
    steel:{ 
        main: 'wow',
        second:'wow2'
    },
    
    water:{ 
        main: 'rgb(9, 5, 255)',
        second:'rgb(44, 78, 228)'
    }
    
  };


let pokemonnumber = 124
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
    fetch(url + 124)
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

    // Updating the theme depending on the pokemon type

 for(const proprety in PokeType){
     if(data.types[0].type.name == proprety)
     root.style.setProperty('--main-pok-color', PokeType[data.types[0].type.name].main)
     root.style.setProperty('--secondary-pok-color', PokeType[data.types[0].type.name].second)


    }


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



