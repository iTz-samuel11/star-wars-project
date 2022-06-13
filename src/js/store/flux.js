const getState = ({ getStore, getActions, setStore }) => {
	const API_URL ="https://www.swapi.tech/api"
	return {
		store: {
			characters: [],
			planets:[],
			vehicles:[],
			singleCharacter: [],
			singlePlanet: [],
		},
		actions: {
			getSinglePlanet: async (uid) => {
				try{
					const response = await fetch(
						`${API_URL}/planets/${uid}`
					);
					const body = await response.json();
					if (response.status !== 200) {
						alert("no pudimos encontrar el planeta")
						return;
					}
					setStore({
						singlePlanet: {
							...body.result.properties, 
							uid: body.result.uid,
							description: body.result.description,
						}	
					});
				} catch(error) {
					alert("promesa de planeta rechazasa")
				}
			},
			getSingleCharacter: async (uid) => {
				try{
					const response = await fetch(
						`${API_URL}/people/${uid}`
					);
					const body = await response.json();
					if (response.status !== 200) {
						alert("no pudimos encontrar el personaje")
						return;
					}
					setStore({
						singleCharacter: {
							...body.result.properties, 
							uid: body.result.uid,
							description: body.result.description,
						}	
					});
				} catch(error) {
					alert("promesa de personaje rechazasa")
				}
			},
			getCharacters: async () => {
				try{
					const response = await fetch(
						`${API_URL}/people`
					);
					const body = await response.json();
					if (response.status !== 200) {
						alert("no pudimos encontrar los personajes")
						return;
					}
					setStore({
						characters: body.results
					});
				} catch(error) {
					alert("promesa de personajes rechazasa")
				}
		    },
			getPlanets: async () => {
				try{
					const response = await fetch(
						`${API_URL}/planets`
					);
					const body = await response.json();
					if (response.status !== 200) {
						alert("no pudimos encontrar el planeta")
						return;
					}
					setStore({
						planets: body.results
					});
				} catch(error) {
					alert("promesa de planeta rechazasa")
				}
		    },
			getVehicles: async () => {
				try{
					const response = await fetch(
						`${API_URL}/vehicles`
					);
					const body = await response.json();
					if (response.status !== 200) {
						alert("no pudimos encontrar el vehiculo")
						return;
					}
					setStore({
						vehicles: body.results
					});
				} catch(error) {
					alert("promesa de vehiculo rechazada")
				}
			},
		}
	};
};

export default getState;
