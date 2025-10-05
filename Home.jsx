import {getMovies, searchMovies} from './api';
import {useState, useEffect} from 'react'
import MovieCard from './movieCard'

function Home(){

    const [searchQuery,setSearchQuery] = useState("")
    const [movies,setMovies] = useState([])
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect( () => {
        const loadmovies = async () => {
            try{
                const popularMovies = await getMovies();
                setMovies(popularMovies)
                setError(null)
            }
            catch(err){
                console.log(err)
                setError("Failed to load movies")
            }
            finally{
                setLoading(false)
            }
        }
        loadmovies()
    },[])

    const handleSearch = async () => {
        setLoading(true)

        if(!searchQuery.trim()){
            try{
                const popularMovies = await getMovies();
                setMovies(popularMovies)
                setError(null)
            }
            catch(err){
                console.log(err)
                setError("Failed to load movies")
            }
            finally{
                setLoading(false)
            }
        }
        else{
            try{
                const searchedMovies = await searchMovies(searchQuery)
                setMovies(searchedMovies)
            }
            catch(err){
                console.log(err)
                setError("Failed to load movies")
            }
            finally{
                setLoading(false)
            }
        }
    }

    function handleKeyEvent(e){
        if(e.key === "Enter")
        handleSearch()
    }

    const handleInput = (e) => {
        setSearchQuery(e.target.value);
    }

    return (
        <>
        <div className='searchbar-div'>
        <input type = 'text' className='searchbar' onChange={handleInput} onKeyDown={handleKeyEvent}></input>
        <button className='search-btn' onClick={handleSearch}>Search</button>
        </div>
        <div>
        {
        movies.length ==0 ? <div className='no-movies-body'><span className='no-movies'>Oops! No movies found...</span></div>
        :
        <div className='movies-body'>{movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
        }
        </div>
        </>
    )
}

export default Home