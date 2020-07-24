import axios from 'axios';


const key = 'ad9b2050466161c0639ae105a2bb6fd5';
const baseUrl = 'https://api.themoviedb.org/3';


const getAllFilms = () => {
    
    return  axios
    .get(`${baseUrl}/trending/all/day?api_key=${key}`)
    .then(response => response.data.results);
};

const getDetailsAboutOneFilm = (movieId) => {
    return axios
    .get(`${baseUrl}/movie/${movieId}?api_key=${key}`)
    .then(response => response.data);
};

export {getAllFilms, getDetailsAboutOneFilm};
