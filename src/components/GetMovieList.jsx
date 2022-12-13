import React from 'react'
import { NavLink } from "react-router-dom";



function GetMovieList({movies, isLoading}) {

  return (
    <div className='displayMovie'>
               {isLoading ? (
       <div className="loader"></div>
      ) : (
        <>
        <div className="cardContainer">
            {movies?.map((movie, key) => (
               (movie.poster_path !== null) ?(
              <NavLink
                to={`/${movie.title.split(" ").join("-")}-${movie.id}`}
                className="movieCard"
                key={key}
              >
                <div className="cardImg">
                  {
                    <img
                      className="movieImg"
                      src={
                        "https://image.tmdb.org/t/p/original/" +
                        movie.poster_path
                      }
                    />
                  }
                </div>
                <div className="cardTitle">
                  <li className="cardHeader"> {movie.title}</li>
                  <li className="cardDate">{movie.release_date}</li>
                  <li className="cardScore">{movie.vote_average}</li>
                  <li className='cardDescription'>{movie.overview}</li>
                </div>
              </NavLink>)
              : null
                
            ))}
          </div>
          
        </>
      )}
    </div>
  )
}

export default GetMovieList