window.dataLovers = {

  filterData : (name, pokemonNames) => {
		let filteredPokemons = name.filter((pokemon) => {
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

