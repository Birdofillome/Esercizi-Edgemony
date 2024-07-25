export const getPokemonList = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(() => {
				return [
					{
						id: "1",
						number: "001",
						name: "Bulbasaur",
						type: "Grass/Poison",
						image: "001.png",
						description: "Bulbasaur, noto anche come Pokémon Seme, è un Pokémon eccezionalmente raro di tipo Erba/Veleno che vive nei campi erbosi e nelle foreste delle regioni di Kanto, Galar e dell'istituto Mirtillo, anche se raramente è stato visto nella regione di Alola.",
					},
					{
						id: "2",
						number: "004",
						name: "Charmender",
						type: "Fire",
						image: "004.png",
						description: "Charmander, noto come Pokémon Lucertola, è un Pokémon eccezionalmente raro di tipo Fuoco che vive nei pressi dei vulcani e nelle montagne scoscese delle regioni di Kanto, Galar e dell'istituto Mirtillo, anche se raramente è stato visto nella regione di Alola. ",
					},
					{
						id: "3",
						number: "007",
						name: "Squirtle",
						type: "Water",
						image: "007.png",
						description: "Squirtle, noto come Pokémon Tartaghina, è un Pokémon eccezionalmente raro di tipo Acqua che vive negli stagni, nei laghi e nei percorsi vicino al mare delle regioni di Kanto, Galar e dell'istituto Mirtillo, anche se raramente è stato visto nella regione di Alola.",
					},
				];
			});
		}, 1000);
	});
};


export const getPokemonDetail = (id) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			// reject ({ message: "Errore: pagina non caricata!" })
			resolve(() => {
				return {
						id: "1",
						number: "001",
						name: "Bulbasaur",
						type: "Grass/Poison",
						image: "/001.png",
						weaknesses: "Fire, Ice, Psycho, Wheel",
						description: "Bulbasaur, noto anche come Pokémon Seme, è un Pokémon eccezionalmente raro di tipo Erba/Veleno che vive nei campi erbosi e nelle foreste delle regioni di Kanto, Galar e dell'istituto Mirtillo, anche se raramente è stato visto nella regione di Alola.",
					}
			});
		}, 500);
	});
};

export const addPokemon = (body) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(
				{
					...body, id: self.crypto.randomUUID(),
				}
			)
		}, 3000)
	})
}

export const editPokemon = (body) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(
				{
					...body,
				}
			)
		}, 3000)
	});
};