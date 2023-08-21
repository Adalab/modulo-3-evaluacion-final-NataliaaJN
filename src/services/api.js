import { v4 as uuid } from 'uuid';
import defaultImage from "../images/defaultImage.jpg";
const getApiData = (house) => {
  const URL = "https://hp-api.onrender.com/api/characters/house/";
 
  // Llamamos al API
  return fetch(URL + house)
    .then((response) => response.json())
    .then((apiData) => {
      const cleanApiData = apiData.map((eachApiData) => {
        return {
          id: uuid(),
          image: eachApiData.image === "" ? defaultImage : eachApiData.image , 
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
