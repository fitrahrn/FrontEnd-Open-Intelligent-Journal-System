import {useNavigate,Link,useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import api from "../../interceptor/axios"
const EditorEditIssue = () => {
    const [number,setNumber] = useState("");
    const [volume,setVolume] = useState("");
    const [year,setYear] = useState("");
    const [urlPath,setUrlPath] = useState("");
    const [msg,setMsg] =useState("")
    const {journal,issue_id} = useParams();
    const [date,setDate] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        getIssue();
      }, []);
    const getIssue = async () => {
        const response = await api.get(`https://backend-oijs-77pyv5kz2q-et.a.run.app/issue/id/${issue_id}`)
        setVolume(response.data.volume);
        setNumber(response.data.number)
        setYear(response.data.year)
        setDate(response.data.date_published);
        setUrlPath(response.data.url_path);
    };
    const editIssue = async (e) => {
        e.preventDefault();
        try {
            await api.patch(`https://backend-oijs-77pyv5kz2q-et.a.run.app/issue/${issue_id}`,{
                volume:volume,
                number:number,
                year:year,
                url_path:urlPath,
                date_published: date,
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
                    <form className="content-container" onSubmit={editIssue}>
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
                            <button type="cancel" onClick={() => navigate(-1)} class="col-2 mx-2 btn btn-lg btn-danger">Cancel</button>
                            <button type="submit" class="col-2 mx-2 btn btn-lg btn-primary">Edit Issue</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div> 

    )
}
export default EditorEditIssue;