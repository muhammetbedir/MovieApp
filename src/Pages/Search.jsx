import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import GetMovieList from "../components/GetMovieList";
import NextPages from "../components/NextPages";

function Search({ pages, setPages, setLoading, isLoading , searchQuery}) {
   
    const [searchMovie, setSearchMovie] = useState([]);
    const { searchPage } = useParams();
    useEffect(() => {
    searchQuery !== undefined ? localStorage.setItem("search", JSON.stringify(searchQuery)) : "";
    
      axios
        .get(
          ` https://api.themoviedb.org/3/search/movie?api_key=afe36372ed68305effa3c9221c86cd2e&language=en-US&query=${localStorage.getItem("search")}&page=${searchPage}&include_adult=false`
        )
        .then((res) => setSearchMovie(res.data.results))
        .finally((e) => setLoading(false));
    }, [isLoading, searchQuery]);

  return (
    <div className="homePage">
              <GetMovieList movies={searchMovie} pages={pages} setPages={setPages} isLoading={isLoading} setLoading={setLoading}  />
              <NextPages url={`/search`} pages={pages} setPages={setPages} setLoading={setLoading} isLoading={isLoading} movies={searchMovie} />
    </div>
  )
}

export default Search