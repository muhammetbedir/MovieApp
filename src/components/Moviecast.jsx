import { NavLink } from 'react-router-dom'
import { useState, useEffect , useRef} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";


function Moviecast() {
    const { id } = useParams();
    const [cast, setCast] = useState([])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=afe36372ed68305effa3c9221c86cd2e&language=en-US`)
            .then(res => setCast(res.data.cast) )
      
    }, [id])
  return (
    <div className='MovieCast' >
        <h2 style={{color:"#fff", marginBottom: "30px"}}>Oyuncular</h2>
        <Swiper
        slidesPerView={4}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >

      {
      
        cast.map((person)=>(
            person.profile_path !== null ?
            <SwiperSlide key={person.id}>
            <NavLink  to={`/person/${person.id}`} className="castLink">
                <img className='castImg' src={`https://image.tmdb.org/t/p/original/${person.profile_path}`} style={{maxWidth:"200px"}} alt={person.name + " Image"} />
                <h2 className='castCharacterName'>{person.character}</h2>
                <h2 className='castRealName'>{person.original_name}</h2>
            </NavLink>
            </SwiperSlide>
            : undefined
        ))
      }

      </Swiper>
    </div>
  )
}

export default Moviecast