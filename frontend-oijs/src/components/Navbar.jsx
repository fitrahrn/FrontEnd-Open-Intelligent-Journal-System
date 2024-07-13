import React ,{ useState }from 'react';
import { NavLink,useNavigate, useParams } from "react-router-dom";
import logo from "../assets/images/itb.png"
import profile from "../assets/images/profile.jpeg"
import axios from 'axios';
const Navbar = () => {
  let isLogin = false;
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');
  const {title} = useParams();
  const [searching,setSearching] = useState()
  if (token) {
    isLogin=true;
  }
  const Logout = async () => {
    try {
        await axios.post('http://localhost:3001/logout');
        isLogin = false;
        localStorage.removeItem('accessToken');
        navigate("/");
    } catch (error) {
        console.log(error);
    }
  }
  const search = async () => {
    navigate(`/search/${searching}`)
  }
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
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search" onSubmit={search}>
          <input className="form-control" type="search" placeholder={title ? title:"Search..."} aria-label="Search" onChange={(e) => setSearching(e.target.value)}/>
        </form>
        {
          isLogin ? 
            <div className="col-md-2 text-start">
              <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={profile} alt="mdo" width="32" height="32" className="rounded-circle"/>
                </a>
                <ul className="dropdown-menu" id="dropdown">
                  <li><a className="dropdown-item" href="/dashboard">Dashboard</a></li>
                  <li><a className="dropdown-item" href="/profile">View Profile</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><button onClick={()=>Logout()} className="dropdown-item">
                        Log Out
                      </button>
                  </li>
                </ul>
              </div>
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