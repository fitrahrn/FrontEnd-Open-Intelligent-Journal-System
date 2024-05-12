import React ,{ useState }from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/images/itb.png"
const Navbar = () => {
  let isLogin = true;
  return (
    
  <nav class="navbar navbar-expand-lg text-bg-primary border-bottom">
    <div class="container-fluid">
      
      <div class="collapse navbar-collapse d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" id="navbarSupportedContent">
        <a class="navbar-brand d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-white" href="/">
        <img src={logo} alt={logo} width="40" height="40" class="me-2"/>
          OIJS
        </a>
        <ul class="navbar-nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/archives">Archives</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/about">About</a>
          </li>
        </ul>
        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input class="form-control" type="search" placeholder="Search..." aria-label="Search"/>
        </form>
        {
          isLogin ? 
            <div class="col-md-2 text-start">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"/>
                </a>
                <ul class="dropdown-menu" id="dropdown">
                  <li><a class="dropdown-item" href="/submission">Dashboard</a></li>
                  <li><a class="dropdown-item" href="#">View Profile</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Sign Out</a></li>
                </ul>
              </li>
            </div>
              

            
           :
            <div class="col-md-3 text-end">
              <button class="btn btn-outline-light me-2">
                Login
              </button>
              <button class="btn btn-light text-primary">
                Sign-Up
              </button>
            </div>
        }
        
      </div>
    </div>
  </nav>
  )
}

export default Navbar