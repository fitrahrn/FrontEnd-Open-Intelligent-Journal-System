import {Link,useParams} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import api from "../../interceptor/axios"
import axios from "axios"
const EditorFutureIssue = () => {
    const [listIssue,setIssue] = useState([]);
    const {journal} = useParams();
    useEffect(() => {
        getIssue();
      }, []);
    const getIssue = async () => {
        const response = await api.get(`https://backend-oijs-77pyv5kz2q-et.a.run.app/issue/${journal}` )
        setIssue(response.data.filter((issue)=> issue.appear===false));
    };
    const publishIssue = async (id) => {
        try {
          await api.patch(`https://backend-oijs-77pyv5kz2q-et.a.run.app/issue/${id}`,{
            date_published: new Date(),
            appear: true
        });
          getIssue();
        } catch (error) {
          console.log(error);
        }
    };
    const deleteIssue = async (id) => {
        try {
          await api.delete(`https://backend-oijs-77pyv5kz2q-et.a.run.app/issue/${id}`);
          getIssue();
        } catch (error) {
          console.log(error);
        }
    };

    return (
        <div class="tab-pane fade show active p-3" id="future"  role="tabpanel" aria-labelledby="future-tab" >
            
            <div class="row card-body justify-content-between list-group-flush">
                <p class="card-subtitle mb-2 text-body-secondary col-1">Volume</p>
                <p class="card-subtitle mb-2 text-body-secondary col-1">Number</p>
                <p class="card-subtitle mb-2 text-body-secondary col-2">Year</p>
                <p class="card-subtitle mb-2 text-body-secondary col-3">Date Published</p>
                <p class="card-subtitle mb-2 text-body-secondary col-3"></p>
            </div>
            <ul class="list-group ">
                {listIssue.map((issue) => (
                        <li class="list-group-item">
                            <div class="row justify-content-between">
                                <p class="card-text col-1">{issue.volume}</p>
                                <p class="card-text col-1">{issue.number}</p>
                                <p class="card-text col-2">{issue.year}</p>
                                <p class="card-text col-3">{issue.date_published}</p>
                                <div class="btn-group col-3 ">
                                    <button onClick={() => deleteIssue(issue.issue_id)} class="btn btn-outline-danger">Delete</button>
                                    <Link to={`edit/${issue.issue_id}`} class="btn btn-outline-warning col-2">Edit</Link> 
                                    <button onClick={() => publishIssue(issue.issue_id)} class="btn btn-primary col-2" >Publish</button>    
                                </div>
                                

                            </div>
                        </li>
                    )
                )}
            </ul>
            <Link class="col-2" to={`/${journal}/create/issue`}><button class="btn btn-primary float-end m-3" >Create Issue</button></Link>
        </div> 
            
    );
}

export default EditorFutureIssue;