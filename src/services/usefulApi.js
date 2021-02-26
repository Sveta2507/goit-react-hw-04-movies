import axios from "axios";
const key = "5028ce2207a6ea3297056fc228a60bde";

export function getTrending() {
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`;
  return axios.get(url).then((result) => {
    return result.data;
  });
}

export function getDetails(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`;
  return axios.get(url).then((result) => {
    return result.data;
  });
}

export function infoCast(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`;
  return axios.get(url).then((result) => {
    return result.data;
  });
}

export function reviews(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`;
  return axios.get(url).then((result) => {
    return result.data;
  });
}

export function getQuery(query) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`;
  return axios.get(url).then((res) => {
    return res.data;
  });
}
