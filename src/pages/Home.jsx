import Moviecard from '../components/Moviecard'
import { useState } from 'react'
const movie = [{
    id: 1,
    title: 'Kantara',
    release_date: '2022-10-20'
},
{
    id: 2,
    title: 'KGF',
    release_date: '2021-10-20'
},
{
    id: 3,
    title: 'RRR',
    release_date: '2022-10-20'
},
{
    id: 4,
    title: 'GOlmal',
    release_date: '2002-10-20'
}

]

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('')
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

            <div className='home grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {movie.map(movie =>
                    movie.title.toLowerCase().startsWith(searchQuery) && (
                        <Moviecard key={movie.id} movie={movie} />
                    )
                )}
            </div>
        </>

    )
}

export default Home