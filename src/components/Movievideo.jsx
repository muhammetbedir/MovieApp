import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";


function Movievideo() {
    const [videos, setVideo] = useState();
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=afe36372ed68305effa3c9221c86cd2e&language=en-US`)
            .then(res => setVideo(res.data.results))
            console.log(videos)
    }, [id])
  return (
    <div className='movieVideo'>
                <h2 style={{color:"#fff", marginBottom: "30px"}}>Videolar</h2>
                <Swiper slidesPerView={3.5} navigation={true} modules={[Navigation]} className="mySwiper">
        {
            videos?.map((video) => (
                video.key !== null ?
                <SwiperSlide key={video.id}  >
                     <iframe width="400" height="400" src={`https://www.youtube.com/embed/${video.key}`} title="Why I Don’t Use useEffect In My React Components" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{cursor:"pointer"}}></iframe>
                 </SwiperSlide>
                 :undefined
            ) )
        }
            </Swiper>
    </div>
  )
}

export default Movievideo