const damn = document.querySelector('.wow')
const pokeimg = document.querySelector('.pokeimg')

const search = document.querySelector('.search')

const searchbtn = document.querySelector('.searchbtn')

let pokemonnumber = 1
let pokeurl ='https://pokeapi.co/api/v2/pokemon/'

searchbtn.addEventListener('click', function(){
    pokemonnumber = parseInt(search.value)
    console.log(pokemonnumber)
    fetch(pokeurl + pokemonnumber )
    .then(response => response.json())
    .then(pokemondata =>  updatePokemonInfo(pokemondata))

    if(pokemonnumber == 1){
        lastbtn.disabled = true
    
    }else{
        lastbtn.disabled = false
    }
})

function fetchpokemon(url){
    fetch(url + 1)
    .then(response => response.json())
    .then(pokemondata =>  updatePokemonInfo(pokemondata))
}



fetchpokemon(pokeurl)

function updatePokemonInfo(data){
    damn.innerHTML = data.name
    if(shinycheck.checked == false){pokeimg.setAttribute('src', data.sprites.front_default)}
    else
    {pokeimg.setAttribute('src', data.sprites.front_shiny)}

}

const nextbtn = document.querySelector('.btn')
const lastbtn = document.querySelector('.previousbtn')
const shinycheck = document.querySelector('.shiny')

shinycheck.addEventListener('change', function(){
    if(shinycheck.checked == false){
    fetch(pokeurl + pokemonnumber)
    .then(response => response.json())
    .then(pokemondata =>  pokeimg.setAttribute('src', pokemondata.sprites.front_default))
    } else {
        fetch(pokeurl + pokemonnumber)
    .then(response => response.json())
    .then(pokemondata =>  pokeimg.setAttribute('src', pokemondata.sprites.front_shiny))
    }
})

nextbtn.addEventListener('click', function(){
    console.log('updating itself !')
    pokemonnumber += 1;
    console.log(pokemonnumber)
    fetch(pokeurl + pokemonnumber)
    .then(response => response.json())
    .then(pokemondata =>  updatePokemonInfo(pokemondata))
    
    lastbtn.disabled = false
    

})

lastbtn.addEventListener('click', function(){
    if(pokemonnumber != 0){

    console.log('updating itself !')
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



