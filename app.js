//  $.ajax({some setup code}).then/done( function as argument  )

const url = 'https://pokeapi.co/api/v2/pokemon/';

// we initiate empty variables so that we can then capture the response data from the API (ajax) and use it afterwards
let pokeName;
let ability;
const id = '267';

$.ajax({
  url,
  type: 'GET',
  dataType: 'JSON',
})
  .done(function(pokemon) {
    // we know how to get the ability by looking at the docs/response and finding our value
    ability = pokemon.abilities[0].ability.name;
    console.log(ability);
  })
  .fail(function(error) {
    console.log(error);
  })
  .always(console.log('Always run this', console.log(ability)));

$.getJSON(`https://pokeapi.co/api/v2/pokemon/${id}`).done(function(pokemon) {
  console.log('ajax ver2', pokemon);
});

$.ajax(url).done(function(pokemon) {
  console.log('vers 3', pokemon);
});

$.getJSON(url)
  .then(function(allPokemons) {
    console.log('all', allPokemons);
    pokeName = allPokemons.results[10].name;
    console.log(pokeName);
  })
  .done(function() {
    // since we set up our variables in the behining of the file and we saved the name from the response we can use it
    $.getJSON(url + pokeName).done(function(pokemon) {
      // lets get the picture of the pokemon
      console.log(pokemon.sprites.back_default);
    });
  });
