export const getPokemonList = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(() => {
				return [
					{
						id: "1",
						number: "001",
						name: "Bulbasaur",
						type: "grass/poison",
						image: "001.png",
						description: "",
					},
					{
						id: "2",
						number: "004",
						name: "Charmender",
						type: "fire",
						image: "004.png",
						description: "",
					},
					{
						id: "3",
						number: "007",
						name: "Squirtle",
						type: "water",
						image: "007.png",
						description: "",
					},
				];
			});
		}, 1000);
	});
};
