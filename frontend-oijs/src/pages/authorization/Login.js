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
            navigate(`/home`);
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    return (
        <Layout>

            <body class="d-flex align-items-center justify-content-center ">
                <div class="form-signin container w-25 m-auto" >
                    <form  onSubmit={Login}>
                        <p class="error" style={{color: "red"}}>{msg}</p>
                        <h1 class="h3 mb-3 fw-normal text-center">Log In</h1>
                        <div >
                            <label class="form-label">Email</label>
                            <div class="control">
                                <input type="text" class="form-control" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div >
                            <label class="form-label">Password</label>
                            <div class="control">
                                <input type="password" class="form-control" placeholder='******' value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div class="d-flex flex-row justify-content-between">
                            <div class="form-check text-start my-3">
                                <input id="remember-me" class="form-check-input" type="checkbox" />
                                <label for="remember-me" class="form-check-label">Remember me</label>
                            </div>
                            <NavLink to="/" class="align-items-center link-dark mt-3 link-opacity-50-hover">Forget Password?</NavLink>
                        </div>
                            
                        <button class="w-100 btn btn-primary btn-lg">Login</button>

                        <div class="link" >
                            <p class="fw-light mt-3" to="/register">Don't have an account?</p>
                            <NavLink to="/register" class=" fw-light mt-3 link-opacity-50-hover">Sign Up</NavLink>
                        </div>
                    </form>
                </div>
            </body>
                        
        </Layout>
        
    );
}

export default Login;