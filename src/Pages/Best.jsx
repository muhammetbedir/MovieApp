import {useState, useEffect} from 'react'
import GetMovieList from '../components/GetMovieList'
import NextPages from '../components/NextPages'
import { useParams } from "react-router-dom";
import axios from 'axios';

function Best({pages, setPages, setLoading, isLoading}) {
    const [bestMovies, setBestMovies] = useState([]);
    const { page } = useParams();
  
    useEffect(() => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=afe36372ed68305effa3c9221c86cd2e&language=en-US&page=${page}`
        )
        .then((res) => setBestMovies(res.data.results))
        .finally((e) => setLoading(false));
    }, [isLoading]);
  return (
    <div className='bestPage'>
     <GetMovieList movies={bestMovies} pages={pages} setPages={setPages} isLoading={isLoading} setLoading={setLoading}  />
       <NextPages url={`/best`} pages={pages} setPages={setPages} setLoading={setLoading} isLoading={isLoading} movies={bestMovies} />
    </div>
  )
}

export default Best