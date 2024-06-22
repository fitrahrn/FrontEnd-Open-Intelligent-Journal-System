import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Layout from '../../components/Layout';

const Register = () => {
    const [listJournal,setListJournal] = useState([]);
    const [name, setName] = useState("");
    const [familyName, setFamilyName] = useState("");
    const [phone, setPhone] = useState("");
    const [affiliation, setAffiliation] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [journal,setJournal] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        getJournals();
      }, []);
    const getJournals = async () => {
        axios.defaults.withCredentials=true;
        const response = await axios.get(`http://localhost:3001/journals`)
        console.log(response.data)
        setListJournal(response.data);
        setJournal(response.data[0].path)
    };
    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/register', {
                name: name,
                public_name: familyName,
                username: username,
                email: email,
                password: password,
                confPassword: confPassword,
                phone: phone,
                ocid_id:"",
                affiliation:affiliation,
                mailing_address:email,
                signature:"",
                country:country,
                journal_id:journal
            });
            navigate("/login");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <Layout>

            <body>
                <div class="form-signin container w-75 m-auto">
                    <main>
                        <form onSubmit={Register} class="box">
                            <p class="has-text-centered">{msg}</p>
                            <h2 class='h2 mb-3 fw-normal text-center'>Register</h2>
                            <h3 class='h3 mb-3 fw-normal text-center'>Account Information</h3>
                            <div class= "mb-3">
                                <label class="form-label">Username</label>
                                <div class="controls">
                                    <input type="text" class="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                                </div>
                            </div>
                            <div class= "mb-3">
                                <label class="form-label">Email</label>
                                <div class="controls">
                                    <input type="text" class="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div class= "mb-3">
                                <label class="form-label">Password</label>
                                <div class="controls">
                                    <input type="password" class="form-control" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            </div>
                            <div class= "mb-3">
                                <label class="form-label">Confirm Password</label>
                                <div class="controls">
                                    <input type="password" class="form-control" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)}/>
                                </div>
                            </div>
                            <br/>
                            <h3 class='h3 mb-3 fw-normal text-center'>Profile Information</h3>
                            <div class= "mb-3">
                                <label class="form-label">Name</label>
                                <div class="controls">
                                    <input type="text" class="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                                </div>
                            </div>
                            <div class= "mb-3">
                                <label class="form-label">Family Name</label>
                                <div class="controls">
                                    <input type="text" class="form-control" placeholder="Family Name" value={familyName} onChange={(e) => setFamilyName(e.target.value)}/>
                                </div>
                            </div>
                            <div class= "mb-3">
                                <label class="form-label">Phone Number</label>
                                <div class="controls">
                                    <input type="text" class="form-control" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                </div>
                            </div>
                            <div class= "mb-3">
                                <label class="form-label">Affiliation</label>
                                <div class="controls">
                                    <input type="text" class="form-control" placeholder="Affiliation" value={affiliation} onChange={(e) => setAffiliation(e.target.value)}/>
                                </div>
                            </div >
                            <div class= "mb-3">
                                <label class="form-label">Country</label>
                                <div class="controls">
                                    <input type="text" class="form-control" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)}/>
                                </div>
                            </div>
                            <label class="form-select-label">Which journals on this site would you like to register with? </label>
                            <select class="form-select mb-3" onChange={(e) => setJournal(e.target.value)} value={journal} required>
                            {listJournal.map((option) => (
                                <option key={option.journal_id} value={option.journal_id}>
                                {option.title}
                                </option>
                            ))}
                            </select>
                            <div >
                                <button class="w-100 btn btn-primary btn-lg">Register</button>
                            </div>
                        </form>
                    </main>
                    <footer class="my-5 pt-5 text-center text-small ">
                        <p class="mb-1 text-center">@ 2024 Open Intelligent Journal System</p>
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <a href="#">Privacy</a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#">Terms</a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#">Support</a>
                            </li>
                            
                        </ul>
                    </footer>
                </div>
                
            </body>            
        </Layout>
    );
}

export default Register;