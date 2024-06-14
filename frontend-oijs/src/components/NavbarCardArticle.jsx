import React ,{ useState }from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/images/itb.png"
import profile from "../assets/images/profile.jpeg"
const NavbarCardArticle = () => {

  return (
    <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs" role="tablist">
            <li class="nav-item" role="presentation" >
                <button class="nav-link active" id="submission-tab" data-bs-toggle="tab" data-bs-target="#submission" type="button" role="tab" aria-controls="home" aria-current="true" >Submission</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button" role="tab" aria-controls="review" aria-selected="false" >Review</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="copyediting-tab" data-bs-toggle="tab" data-bs-target="#copyediting" type="button" role="tab" aria-controls="copyediting"  aria-selected="false">Copyediting</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="production-tab" data-bs-toggle="tab" data-bs-target="#production" type="button" role="tab" aria-controls="production"  aria-selected="false">Production</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="publication-tab" data-bs-toggle="tab" data-bs-target="#publication" type="button" role="tab" aria-controls="publication"  aria-selected="false">Publication</button>
            </li>
        </ul>
    </div>
  );
}

export default NavbarCardArticle