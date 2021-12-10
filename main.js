const damn = document.querySelector('.pokemonNname')
const pokemonType = document.querySelector('.pokemontype')
const pokeimg = document.querySelector('.pokeimg')
const search = document.querySelector('.search')
const searchbtn = document.querySelector('.searchbtn')
const pokedexEntry = document.querySelector('.pokedexEntry')

const nextbtn = document.querySelector('.btn')
const lastbtn = document.querySelector('.previousbtn')
const shinycheck = document.querySelector('.fa-star')

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

// used to first fetch the pokemon and for the search function


let pokemonnumber = 1
let pokeurl ='https://pokeapi.co/api/v2/pokemon/'

let searchfetchvalue = '1'

function fetchpokemon(url){
    if(isNaN(searchfetchvalue) == false){
    fetch(url + parseInt(searchfetchvalue))
    .then(response => response.json())
    .then(pokemondata =>  updatePokemonInfo(pokemondata))
    } else{
    fetch(url + searchfetchvalue)
    .then(response => response.json())
    .then(pokemondata =>  updatePokemonInfo(pokemondata))
    }
    
}
fetchpokemon(pokeurl)

// Creating a function that autocomplete our input 
let autocomplete
// Big array with every pokemon name
let Allpokemon = ["bulbasaur","ivysaur","venusaur","charmander","charmeleon","charizard","squirtle","wartortle","blastoise","caterpie","metapod","butterfree","weedle","kakuna","beedrill","pidgey","pidgeotto","pidgeot","rattata","raticate","spearow","fearow","ekans","arbok","pikachu","raichu","sandshrew","sandslash","nidoran-f","nidorina","nidoqueen","nidoran-m","nidorino","nidoking","clefairy","clefable","vulpix","ninetales","jigglypuff","wigglytuff","zubat","golbat","oddish","gloom","vileplume","paras","parasect","venonat","venomoth","diglett","dugtrio","meowth","persian","psyduck","golduck","mankey","primeape","growlithe","arcanine","poliwag","poliwhirl","poliwrath","abra","kadabra","alakazam","machop","machoke","machamp","bellsprout","weepinbell","victreebel","tentacool","tentacruel","geodude","graveler","golem","ponyta","rapidash","slowpoke","slowbro","magnemite","magneton","farfetchd","doduo","dodrio","seel","dewgong","grimer","muk","shellder","cloyster","gastly","haunter","gengar","onix","drowzee","hypno","krabby","kingler","voltorb","electrode","exeggcute","exeggutor","cubone","marowak","hitmonlee","hitmonchan","lickitung","koffing","weezing","rhyhorn","rhydon","chansey","tangela","kangaskhan","horsea","seadra","goldeen","seaking","staryu","starmie","mr-mime","scyther","jynx","electabuzz","magmar","pinsir","tauros","magikarp","gyarados","lapras","ditto","eevee","vaporeon","jolteon","flareon","porygon","omanyte","omastar","kabuto","kabutops","aerodactyl","snorlax","articuno","zapdos","moltres","dratini","dragonair","dragonite","mewtwo","mew","chikorita","bayleef","meganium","cyndaquil","quilava","typhlosion","totodile","croconaw","feraligatr","sentret","furret","hoothoot","noctowl","ledyba","ledian","spinarak","ariados","crobat","chinchou","lanturn","pichu","cleffa","igglybuff","togepi","togetic","natu","xatu","mareep","flaaffy","ampharos","bellossom","marill","azumarill","sudowoodo","politoed","hoppip","skiploom","jumpluff","aipom","sunkern","sunflora","yanma","wooper","quagsire","espeon","umbreon","murkrow","slowking","misdreavus","unown","wobbuffet","girafarig","pineco","forretress","dunsparce","gligar","steelix","snubbull","granbull","qwilfish","scizor","shuckle","heracross","sneasel","teddiursa","ursaring","slugma","magcargo","swinub","piloswine","corsola","remoraid","octillery","delibird","mantine","skarmory","houndour","houndoom","kingdra","phanpy","donphan","porygon2","stantler","smeargle","tyrogue","hitmontop","smoochum","elekid","magby","miltank","blissey","raikou","entei","suicune","larvitar","pupitar","tyranitar","lugia","ho-oh","celebi","treecko","grovyle","sceptile","torchic","combusken","blaziken","mudkip","marshtomp","swampert","poochyena","mightyena","zigzagoon","linoone","wurmple","silcoon","beautifly","cascoon","dustox","lotad","lombre","ludicolo","seedot","nuzleaf","shiftry","taillow","swellow","wingull","pelipper","ralts","kirlia","gardevoir","surskit","masquerain","shroomish","breloom","slakoth","vigoroth","slaking","nincada","ninjask","shedinja","whismur","loudred","exploud","makuhita","hariyama","azurill","nosepass","skitty","delcatty","sableye","mawile","aron","lairon","aggron","meditite","medicham","electrike","manectric","plusle","minun","volbeat","illumise","roselia","gulpin","swalot","carvanha","sharpedo","wailmer","wailord","numel","camerupt","torkoal","spoink","grumpig","spinda","trapinch","vibrava","flygon","cacnea","cacturne","swablu","altaria","zangoose","seviper","lunatone","solrock","barboach","whiscash","corphish","crawdaunt","baltoy","claydol","lileep","cradily","anorith","armaldo","feebas","milotic","castform","kecleon","shuppet","banette","duskull","dusclops","tropius","chimecho","absol","wynaut","snorunt","glalie","spheal","sealeo","walrein","clamperl","huntail","gorebyss","relicanth","luvdisc","bagon","shelgon","salamence","beldum","metang","metagross","regirock","regice","registeel","latias","latios","kyogre","groudon","rayquaza","jirachi","deoxys-normal","turtwig","grotle","torterra","chimchar","monferno","infernape","piplup","prinplup","empoleon","starly","staravia","staraptor","bidoof","bibarel","kricketot","kricketune","shinx","luxio","luxray","budew","roserade","cranidos","rampardos","shieldon","bastiodon","burmy","wormadam-plant","mothim","combee","vespiquen","pachirisu","buizel","floatzel","cherubi","cherrim","shellos","gastrodon","ambipom","drifloon","drifblim","buneary","lopunny","mismagius","honchkrow","glameow","purugly","chingling","stunky","skuntank","bronzor","bronzong","bonsly","mime-jr","happiny","chatot","spiritomb","gible","gabite","garchomp","munchlax","riolu","lucario","hippopotas","hippowdon","skorupi","drapion","croagunk","toxicroak","carnivine","finneon","lumineon","mantyke","snover","abomasnow","weavile","magnezone","lickilicky","rhyperior","tangrowth","electivire","magmortar","togekiss","yanmega","leafeon","glaceon","gliscor","mamoswine","porygon-z","gallade","probopass","dusknoir","froslass","rotom","uxie","mesprit","azelf","dialga","palkia","heatran","regigigas","giratina-altered","cresselia","phione","manaphy","darkrai","shaymin-land","arceus","victini","snivy","servine","serperior","tepig","pignite","emboar","oshawott","dewott","samurott","patrat","watchog","lillipup","herdier","stoutland","purrloin","liepard","pansage","simisage","pansear","simisear","panpour","simipour","munna","musharna","pidove","tranquill","unfezant","blitzle","zebstrika","roggenrola","boldore","gigalith","woobat","swoobat","drilbur","excadrill","audino","timburr","gurdurr","conkeldurr","tympole","palpitoad","seismitoad","throh","sawk","sewaddle","swadloon","leavanny","venipede","whirlipede","scolipede","cottonee","whimsicott","petilil","lilligant","basculin-red-striped","sandile","krokorok","krookodile","darumaka","darmanitan-standard","maractus","dwebble","crustle","scraggy","scrafty","sigilyph","yamask","cofagrigus","tirtouga","carracosta","archen","archeops","trubbish","garbodor","zorua","zoroark","minccino","cinccino","gothita","gothorita","gothitelle","solosis","duosion","reuniclus","ducklett","swanna","vanillite","vanillish","vanilluxe","deerling","sawsbuck","emolga","karrablast","escavalier","foongus","amoonguss","frillish","jellicent","alomomola","joltik","galvantula","ferroseed","ferrothorn","klink","klang","klinklang","tynamo","eelektrik","eelektross","elgyem","beheeyem","litwick","lampent","chandelure","axew","fraxure","haxorus","cubchoo","beartic","cryogonal","shelmet","accelgor","stunfisk","mienfoo","mienshao","druddigon","golett","golurk","pawniard","bisharp","bouffalant","rufflet","braviary","vullaby","mandibuzz","heatmor","durant","deino","zweilous","hydreigon","larvesta","volcarona","cobalion","terrakion","virizion","tornadus-incarnate","thundurus-incarnate","reshiram","zekrom","landorus-incarnate","kyurem","keldeo-ordinary","meloetta-aria","genesect","chespin","quilladin","chesnaught","fennekin","braixen","delphox","froakie","frogadier","greninja","bunnelby","diggersby","fletchling","fletchinder","talonflame","scatterbug","spewpa","vivillon","litleo","pyroar","flabebe","floette","florges","skiddo","gogoat","pancham","pangoro","furfrou","espurr","meowstic-male","honedge","doublade","aegislash-shield","spritzee","aromatisse","swirlix","slurpuff","inkay","malamar","binacle","barbaracle","skrelp","dragalge","clauncher","clawitzer","helioptile","heliolisk","tyrunt","tyrantrum","amaura","aurorus","sylveon","hawlucha","dedenne","carbink","goomy","sliggoo","goodra","klefki","phantump","trevenant","pumpkaboo-average","gourgeist-average","bergmite","avalugg","noibat","noivern","xerneas","yveltal","zygarde","diancie","hoopa","volcanion","rowlet","dartrix","decidueye","litten","torracat","incineroar","popplio","brionne","primarina","pikipek","trumbeak","toucannon","yungoos","gumshoos","grubbin","charjabug","vikavolt","crabrawler","crabominable","oricorio-baile","cutiefly","ribombee","rockruff","lycanroc-midday","wishiwashi-solo","mareanie","toxapex","mudbray","mudsdale","dewpider","araquanid","fomantis","lurantis","morelull","shiinotic","salandit","salazzle","stufful","bewear","bounsweet","steenee","tsareena","comfey","oranguru","passimian","wimpod","golisopod","sandygast","palossand","pyukumuku","type-null","silvally","minior-red-meteor","komala","turtonator","togedemaru","mimikyu-disguised","bruxish","drampa","dhelmise","jangmo-o","hakamo-o","kommo-o","tapu-koko","tapu-lele","tapu-bulu","tapu-fini","cosmog","cosmoem","solgaleo","lunala","nihilego","buzzwole","pheromosa","xurkitree","celesteela","kartana","guzzlord","necrozma","magearna","marshadow","poipole","naganadel","stakataka","blacephalon","zeraora","meltan","melmetal","grookey","thwackey","rillaboom","scorbunny","raboot","cinderace","sobble","drizzile","inteleon","skwovet","greedent","rookidee","corvisquire","corviknight","blipbug","dottler","orbeetle","nickit","thievul","gossifleur","eldegoss","wooloo","dubwool","chewtle","drednaw","yamper","boltund","rolycoly","carkol","coalossal","applin","flapple","appletun","silicobra","sandaconda","cramorant","arrokuda","barraskewda","toxel","toxtricity-amped","sizzlipede","centiskorch","clobbopus","grapploct","sinistea","polteageist","hatenna","hattrem","hatterene","impidimp","morgrem","grimmsnarl","obstagoon","perrserker","cursola","sirfetchd","mr-rime","runerigus","milcery","alcremie","falinks","pincurchin","snom","frosmoth","stonjourner","eiscue-ice","indeedee-male","morpeko","cufant","copperajah","dracozolt","arctozolt","dracovish","arctovish","duraludon","dreepy","drakloak","dragapult","zacian-hero"]
const searchbar = document.querySelector('.result_box')

