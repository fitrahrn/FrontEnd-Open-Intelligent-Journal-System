import React ,{ useState }from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/images/itb.png"
import profile from "../assets/images/profile.jpeg"
const NavbarCardSubmission = () => {

  return (
    <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs" role="tablist">
            <li class="nav-item" role="presentation" >
                <button class="nav-link active" id="queue-tab" data-bs-toggle="tab" data-bs-target="#queue" type="button" role="tab" aria-controls="home" aria-current="true" >My Queue</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="unassigned-tab" data-bs-toggle="tab" data-bs-target="#unassigned" type="button" role="tab" aria-controls="unassigned" aria-selected="false" >Unassigned</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="archives-tab" data-bs-toggle="tab" data-bs-target="#archives" type="button" role="tab" aria-controls="archives"  aria-selected="false">Archives</button>
            </li>
        </ul>
    </div>
  );
}

export default NavbarCardSubmission