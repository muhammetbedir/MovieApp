import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Moviedetailcard() {
    const [selectedMovieDetails, setSelectedMovieDetails] = useState({});
    const { name, id } = useParams();
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=afe36372ed68305effa3c9221c86cd2e&language=en-US`)
            .then(res => setSelectedMovieDetails(res.data))
    }, [id])
  return (
    <div style={{width:"100%"}}>
          {
                <div className='movie-info' style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${selectedMovieDetails.backdrop_path}")` }}>
                    <div className="movie-detail-img">
                        <img src={`https://image.tmdb.org/t/p/original${selectedMovieDetails.poster_path}`} alt="" style={{ width: "300px" }} />
                        <a href={selectedMovieDetails.homepage} className="movieHomePage" onClick={(e)=> selectedMovieDetails.homepage === "" ? alert("Film anasayfası mevcut değil!") : e.target.target = "blank"}>Hemen İzle</a>
                    </div>
                    <div className="movie-info-text">

                        <div className="movieScore">
                            <h2>{selectedMovieDetails.title}({selectedMovieDetails.release_date?.slice(0, 4)})</h2>
                            <div className="scoreLabel">TM  {(selectedMovieDetails.vote_average)}</div>
                        </div>
                        <div className="movieLanguage"><span>Dil </span> : {selectedMovieDetails.original_language?.toUpperCase()}</div>
                        <div className='movieYear'><span>Yapım</span>  : <NavLink className="movieYearLink" to={`/year/${selectedMovieDetails.release_date?.slice(0, 4)}/1`}> {selectedMovieDetails.release_date?.slice(0, 4)} Filmleri</NavLink></div>
                        <div className="movieGenres"><span className='genresHeader'>Tür </span>:
                            {(selectedMovieDetails.genres)?.map((genre) => (
                                <NavLink to={`/genres/${genre.id}-${genre.name}/1`} key={genre.id} className='movieGenre'>{genre.name}</NavLink>
                            ))}
                        </div>
                        <p className='movieOverview'>{selectedMovieDetails.overview}</p>
                            <div className="movieImdb"><a href={`https://www.imdb.com/title/${selectedMovieDetails.imdb_id}`} target="_blank" rel="noopener noreferrer">IMDb</a></div>
                    </div>
                </div>
            }
    </div>
  )
}

export default Moviedetailcard