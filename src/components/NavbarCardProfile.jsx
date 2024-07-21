import React ,{ useState }from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/images/itb.png"
import profile from "../assets/images/profile.jpeg"
const NavbarCardProfile = () => {

  return (
    <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs" role="tablist">
            <li class="nav-item" role="presentation" >
                <button class="nav-link active" id="identity-tab" data-bs-toggle="tab" data-bs-target="#identity" type="button" role="tab" aria-controls="home" aria-current="true" >Identity</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false" >Contact</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="roles-tab" data-bs-toggle="tab" data-bs-target="#roles" type="button" role="tab" aria-controls="roles"  aria-selected="false">Roles</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="public-tab" data-bs-toggle="tab" data-bs-target="#public" type="button" role="tab" aria-controls="public"  aria-selected="false">Public</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="password-tab" data-bs-toggle="tab" data-bs-target="#password" type="button" role="tab" aria-controls="password"  aria-selected="false">Password</button>
            </li>
        </ul>
    </div>
  );
}

export default NavbarCardProfile