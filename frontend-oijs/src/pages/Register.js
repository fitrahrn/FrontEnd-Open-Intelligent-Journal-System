import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
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
                                        <input type="text" className="input" placeholder="Family Name" value={name} onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Phone Number</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Phone Number" value={name} onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Affiliation</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Affiliation" value={name} onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Country</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Country" value={name} onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                </div>
                                <label>Which journals on this site would you like to register with? </label>
                                    <select >
                                        <option value="vigenereStandard">Journal of ICT Research and Applications </option>
                                        <option value="autoKeyVigenere">Journal of Engineering and Technological Sciences </option>
                                        <option value="extendedVigenere">Journal of Mathematical and Fundamental Sciences </option>
                                        <option value="playfair">Journal of Regional and City Planning </option>
                                        <option value="affine">Journal of Visual Art and Design </option>
                                        <option value="hill">Wimba : Jurnal Komunikasi Visual </option>
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