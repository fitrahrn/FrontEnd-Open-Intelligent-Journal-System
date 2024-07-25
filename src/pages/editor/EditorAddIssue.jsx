import {useNavigate,Link,useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import api from "../../interceptor/axios"
const EditorAddIssue = () => {
    const [listIssue,setIssue] = useState([]);
    const [number,setNumber] = useState("");
    const [volume,setVolume] = useState("");
    const [year,setYear] = useState("");
    const [urlPath,setUrlPath] = useState("");
    const [msg,setMsg] =useState("")
    const {journal} = useParams();
    const navigate = useNavigate();
    const addIssue = async (e) => {
        e.preventDefault();
        try {
            await api.post(`https://backend-oijs-77pyv5kz2q-et.a.run.app/issue/${journal}`,{
                volume:volume,
                number:number,
                year:year,
                url_path:urlPath
            });
            navigate(`/${journal}/manageIssue`);
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };
    return (
        <div className="container-fluid">
            <div className="card m-3">
                <div className="card-body">
                    <h1 className="h1 mb-3 fw-normal text-center mt-3">Create Issue</h1>
                    <p className="error" style={{color: "red"}}>{msg}</p>
                    <form className="content-container" onSubmit={addIssue}>
                        <div className="mb-3">
                            <label className="form-label">Volume</label>
                            <div className="control">
                                <input type="text" className="form-control" placeholder='Volume'value={volume} onChange={(e) => setVolume(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Number</label>
                            <div className="control">
                                <input type="text" className="form-control" placeholder='Number'value={number} onChange={(e) => setNumber(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Year</label>
                            <div className="control">
                                <input type="text" className="form-control" placeholder='Year'value={year} onChange={(e) => setYear(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">URL Path (An optional path to use in the URL instead of the ID.)</label>
                            <div className="control">
                                <input type="text" className="form-control" placeholder='UrlPath'value={urlPath} onChange={(e) => setUrlPath(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="row justify-content-end" >
                            <button type="cancel" class="col-2 mx-2 btn btn-lg btn-danger">Cancel</button>
                            <button type="submit" class="col-2 mx-2 btn btn-lg btn-primary">Create Issue</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div> 

    )
}
export default EditorAddIssue;