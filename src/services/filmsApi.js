import axios from 'axios';


const key = 'ad9b2050466161c0639ae105a2bb6fd5';
const baseUrl = 'https://api.themoviedb.org/3';
const imageBaseUrl = 'https://image.tmdb.org/t/p/w200';


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

const getCastAboutOneFilm = (movieId) => {
    return axios
    .get(`${baseUrl}/movie/${movieId}/credits?api_key=${key}`)
    .then(response =>response.data);
};

const getReviewsAboutOneFilm = (movieId) => {
    return axios
    .get(`${baseUrl}/movie/${movieId}/reviews?api_key=${key}`)
    .then(response => response.data.results);
};


const getFilmByRequest = (query) => {
    return axios
    .get(`${baseUrl}/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${query}`)
    .then(response => response.data.results);
};


export {imageBaseUrl, getAllFilms, getDetailsAboutOneFilm, getReviewsAboutOneFilm, getCastAboutOneFilm, getFilmByRequest};
