import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Moviedetail from './Pages/Moviedetail'
import Genres from './Pages/Genres'
import YearList from './Pages/YearList'
import Best from './Pages/Best'
import Actor from './Pages/Actor'
import Search from './Pages/Search'

function App() {
  const [pages, setPages] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState();
  return (
    <div className="App">
      <Navbar setPages={setPages} setLoading={setLoading} isLoading={isLoading} searchQuery={searchQuery} setSearchQuery={setSearchQuery}  />
      <Routes>
        <Route path="/" element={<Home   setPages={setPages} pages={pages} isLoading={isLoading} setLoading={setLoading}  />} >
          <Route path='page/:page' element={<Home  setPages={setPages} pages={pages} />}/>
          </ Route>
        <Route exact path=":name-:id" element={<Moviedetail isLoading={isLoading} setLoading={setLoading} />} />
        <Route exact path="/genres/:genreId-:genreName/:genrePage" element={<Genres isLoading={isLoading} setLoading={setLoading} setPages={setPages} pages={pages}  />} />
        <Route exact path="/year/:year/:yearPage" element={<YearList isLoading={isLoading} setLoading={setLoading} setPages={setPages} pages={pages}  />} />
        <Route exact path="/best" element={<Best isLoading={isLoading} setLoading={setLoading} setPages={setPages} pages={pages}  />} />
        <Route exact path='/person/:personId' element={<Actor isLoading={isLoading} setLoading={setLoading} />} />
        <Route exact path="/search/:searchPage" element={< Search  isLoading={isLoading} setLoading={setLoading} setPages={setPages} pages={pages} searchQuery={searchQuery} />}/>
      </Routes>
    </div>
  )
}

export default App
