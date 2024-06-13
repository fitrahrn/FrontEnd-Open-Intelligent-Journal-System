import React ,{ useState }from 'react';
import { NavLink } from "react-router-dom";

const NavbarCardIssue = () => {

  return (
    <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs" role="tablist">
            <li class="nav-item" role="presentation" >
                <button class="nav-link active" id="future-tab" data-bs-toggle="tab" data-bs-target="#future" type="button" role="tab" aria-controls="home" aria-current="true" >Future Issue</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="back-tab" data-bs-toggle="tab" data-bs-target="#back" type="button" role="tab" aria-controls="unassigned" aria-selected="false" >Back Issue</button>
            </li>
        </ul>
    </div>
  );
}

export default NavbarCardIssue