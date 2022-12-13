import Moviedetailcard from "../components/Moviedetailcard"
import Moviecast from "../components/Moviecast"
import Movievideo from "../components/Movievideo"

function Moviedetail() {
    return (
      
        <div className='movieDetailPage'>
          <Moviedetailcard />
          <Moviecast />
          <Movievideo />
        </div>
    )
}

export default Moviedetail