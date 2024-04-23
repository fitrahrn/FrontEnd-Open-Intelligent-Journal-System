import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Register = () => {
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
    const navigate = useNavigate();

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
                mailing_address:"",
                signature:"",
                country:country,
            });
            navigate("/login");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Register} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <h1 className='title'>Register</h1>
                                <h2 className='title'>Account Information</h2>
                                <div className="field mt-5">
                                    <label className="label">Username</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Confirm Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)}/>
                                    </div>
                                </div>
                                <br/>
                                <h2 className='title'>Profile Information</h2>
                                <div className="field mt-5">
                                    <label className="label">Name</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Family Name</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Family Name" value={familyName} onChange={(e) => setFamilyName(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Phone Number</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Affiliation</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Affiliation" value={affiliation} onChange={(e) => setAffiliation(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Country</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)}/>
                                    </div>
                                </div>
                                <label>Which journals on this site would you like to register with? </label>
                                    <select >
                                        <option value="journalICT">Journal of ICT Research and Applications </option>
                                        <option value="journalETS">Journal of Engineering and Technological Sciences </option>
                                        <option value="journalMFS">Journal of Mathematical and Fundamental Sciences </option>
                                        <option value="journalRCP">Journal of Regional and City Planning </option>
                                        <option value="journalVAD">Journal of Visual Art and Design </option>
                                        <option value="journalVisual">Wimba : Jurnal Komunikasi Visual </option>
                                    </select>
                                <div className="field mt-5">
                                    <button className="submit">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;