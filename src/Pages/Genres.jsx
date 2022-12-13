import {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import GetMovieList from '../components/GetMovieList';
import NextPages from '../components/NextPages';

function Genres({isLoading, setLoading, setPages, pages}) {
    const { genreId , genreName,genrePage } = useParams();
  const [genreMovies, setGenreMovies] = useState();

    useEffect(() => {
        axios
          .get(
            ` https://api.themoviedb.org/3/discover/movie?api_key=afe36372ed68305effa3c9221c86cd2e&with_genres=${genreId}&page=${genrePage}`
           
          )
          .then((res) => setGenreMovies(res.data.results))
          .finally((e)=> setLoading(false))
      }, [isLoading, genreId]);
  return (
    <div className='genrePage'>
     
     <GetMovieList movies={genreMovies} pages={pages} setPages={setPages} isLoading={isLoading} setLoading={setLoading}  />
     <NextPages url={`/genres/${genreId}-${genreName}`} pages={pages} setPages={setPages} setLoading={setLoading} isLoading={isLoading} movies={genreMovies} />
    </div>
   
   
  )
}

export default Genres