import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

function Navbar({ setPages, setLoading, isLoading, searchQuery, setSearchQuery }) {
    const [isActive, setIsActive] = useState("")
    const [genreName, setGenreName] = useState([]);
    const [randomId, setRandomId] = useState(Math.floor(Math.random() * 40000));
    const [values, setValues] = useState("");
    let year = 1996;
    document.body.addEventListener("click", closeDropdown);
    function openDropdown(e) {
        isActive !== e.target.id ? setIsActive(e.target.id) : setIsActive("");
    }
    function closeDropdown(e) {
        if ((e.target.className !== "dropdownLi") && (e.target.className !== "activeBar")) {
            setIsActive("");
        }
    }
    const changeValues = () => {
        setSearchQuery(values)
        setValues("");
    }
    const changePage = (e) => {
        setLoading(true);
        setPages(1);
    }
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=afe36372ed68305effa3c9221c86cd2e&language=en-US`)
            .then(res => setGenreName(res.data.genres))
    }, [])
    const openHamburgerMenu = (e) => {
        e.target.className === "fa-solid fa-bars hamburgerMenu" ? e.target.className = "fa-solid fa-bars hamburgerMenu active" : e.target.className = "fa-solid fa-bars hamburgerMenu"
    }
    return (
        <ul className={isLoading ? "" : "navbar"}>
            {isLoading ? (
                <div></div>
            ) :
                <>
                    <NavLink to="/" className="logo" onClick={changePage}>The Movie</NavLink>
                    <i className="fa-solid fa-bars hamburgerMenu" onClick={openHamburgerMenu}></i>
                    <div className='navbarItems'>
                        <li onClick={openDropdown} id={"categories"} className={isActive === "categories" ? "activeBar" : "dropdownLi"}>Genres <i className="fa-sharp fa-solid fa-chevron-down"></i>
                            {
                                <ul className='categores dropdown'>
                                    {
                                        genreName.map((genre) => (
                                            <NavLink onClick={changePage} key={genre.id} className="dropdownLi" to={`/genres/${genre.id}-${genre.name}/1`}>{genre.name}</NavLink>
                                        ))
                                    }
                                </ul>
                            }
                        </li>
                        <li onClick={openDropdown} id={"years"} className={isActive === "years" ? "activeBar" : "dropdownLi"}>
                            Release Date <i className="fa-sharp fa-solid fa-chevron-down"></i>
                            <ul className='years dropdown'>
                                {

                                    Array.from(Array(13), (e, i) => {
                                        year = year + 2;
                                        return <NavLink onClick={changePage} key={i} className="dropdownLi" to={`/year/${year}/1`}>{year}-{year + 1}</NavLink>

                                    })
                                }
                            </ul>
                        </li>
                        <NavLink onClick={() => setRandomId(Math.floor(Math.random() * 40000))} className="liItem" to={`random-${randomId}`}>Random Movie</NavLink>
                        <NavLink onClick={changePage} className="liItem" to="/best">Best</NavLink>
                        <div className="searchBox">
                            <input  className="searchInput" type="text" value={values} onChange={(e) => setValues(e.target.value)} placeholder="Search"/>
                            <NavLink onClick={changeValues} className="searchButton" to={`/search/1`}>
                                <i className="material-icons">
                                    search
                                </i>
                            </NavLink>
                        </div>
                    </div>

                </>}
        </ul>

    )

}

export default Navbar;
