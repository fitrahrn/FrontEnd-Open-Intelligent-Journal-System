import React ,{ useState, useEffect }from 'react';
import { NavLink, useParams  } from "react-router-dom";
import "../assets/styles/Navbar.css";
const NavbarArticle= () => {
    const {journal,article} = useParams();
    console.log(journal);
    useEffect(() => {
        getJournal();
      }, []);
    
    const getJournal = async () => {

    };
  return (
    
    <header className="header">
      <div class="jumbotron">
          <nav>
            <div class='navProfileWrapper'>
              <ul class='navProfile'>
                <li class='profile'>
                  <NavLink to="/register" className="profile">
                    Register   
                  </NavLink>
                </li>
                <li class='profile'>
                  <NavLink to="/login" className="profile">
                    Login  
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <h1 class="title">Improving the Performance of Low-resourced Speaker Identification with Data Preprocessing</h1>
          <div class="title">Articlei Lai Phyu, Hay Mar Soe Naing, Win Pa Pa</div>
      </div>
     <nav className="nav_container">
       <div
         className={"nav__menu"}
         id="nav-menu"
       >
         <ul className="nav__list">
           <li className="nav__item">
             <NavLink to={`/${journal}/journal`} className="nav__link">
            Back to Queue
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to={`/${journal}/journal/${article}`} className="nav__link">
               Submssion
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to={`/${journal}/journal/${article}/review`} className="nav__link">
               Review
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to={`/${journal}/journal/${article}/copyediting`} className="nav__link">
               Copyediting
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to={`/${journal}/journal/${article}/production`} className="nav__link">
               Production
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to={`/${journal}/journal/${article}/publication`} className="nav__link">
               Publication
             </NavLink>
           </li>
           
         </ul>
       </div>
      
     </nav>
     
   </header>
  )
}

export default NavbarArticle