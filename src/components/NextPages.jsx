import React from 'react'
import {NavLink} from "react-router-dom";


function NextPages({url, setLoading, setPages , pages, isLoading, movies}) {
    const changePage = (e) => {
     if( pages > 1 || Number(e.target.id) > -1){
      setPages(pages + Number(e.target.id));
      setLoading(true);
    }
    };
  return (
    <div className='otherPages'>
                           {isLoading ? (
       <div></div>
      ) : <>
                  <div className="otherPages">
                  { movies?.length <5 ?  
                  <>            <NavLink  to={`${url}/1`}><i className="fa-solid fa-angles-left otherPageLeftArrow" id={1 - pages} onClick={changePage}></i></NavLink>
                  <NavLink to={`${url}/${pages - 1}`} > <i className="fa-solid fa-chevron-left otherPageLeftArrow" id="-1" onClick={changePage}></i> </NavLink>
                  </>
                  :<>
            <NavLink  to={`${url}/1`}><i className="fa-solid fa-angles-left otherPageLeftArrow" id={1 - pages} onClick={changePage}></i></NavLink>
            <NavLink to={`${url}/${pages - 1}`} > <i className="fa-solid fa-chevron-left otherPageLeftArrow" id="-1" onClick={changePage}></i> </NavLink>
            {pages >= 3 ? (
              <>
             
                <NavLink
                  className="changePage"
                  id={-2}
                  to={`${url}/${pages - 2}`}
                  onClick={changePage}
                >
                  {pages - 2}
                </NavLink>{" "}
                <NavLink
                  className="changePage"
                  id={-1}
                  to={`${url}/${pages - 1}`}
                  onClick={changePage}
                >
                  {pages - 1}
                </NavLink>
              </>
            ) : pages === 2 ? (
              <NavLink
                className="changePage"
                to={`${url}/${pages - 1}`}
                onClick={changePage}
                id={-1}
              >
                {pages - 1}
              </NavLink>
            ) : undefined}
            <NavLink className="changePage" to={`${url}/${pages}`} id={0}>
              {pages}
            </NavLink>
            <NavLink
              className="changePage"
              to={`${url}/${pages + 1}`}
              id={1}
              onClick={changePage}
            >
              {pages + 1}
            </NavLink>
            <NavLink
              className="changePage"
              to={`${url}/${pages + 2}`}
              id={2}
              onClick={changePage}
            >
              {pages + 2}
            </NavLink>
            <NavLink to={`${url}/${pages + 1}`} > <i className="fa-solid fa-chevron-right otherPageRightArrow" id="1" onClick={changePage}></i> </NavLink>
            </>} </div></>}
        
    </div>
  )
}

export default NextPages