import React, { useState, useEffect } from 'react';
import api from "../../../interceptor/axios"
import {useParams} from "react-router-dom";
import ArticleSelectFilePhase from './ArticleSelectFilePhase';
const ArticleCopyediting = ({data,role}) => {
    const [listCopyEditing,setCopyEditing] = useState([]);
    const [listCopyEdited,setCopyEdited] = useState([]);
    const {article_id} = useParams();
    const [msg,setMsg] = useState("");
    useEffect(() => {
        getCopyEditings();
        getCopyEditeds();
      }, []);
    
    const getCopyEditings = async () => {
        
        const response = await api.post(`http://localhost:3001/article_file/${article_id}`, {
            phase: "copyediting",
        })
        const listFile = response.data
        for(let i=0;i<listFile.length;i++){
            let article_path = response.data[i].article_path
            const article_path_split = article_path.split("/");
            let fileName = article_path_split[article_path_split.length - 1]
            listFile[i].file_name = fileName
        }
        setCopyEditing(listFile);
    }
    const getCopyEditeds = async () => {
        
        const response = await api.post(`http://localhost:3001/article_file/${article_id}`, {
            phase: "copyedited",
        })
        const listFile = response.data
        for(let i=0;i<listFile.length;i++){
            let article_path = response.data[i].article_path
            const article_path_split = article_path.split("/");
            let fileName = article_path_split[article_path_split.length - 1]
            listFile[i].file_name = fileName
        }
        setCopyEdited(listFile);
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
        getCopyEditings();
    };
    return (
        <div class="tab-pane fade p-3" id="copyediting"  role="tabpanel" aria-labelledby="copyediting-tab" >
            {role === "author" && data.workflow_phase !=="copyediting" ? 
            <p className='card-text'>Copyediting stage has not yet been initiated.</p> 
            :
                <div>
                    <div class="card container-fluid mb-3">
                        <ArticleSelectFilePhase data="copyediting"/>
                        <div class="card-header row">
                            <p class="card-text col">Draft File</p>
                            <button class="col-2 btn btn-primary" data-bs-toggle="modal" data-bs-target="#addFile">Select Files</button>
                        </div>
                        <div class="card-body row">
                            {listCopyEditing.length>0? listCopyEditing.map((review) => (
                                <p  class="card-text col">{review.file_name}</p>
                            )) : 
                            <p class="card-text">No Files</p>}
                        </div>
                    </div>

                    <div class="card container-fluid mb-3">
                        <ArticleSelectFilePhase data="copyedited"/>
                        <div class="card-header row">
                            <p class="card-text col">Copyedited</p>
                            <button class="col-2 btn btn-primary" data-bs-toggle="modal" data-bs-target="#addFile">Select Files</button>
                        </div>
                        <div class="card-body row">
                            {listCopyEdited.length>0? listCopyEdited.map((review) => (
                                <p  class="card-text col">{review.file_name}</p>
                            )) : 
                            <p class="card-text">No Files</p>}
                        </div>
                    </div>
                    <button onClick={()=>answerReview("production","accepted")} class="btn btn-primary float-end m-3" >Send to Production</button>
                </div>
                
}
        </div> 
    );
}

export default ArticleCopyediting;