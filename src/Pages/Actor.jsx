import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

function Actor({setLoading, isLoading }) {
    const { personId } = useParams();
    const [personData, setPersonData] = useState([]);
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/person/${personId}?api_key=afe36372ed68305effa3c9221c86cd2e&language=en-US`)
        .then(res => setPersonData(res.data) )
        console.log(personData);
    },[])
  return (
    <div className='actorPage'>
                <Navbar />
                  {
                    <>
                    <div className="movie-detail-img">
                        <img src={`https://image.tmdb.org/t/p/original${personData.profile_path}`} alt="" style={{ width: "300px" }} />
                    </div>
                    <div className="movie-info-text">

                        <div className="movieScore">
                            <h2>{personData.name}({personData.birthday})</h2>
                            <h2>{personData.biography}</h2>
                            <h2>{personData.known_for_department}</h2>
                        </div>
                        <div className='actorPopularity'><span>Popularity</span>  : {personData.popularity} </div>
                            <div className="movieImdb"><a href={`https://www.imdb.com/name/${personData.imdb_id}`} target="_blank" rel="noopener noreferrer">IMDb</a></div>
                    </div>
                    </>
            }
    </div>
  )
}

export default Actor