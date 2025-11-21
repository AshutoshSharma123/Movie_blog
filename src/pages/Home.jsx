import Moviecard from '../components/Moviecard'
import { useState } from 'react'
import { searchMovies, getPopularMovies } from '../services/api'

import { useEffect } from 'react'

const Home = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const [movie, setMovie] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        const loadMovies = async () => {

            try {
                const popularMovies = await getPopularMovies();
                setMovie(popularMovies);
                console.log(popularMovies);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError('Failed to fetch movies. Please try again later.');
                console.log(error);

            }
        }


        loadMovies();
    }, [])


    const handleSearch = (e) => {
        e.preventDefault()
        alert(`Searching for ${searchQuery}`)
        setSearchQuery('*********')
    }

    return (
        <><form
            onSubmit={handleSearch}
            className="flex p-10 gap-3 mb-6"
        >
            <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
                Search
            </button>
        </form>


            {error && <p className="text-red-500 mb-4">{error}</p>}

            {loading ? <p>Loading...</p> : <div className='home grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {movie
                    .filter(m =>
                        m?.Title?.toLowerCase().startsWith(searchQuery.toLowerCase())
                    )
                    .map(m => (
                        <Moviecard key={m.imdbID} movie={m} />
                    ))
                }
            </div>}


        </>

    )
}

export default Home