import React ,{ useState }from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/images/itb.png"
import profile from "../assets/images/profile.jpeg"
const Navbar = () => {
  let isLogin = true;
  return (
    
  <nav className="navbar navbar-expand-lg text-bg-primary border-bottom">
    <div className="container-fluid">
      
      <div className="collapse navbar-collapse d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" id="navbarSupportedContent">
        <a className="navbar-brand d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-white" href="/">
        <img src={logo} alt={logo} width="40" height="40" className="me-2"/>
          OIJS
        </a>
        <ul className="navbar-nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li className="nav-item">
            <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/archives">Archives</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/journalfinder">Recommend Journal</a>
          </li>
        </ul>
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input className="form-control" type="search" placeholder="Search..." aria-label="Search"/>
        </form>
        {
          isLogin ? 
            <div className="col-md-2 text-start">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={profile} alt="mdo" width="32" height="32" className="rounded-circle"/>
                </a>
                <ul className="dropdown-menu" id="dropdown">
                  <li><a className="dropdown-item" href="/submission">Dashboard</a></li>
                  <li><a className="dropdown-item" href="/profile">View Profile</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Sign Out</a></li>
                </ul>
              </li>
            </div>
              

            
           :
            <div className="col-md-3 text-end">
              <NavLink to="/login">
                <button className="btn btn-outline-light me-2">
                  Login
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className="btn btn-light text-primary">
                  Sign-Up
                </button>
              </NavLink>
            </div>
        }
        
      </div>
    </div>
  </nav>
  )
}

export default Navbar