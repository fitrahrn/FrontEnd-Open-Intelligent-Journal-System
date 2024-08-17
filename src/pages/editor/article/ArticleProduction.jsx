import React, { useState, useEffect } from 'react';
import api from "../../../interceptor/axios"
import {useParams} from "react-router-dom";
import ArticleSelectFileProduction from './ArticleSelectFileProduction';
const ArticleProduction = ({data,role}) => {
    const [listProduction,setProduction] = useState([]);
    const {article_id} = useParams();
    const [msg,setMsg] = useState("");
    useEffect(() => {
        getProductions();
      }, []);
    
    const getProductions = async () => {
        
        const response = await api.get(`https://backend-oijs-77pyv5kz2q-et.a.run.app/article/${article_id}`)
        const listFile = response.data
        let article_path = response.data.article_path
        const article_path_split = article_path.split("/");
        let fileName = article_path_split[article_path_split.length - 1]
        listFile.file_name = fileName
        setProduction(listFile);
    }
    const publishArticle = async (workflowPhase,status) => {
        const formData = new FormData();
        formData.append("workflow_phase",workflowPhase);
        formData.append("status",status);
        try {
            await api.patch(`https://backend-oijs-77pyv5kz2q-et.a.run.app/article/${article_id}`, formData, {
              "Content-type": "multipart/form-data",
            });
          } catch (error) {
            setMsg(error);
          }
        getProductions();
    };
    return (
        <div class="tab-pane fade p-3" id="production"  role="tabpanel" aria-labelledby="production-tab" >
            {role === "author" && data.workflow_phase !=="production" ? 
            <p className='card-text'>Production stage has not yet been initiated.</p> 
            :
                <div>
                    <div class="card container-fluid mb-3">
                        <ArticleSelectFileProduction data="production"/>
                        <div class="card-header row">
                            <p class="card-text col">Production Ready Files</p>
                            <button class="col-2 btn btn-primary" data-bs-toggle="modal" data-bs-target="#selectFileProduction">Select Files</button>
                        </div>
                        <div class="card-body row">
                            <p  class="card-text col">{listProduction.file_name}</p>
                            
                        </div>
                        
                    </div>
                    {role !== "author" ?<button onClick={()=>publishArticle("published","accepted")} class="btn btn-primary float-end m-3" >Schedule for Publication</button>:<div/>}
                </div>
                
            }
                
        </div> 
    );
}

export default ArticleProduction;