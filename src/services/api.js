const API_URL = "https://www.omdbapi.com/";
const API_KEY = "4e32961b";

export const getPopularMovies = async () => {
    const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=movie`);
    const data = await response.json();
    return data.Search;
};

export const searchMovies = async (query) => {
    const response = await fetch(
        `${API_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    return data.Search;
};
