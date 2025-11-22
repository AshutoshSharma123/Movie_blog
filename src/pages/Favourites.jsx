import { useMovieContext } from "../context/MovieContext";
import Moviecard from "../components/Moviecard";

const Favorites = () => {
    const { favoriteMovies } = useMovieContext();

    return (
        <div className="min-h-screen bg-gray-900 p-6 text-white">
            <h1 className="text-3xl font-bold mb-6">Your Favourite Movies ❤️</h1>

            {favoriteMovies.length === 0 ? (
                <p className="text-gray-400 text-lg">No favourite movies added yet.</p>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {favoriteMovies.map((movie) => (
                        <Moviecard key={movie.imdbID} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;
