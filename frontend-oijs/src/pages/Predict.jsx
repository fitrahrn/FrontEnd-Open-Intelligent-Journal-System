import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import Layout from '../components/Layout';
import axios from 'axios';
const Predict = () => {
    const [title, setTitle] = useState("");
    const [abstract, setAbstract] = useState("");
    const [result1, setResult1] = useState("");
    const [result2, setResult2] = useState("");
    const [result3, setResult3] = useState("");
    const [msg, setMsg] = useState("");
    const Predict = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title",title);
        formData.append("abstract",abstract);
        try {
            let response = await axios.post('http://127.0.0.1:5000/predict', formData);
            setResult1(response.data.prediction)
            setResult2(response.data.prediction2)
            setResult3(response.data.prediction3)
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    return (
        <Layout>
            
            <div className="container-fluid ">
                <div className="card m-3 p-3" >
                    <div className='card-body '>
                        <form  onSubmit={Predict}>
                            <p className="error" style={{color: "red"}}>{msg}</p>
                            <h1 className="h3 mb-3 fw-normal text-center">Recommend Journal</h1>
                            <p className='card-text'>Recommend the right journal based on your paper title and abstract.</p>
                            <div className='mb-4'>
                                <label className="card-label">Title</label>
                                <div className="control">
                                    <input type="text" className="form-control" placeholder='Enter Your Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <label className="card-label">Abstract</label>
                                <div className="control">
                                    <textarea type="text" className="form-control" placeholder='Enter Your Abstract' value={abstract} onChange={(e) => setAbstract(e.target.value)}/>
                                </div>
                            </div>
                            <button className="w-100 btn btn-primary btn-lg">Recommend Journal</button>
                        </form>
                    </div>
                        
                </div>
                {result1 !== ""?<div className="card m-3 p-3" >
                    <div className='card-body '>
                        <p className='card-text'>Journal Recommend Result: </p>
                        {result1.includes("Journal") ?<p className='card-label fw-bold'>1. {result1}</p>:<p className='card-label fw-bold'>1. Journal of {result1}</p>}
                        {result2.includes("Journal") ?<p className='card-label fw-bold'>2. {result2}</p>:<p className='card-label fw-bold'>2. Journal of {result2}</p>}
                        {result3.includes("Journal") ?<p className='card-label fw-bold'>3. {result3}</p>:<p className='card-label fw-bold'>3. Journal of {result3}</p>}
                    </div>
                        
                </div>:<div></div>}
            </div>
        </Layout>
    );
}

export default Predict;