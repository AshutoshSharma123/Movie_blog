const Moviecard = ({ movie }) => {

    function handleFavouriteClick() {
        alert("Added to Favourites");
    }

    return (
        <div className="movie-card relative bg-gray-800 rounded-xl overflow-hidden shadow-lg 
                        hover:scale-105 transition-transform duration-300">

            {/* Movie Image */}
            <div className="movie-image w-full aspect-[2/3] overflow-hidden">
                <img
                    src={movie.Poster}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Favourite Icon */}
            <div className="movie-overlay absolute top-3 right-3">
                <button
                    className="favourite-btn bg-white/70 hover:bg-white text-red-600 
                               p-2 rounded-full shadow-md transition-all"
                    onClick={handleFavouriteClick}
                >
                    ❤️
                </button>
            </div>

            {/* Movie Info */}
            <div className="movie-info p-4 bg-gray-900 text-white">
                <h3 className="text-lg font-semibold truncate">{movie.title}</h3>
                <p className="text-sm text-gray-400">{movie.release_date}</p>
            </div>
        </div>
    );
};

export default Moviecard;
