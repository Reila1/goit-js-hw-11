import axios from 'axios';

const API_KEY = '53363226-49c521b83e2d6ffa4f69ff166';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(q) {
  const params = {
    key: API_KEY,
    q: q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 20
  };

  return axios.get(BASE_URL, { params })
    .then(response => {
      console.log('API Response:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error("Error fetching images from Pixabay:", error);
      throw new Error("Failed to fetch images.");
    });
}