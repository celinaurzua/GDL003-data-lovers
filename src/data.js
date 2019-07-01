window.dataLovers = {

  filterData : (input, pokemonNames) => {
		let filteredPokemons = input.filter((pokemon) => {
			let hasAnyType = false;
			console.log(pokemonNames + " " + pokemon.name);
			pokemonTypes.forEach(function (type) {
				if (pokemon.type.includes(type) == true) {
					hasAnyName = true;
				}
			});
			return hasAnyName;
		});
		console.log (filteredPokemons);
		return filteredPokemons;
		},


	

  }

