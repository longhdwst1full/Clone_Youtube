import axios from 'axios'

const BASE_URL = 'https://youtube138.p.rapidapi.com'

// const id= 'aBcefe0928msh40ab1833a72889cp135ceejsn33ae227243df'
const options = {
  params: { hl: 'en', gl: 'US' },
  headers: {
    'X-RapidAPI-Key': '75ded96d68msh1a69124aefc3f7ep1e0233jsn6be99a1fbd46',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
}

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
   
    return data;
};
