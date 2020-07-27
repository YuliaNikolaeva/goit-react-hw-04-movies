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


// const getReviewsAboutOneFilm = (movieId) => {
//     console.log('LINK!!!', `${baseUrl}/movie/${movieId}/reviews?api_key=${key}`)

//     return axios
//     .get(`${baseUrl}/movie/${movieId}/reviews?api_key=${key}`)
//     .then(response => console.log(response.data.results));
// };

export {imageBaseUrl, getAllFilms, getDetailsAboutOneFilm, getReviewsAboutOneFilm, getCastAboutOneFilm};
