import {useState, useEffect} from 'react'
import { useParams , NavLink} from "react-router-dom";
import GetMovieList from '../components/GetMovieList';
import NextPages from '../components/NextPages';
import axios from 'axios';


function YearList({isLoading, setLoading, setPages, pages}) {
    const {year, yearPage} = useParams();
    const [yearMovies, setYearMovies] = useState();
    useEffect(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/discover/movie?api_key=afe36372ed68305effa3c9221c86cd2e&language=en-US&sort_by=release_date.desc&page=${yearPage}&release_date.gte=${year}-01-01&release_date.lte=${Number(year) + 1}-01-01`
           
          )
          .then((res) => setYearMovies(res.data.results))
          .finally((e)=> setLoading(false))
          console.log(yearMovies)
      }, [isLoading, year]);
  return (
    <div className='yearPage'>
             
     <GetMovieList movies={yearMovies} pages={pages} setPages={setPages} isLoading={isLoading} setLoading={setLoading}  />
     <NextPages url={`/year/${year}`} pages={pages} setPages={setPages} setLoading={setLoading} isLoading={isLoading} movies={yearMovies} />
    </div>
  )
}

export default YearList