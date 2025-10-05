function MovieCard({movie}){

    const addFavorite = () => {

    }

    return(
        <div className="movie-card">
            <div className="image-div">
                <img src ='' alt = {movie.title}></img>
            </div>
            <div className="movie-detail">
                <span>{movie.title}</span>
                <span className="date-text">{movie.release_date?.split('-')[0]}</span>
                <button className="fav-button" onClick={addFavorite}>♥</button>
            </div> 
        </div>
    )
}

export default MovieCard