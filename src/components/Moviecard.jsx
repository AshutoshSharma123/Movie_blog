import { useMovieContext } from "../context/MovieContext";

const Moviecard = ({ movie }) => {
    const { addFavorite, removeFavorite, isFavorite } = useMovieContext();

    const favourite = isFavorite(movie.imdbID);

    const handleFavouriteClick = (e) => {
        e.preventDefault();
        if (favourite) {
            removeFavorite(movie.imdbID);
        } else {
            addFavorite(movie);
        }
    };

    return (
        <div className="movie-card relative bg-gray-800 rounded-xl overflow-hidden shadow-lg 
                        hover:scale-105 transition-transform duration-300">

            <div className="movie-image w-full aspect-[2/3] overflow-hidden">
                <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="movie-overlay absolute top-3 right-3">
                <button
                    className={`favourite-btn bg-white/70 hover:bg-white 
                        p-2 rounded-full shadow-md transition-all 
                        ${favourite ? "text-red-600" : "text-gray-400"}`}
                    onClick={handleFavouriteClick}
                >
                    ❤️
                </button>
            </div>

            <div className="movie-info p-4 bg-gray-900 text-white">
                <h3 className="text-lg font-semibold truncate">{movie.Title}</h3>
                <p className="text-sm text-gray-400">{movie.Year}</p>
            </div>
        </div>
    );
};

export default Moviecard;
