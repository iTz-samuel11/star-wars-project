const getState = ({ getStore, getActions, setStore }) => {
	const API_URL = "https://rickandmortyapi.com/api"
	return {
		store: {
			characters: []

		},
		actions: {
			getCharacters: async () => {
				try{
					const response = await fetch(
						`${API_URL}/character`
					);
					const body = await response.json();
					if (response.status !== 200) {
						alert("no pudimos encontrar el personaje")
						return;
					}
					setStore({
						characters: body.results
					});
				} catch(error) {
					alert("promesa rechazasa")
				}
		    }
		}
	};
};

export default getState;
