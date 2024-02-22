import React, {useState, useEffect} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [isAdmin, setIsAdmin] = useState("");
    const [user_id, setUserId] = useState("");
    return (
        <section>
        <div >
            <div >
                <div >
                    <div >
                        <form  >
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