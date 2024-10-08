import React ,{ useState,useEffect }from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/itb.png"
import api from "../interceptor/axios"
import {Link,useParams} from "react-router-dom";
import profile from "../assets/images/profile.jpeg"
const SidebarAdmin = () => {
  const {journal} = useParams();
  const [journalName,setJournal]= useState([]);
  const navigate = useNavigate();
    const Logout = async () => {
        try {
            await api.post('http://localhost:3001/logout');
            localStorage.removeItem('accessToken');
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getJournal();
      }, []);
    const getJournal = async () => {
        const response = await api.get(`http://localhost:3001/journal/${journal}`)
        setJournal(response.data);
    };
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
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">{journalName.title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href={`/${journal}/submission`}>Submission</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href={`/${journal}/manageIssue`}>Issue</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href={`/${journal}/request`}>Role Request</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href={`/${journal}/settings`}>Setting</a>
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



