import React ,{ useState }from 'react';
import { Link,useParams  } from "react-router-dom";
const NavbarJournal = () => {
    const {journal} = useParams();
    return (
    
    <nav className="navbar navbar-expand-lg text-primary bg-body-tertiary border-bottom w-50">
        <div className="container-fluid">
        <div className="collapse navbar-collapse d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" id="navbarSupportedContent">
            <ul className="navbar-nav col-12 col-lg-auto me-lg-auto  justify-content-center mb-md-0">
                <li className="nav-item">
                    <a className="nav-link active text-primary" aria-current="page" href={`/${journal}`}>Journal</a>
                </li>
                <li className="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-primary" href={`/${journal}/issue`} role="button" data-bs-toggle="dropdown" aria-expanded="false">Issue</a>
                    <ul className="dropdown-menu" id="dropdown">
                        <li><a className="dropdown-item " href={`/${journal}/issue/current`}>Current</a></li>
                        <li><a className="dropdown-item " href={`/${journal}/issue`}>Archives</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-primary" href={`/${journal}/about`}>About</a>
                </li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default NavbarJournal