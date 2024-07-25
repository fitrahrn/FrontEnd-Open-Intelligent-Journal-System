import React ,{ useState }from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/itb.png"
import profile from "../assets/images/profile.jpeg"
import axios from 'axios';

const SidebarAdmin = () => {
    const navigate = useNavigate();
    const Logout = async () => {
        try {
            await axios.post('https://backend-oijs-77pyv5kz2q-et.a.run.app/logout');
            localStorage.removeItem('accessToken');
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <nav class="navbar  bg-body-primary text-bg-primary border-bottom">
        <div class="container-fluid " id="navbarSupportedContent">
            <a class="navbar-brand d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-white" href="/">
            <img src={logo} alt={logo} width="40" height="40" class="me-2"/>
            OIJS
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Admin</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/admin/journal">Hosted Journal</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/admin/user">Users</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/admin/request">Role Request</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/admin/setting">Setting</a>
                        </li>
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
                    </ul>
                </div>
                
            </div>
        </div>
        </nav>
  )
}
export default SidebarAdmin



