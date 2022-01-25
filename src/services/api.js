const getApiData = (house) => {
  const URL = "http://hp-api.herokuapp.com/api/characters/house/";
  // Llamamos al API
  return fetch(URL + house)
    .then((response) => response.json())
    .then((apiData) => {
      const cleanApiData = apiData.map((eachApiData) => {
        return {
          image: eachApiData.image, //: https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter
          name: eachApiData.name,
          alternate_names: eachApiData.alternate_names,
          status: eachApiData.alive,
          species: eachApiData.species,
          gender: eachApiData.gender,
          house: eachApiData.house,
        };
      });
      return cleanApiData;
    });
};

export default getApiData;
