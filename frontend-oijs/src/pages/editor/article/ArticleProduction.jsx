import React, { useState, useEffect } from 'react';
import api from "../../../interceptor/axios"
import axios from "axios"
import {useParams} from "react-router-dom";
import ArticleSelectFilePhase from './ArticleSelectFilePhase';
const ArticleProduction = ({data,role}) => {
    const [listProduction,setProduction] = useState([]);
    const {article_id} = useParams();
    const [msg,setMsg] = useState("");
    useEffect(() => {
        getProductions();
      }, []);
    
    const getProductions = async () => {
        
        const response = await api.post(`http://localhost:3001/article_file/${article_id}`, {
            phase: "production",
        })
        setProduction(response.data);
    }
    const answerReview = async (workflowPhase,status) => {
        const formData = new FormData();
        formData.append("workflow_phase",workflowPhase);
        formData.append("status",status);
        try {
            await api.patch(`http://localhost:3001/article/${article_id}`, formData, {
              "Content-type": "multipart/form-data",
            });
          } catch (error) {
            setMsg(error);
          }
    };
    return (
        <div class="tab-pane fade p-3" id="production"  role="tabpanel" aria-labelledby="production-tab" >
            {role === "author" && data.workflow_phase !=="production" ? 
            <p className='card-text'>Production stage has not yet been initiated.</p> 
            :
                <div>
                    <div class="card container-fluid mb-3">
                        <ArticleSelectFilePhase data="production"/>
                        <div class="card-header row">
                            <p class="card-text col">Production Ready Files</p>
                            <button class="col-2 btn btn-primary" data-bs-toggle="modal" data-bs-target="#selectFile">Select Files</button>
                        </div>
                        <div class="card-body row">
                            {listProduction.length>0? listProduction.map((review) => (
                                <p  class="card-text col">{review.file_name}</p>
                            )) : 
                            <p class="card-text">No Files</p>}
                            
                        </div>
                        
                    </div>
                    <button onClick={()=>answerReview("published","accepted")} class="btn btn-primary float-end m-3" >Schedule for Publication</button>
                </div>
                
            }
                
        </div> 
    );
}

export default ArticleProduction;