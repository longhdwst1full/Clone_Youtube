import axios from 'axios'

const BASE_URL = 'https://youtube138.p.rapidapi.com'

// const id= 'aBcefe0928msh40ab1833a72889cp135ceejsn33ae227243df'
const options = {
  params: { hl: 'en', gl: 'US' },
  headers: {
    'X-RapidAPI-Key': '9bce87ef2emsh573ed4a1f095f43p130054jsn2e13a033ba7b',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
}

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
   
    return data;
};
