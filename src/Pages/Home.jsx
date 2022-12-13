import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import GetMovieList from "../components/GetMovieList";
import NextPages from "../components/NextPages";

function Home({ pages, setPages, setLoading, isLoading }) {
  const [movies, setMovies] = useState([]);
  const { page } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=afe36372ed68305effa3c9221c86cd2e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
      )
      .then((res) => setMovies(res.data.results))
      .finally((e) => setLoading(false));
  }, [isLoading]);
  return (
    <div className="homePage" id="body-top">
       <GetMovieList movies={movies} pages={pages} setPages={setPages} isLoading={isLoading} setLoading={setLoading}  />
       <NextPages url={`/page`} pages={pages} setPages={setPages} setLoading={setLoading} isLoading={isLoading} movies={movies}/>
    </div>
  );
}

export default Home;