function FindingAutocomplete(x){
    if(x.length >= 1){
    console.clear();
    console.log(x.substr(0, x.length))
    let validname = ['']
    Allpokemon.forEach(function(name){
        if(x.substr(0, x.length) == name.substr(0, x.length)){
                validname.push(name)   
        }
    } )
    console.log(validname)
        if(validname.length == 1){
            searchbar.innerHTML= ''
        }

        if(typeof validname[2] === 'undefined'){
            searchbar.innerHTML= '<div class="autocomplete search_width">' + '<p class="autocomplete_value">' +validname[1].charAt(0).toUpperCase() + validname[1].slice(1)+ '</p>' + '</div>'; 
        } 
        else if(typeof validname[3] === 'undefined') {
            searchbar.innerHTML= '<div class="autocomplete search_width">' + '<p class="autocomplete_value">' +validname[1].charAt(0).toUpperCase() + validname[1].slice(1)+ '</p>'+ '</div> <div class="autocomplete search_width">' + '<p class="autocomplete_value">' +validname[2].charAt(0).toUpperCase() + validname[2].slice(1)+ '</p>'+ '</div>';  
        }

        else {
            searchbar.innerHTML= '<div class="autocomplete search_width">' + '<p class="autocomplete_value">' +validname[1].charAt(0).toUpperCase() + validname[1].slice(1)+ '</p>'+ '</div> <div class="autocomplete search_width">' + '<p class="autocomplete_value">' +validname[2].charAt(0).toUpperCase() + validname[2].slice(1)+ '</p>'+ '</div> <div class="autocomplete search_width">' + '<p class="autocomplete_value">' +validname[3].charAt(0).toUpperCase() + validname[3].slice(1)+ '</p>'+ '</div>';  

        }
           
} else{
    searchbar.innerHTML= ''
}
autocomplete = document.querySelectorAll('.autocomplete_value')
console.log(autocomplete)
addingeventlistener()
}

  // Adding event listener to each autocompletion suggestion
