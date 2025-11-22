import { createContext, useState, useEffect, useContext } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    // Load favorites from localStorage
    useEffect(() => {
        const stored = localStorage.getItem("favoriteMovies");
        if (stored) {
            setFavoriteMovies(JSON.parse(stored));
        }
    }, []);

    // Save favorites to localStorage
    useEffect(() => {
        localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
    }, [favoriteMovies]);

    // ADD favorite
    const addFavorite = (movie) => {
        setFavoriteMovies((prev) => {
            return [...prev, movie];
        });
    };

    // REMOVE favorite using imdbID
    const removeFavorite = (imdbID) => {
        setFavoriteMovies((prev) => {
            return prev.filter((m) => m.imdbID !== imdbID);
        });
    };

    // CHECK favorite using imdbID
    const isFavorite = (imdbID) => {
        return favoriteMovies.some((m) => m.imdbID === imdbID);
    };

    return (
        <MovieContext.Provider
            value={{ favoriteMovies, addFavorite, removeFavorite, isFavorite }}
        >
            {children}
        </MovieContext.Provider>
    );
};
