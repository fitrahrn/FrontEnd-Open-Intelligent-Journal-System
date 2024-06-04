import React, {useState, useEffect} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
import Layout from '../../components/Layout';
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
            navigate(`/`);
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    return (
        <Layout>

            <div className="d-flex align-items-center justify-content-center ">
                <div className="form-signin container w-25 m-auto" >
                    <form  onSubmit={Login}>
                        <p className="error" style={{color: "red"}}>{msg}</p>
                        <h1 className="h3 mb-3 fw-normal text-center">Log In</h1>
                        <div >
                            <label className="form-label">Email</label>
                            <div className="control">
                                <input type="text" className="form-control" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div >
                            <label className="form-label">Password</label>
                            <div className="control">
                                <input type="password" className="form-control" placeholder='******' value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <div className="form-check text-start my-3">
                                <input id="remember-me" className="form-check-input" type="checkbox" />
                                <label htmlFor="remember-me" className="form-check-label">Remember me</label>
                            </div>
                            <NavLink to="/" className="align-items-center link-dark mt-3 link-opacity-50-hover">Forget Password?</NavLink>
                        </div>
                            
                        <button className="w-100 btn btn-primary btn-lg">Login</button>

                        <div className="link" >
                            <p className="fw-light mt-3" to="/register">Don't have an account?</p>
                            <NavLink to="/register" className=" fw-light mt-3 link-opacity-50-hover">Sign Up</NavLink>
                        </div>
                    </form>
                </div>
            </div>
                        
        </Layout>
        
    );
}

export default Login;