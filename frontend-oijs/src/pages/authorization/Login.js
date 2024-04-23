import React, {useState, useEffect} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const Login = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/login', {
                email: email,
                password: password
            });
            navigate(`/home`);
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    return (
        <section>
        <div >
            <div >
                <div >
                    <div >
                        <form  onSubmit={Login} className="box">
                        <p className="error" style={{color: "red"}}>{msg}</p>
                            <h1>Log In</h1>
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input type="password" className="input" placeholder='******' value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="plaintext">Keep me Logged</label>
                            </div>
                            <div className="field mt-5">
                                <button className="submit">Login</button>
                            </div>

                            <div className="link" >
                                <p to="/register">Don't have an account?</p>
                                <NavLink to="/register">Sign Up</NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Login;