let search_input = document.querySelector('.search_bar')
  function addingeventlistener(){
        
        autocomplete.forEach(function(auto){
            console.log(auto + 'adding !')
            auto.addEventListener('click', function(){
            searchfetchvalue = auto.innerHTML.toLowerCase()
            fetchpokemon(pokeurl)
            search_input.value = ''
            FindingAutocomplete(search_input.value)

            })
            
        })
}

// Creating object with all pokemon types and associated colors


const PokeType = {
    bug:{ 
        main: 'rgb(24, 136, 52)',
        second:'rgb(17, 99, 41)'
    },
    
    dark:{ 
        main: 'rgb(99, 98, 98)',
        second:'rgb(46, 45, 45)'
    },
    
    dragon:{ 
        main: 'rgb(38, 44, 121)',
        second:'rgb(13, 17, 68)'
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
        main: 'rgb(181, 232, 255)',
        second:'rgb(118, 150, 165)'
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
        main: 'rgb(185, 177, 177)',
        second:'rgb(105, 95, 95)'
    },
    
    water:{ 
        main: 'rgb(9, 5, 255)',
        second:'rgb(44, 78, 228)'
    }
    
  };




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
    damn.innerHTML = data.species.name.charAt(0).toUpperCase() + data.species.name.slice(1) + ' -  #' + data.id;

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



