import React ,{ useState, useEffect }from 'react';
import { NavLink, useParams  } from "react-router-dom";
import "../assets/styles/Navbar.css";
const NavbarJournal = () => {
    const {journal} = useParams();
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
          <h1 class="title">Journal of ICT Research and Applications</h1>
          <div class="title">Institut Teknologi Bandung</div>
      </div>
     <nav className="nav_container">
       <div
         className={"nav__menu"}
         id="nav-menu"
       >
         <ul className="nav__list">
           <li className="nav__item">
             <NavLink to={`/${journal}`} className="nav__link">
               Home
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to={`/${journal}/issue`} className="nav__link">
               Issue
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to={`/${journal}/about`}
               className="nav__link"
             >
               About
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to={`/${journal}/editorial`} className="nav__link">
               Editorial Board
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to={`/${journal}/ethics`} className="nav__link">
               Publication Ethics
             </NavLink>
           </li>
           
           <li className="nav__item">
             <NavLink to={`/${journal}/guidelines`} className="nav__link">
               Author Guidelines
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to={`/${journal}/subscription`} className="nav__link">
               Subscriptions
             </NavLink>
           </li>
           
         </ul>
       </div>
      
     </nav>
     
   </header>
  )
}

export default NavbarJournal