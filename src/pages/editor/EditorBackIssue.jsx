import {Link,useParams} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import api from "../../interceptor/axios"
const EditorBackIssue = () => {
    const [listIssue,setIssue] = useState([]);
    const {journal} = useParams();
    useEffect(() => {
        getIssue();
      }, []);
    const getIssue = async () => {
        const response = await api.get(`https://backend-oijs-77pyv5kz2q-et.a.run.app/issue/${journal}`)
        setIssue(response.data.filter((issue)=> issue.appear===true));
    };
    return (
        <div class="tab-pane fade p-3" id="back"  role="tabpanel" aria-labelledby="back-tab" >
            <div class="row card-body justify-content-between list-group-flush">
                <p class="card-subtitle mb-2 text-body-secondary col-1">Volume</p>
                <p class="card-subtitle mb-2 text-body-secondary col-1">Number</p>
                <p class="card-subtitle mb-2 text-body-secondary col-2">Year</p>
                <p class="card-subtitle mb-2 text-body-secondary col-3">Date Published</p>
                <p class="card-subtitle mb-2 text-body-secondary col-4"></p>
            </div>
            {listIssue.map((issue) => (
                <ul class="list-group ">
                    <li class="list-group-item">
                        <div class="row justify-content-between">
                            <p class="card-text col-1">{issue.volume}</p>
                            <p class="card-text col-1">{issue.number}</p>
                            <p class="card-text col-2">{issue.year}</p>
                            <p class="card-text col-3">{issue.date_published}</p>
                            <div class="btn-group col-4 ">
                                <Link to={`edit/${issue.id}`} class="btn btn-outline-warning">Edit</Link>    
                                <button href="#" class="btn btn-outline-primary">Preview</button>
                            </div>
                        </div>
                        
                    </li>

                </ul>
                )
            )}
        </div> 
            
    );
}

export default EditorBackIssue;