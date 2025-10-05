const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "14cd833fd47d25db44e7fde1e9aea094";

export async function getMovies(){
    const Result = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await Result.json();
    return data.results;
}

export async function searchMovies(query){
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await response.json();
    return data.results;
}
