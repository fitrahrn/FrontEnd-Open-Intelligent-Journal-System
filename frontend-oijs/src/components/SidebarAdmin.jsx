import React ,{ useState }from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/images/itb.png"
const SidebarAdmin = () => {
  let isLogin = false;
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
                </ul>
            </div>
            </div>
        </div>
        </nav>
  )
}
export default SidebarAdmin



