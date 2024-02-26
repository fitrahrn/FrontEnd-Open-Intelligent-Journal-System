import React ,{ useState }from 'react';
import { NavLink } from "react-router-dom";
import "../assets/styles/Navbar.css";
const Navbar = () => {
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
          <h1 class="title">Open Intelligent Journal System</h1>
          <div class="title">Institut Teknologi Bandung</div>
      </div>
     <nav className="nav_container">
       <div
         className={"nav__menu"}
         id="nav-menu"
       >
         <ul className="nav__list">
           <li className="nav__item">
             <NavLink to="/" className="nav__link">
               Home
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/archives" className="nav__link">
               Archives
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/about"
               className="nav__link"
             >
               About
             </NavLink>
           </li>
         </ul>
       </div>
      
     </nav>
     
   </header>
  )
}

export default Navbar