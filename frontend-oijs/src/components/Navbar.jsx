import React ,{ useState }from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/images/itb.png"
const Navbar = () => {
  return (
    
  <nav class="navbar navbar-expand-lg text-bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand text-white" href="/">
        
        OIJS
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
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
        <div class="col-md-3 text-end">
          <button class="btn btn-outline-light me-2">
            Login
          </button>
          <button class="btn btn-light text-primary">
            Sign-Up
          </button>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar