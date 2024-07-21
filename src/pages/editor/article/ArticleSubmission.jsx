import React, { useState, useEffect } from 'react';
import {Link,useParams} from "react-router-dom";
import api from "../../../interceptor/axios"
import ArticleAddReviews from './ArticleAddReviews';
import ArticleAddContributors from './ArticleAddContributors';
import ArticleUploadFile from './ArticleUploadFile';
const ArticleSubmission = ({data,role}) => {
    const [listContributors,setContributors] = useState([]);
    const {article_id} = useParams();
    const [articleFile,setArticleFile] = useState([])
    const [msg,setMsg] = useState([])
    useEffect(() => {
        getContributors();
        getArticleFiles();
      }, []);
    
    const getContributors = async () => {
        const response = await api.get(`https://oijs-429910.et.r.appspot.com/contributors/article/${article_id}`)
        setContributors(response.data);
    }
    const getArticleFiles = async () => {
        
        const response = await api.get(`https://oijs-429910.et.r.appspot.com/article_file/${article_id}`)
        const listFile = response.data
        for(let i=0;i<listFile.length;i++){
            let article_path = response.data[i].article_path
            const article_path_split = article_path.split("/");
            let fileName = article_path_split[article_path_split.length - 1]
            listFile[i].file_name = fileName
        }
        setArticleFile(listFile);
    }
    const answerReview = async (workflowPhase,status) => {
        const formData = new FormData();
        formData.append("workflow_phase",workflowPhase);
        formData.append("status",status);
        try {
            await api.patch(`https://oijs-429910.et.r.appspot.com/article/${article_id}`, formData, {
              "Content-type": "multipart/form-data",
            });
          } catch (error) {
            setMsg(error);
          }
    };
    return (
        <div class="tab-pane fade show active p-3 row" id="submission"  role="tabpanel" aria-labelledby="submission-tab" >
            <ArticleAddReviews/>
            <div>
                <div class="card mb-3">
                    <div class="card-header">
                        Article Information
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{data.title}</h5>
                        <p class="card-subtitle mb-2">{data.subtitle}</p>
                        <p c>{data.abstract}</p>
                        <p class="card-text">{data.keywords}</p>
                        {role ==="editor" && data.workflow_phase==="submitted"?<div class="btn-group float-end" role="group">
                            <button onClick={()=>answerReview("declined","declined")} class="btn btn-outline-danger">Decline Submission</button>
                            <button onClick={()=>answerReview("copyedited","accepted")}class="btn btn-outline-primary">Accept and Skip Review</button>    
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addReview">Send to Review</button>
                        </div>: <div></div>}
                        
                    </div>
                </div>
                <div class="card container-fluid mb-3">
                    <ArticleAddContributors/>
                    <div class="card-header row">
                        <p class="card-text col">Contributors</p>
                        <button class="col-2 btn btn-primary" data-bs-toggle="modal" data-bs-target="#addContributors">Add Contributors</button>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Author</h5>
                        {listContributors.map((user) => (
                            <ul class="list-group list-group-flush ">
                                <li class="list-group-item ">
                                    <div class="row justify-content-between">
                                        <p class="card-text">{user.user.name}</p>
                                    </div>
                                    
                                </li>

                            </ul>
                            )
                        )}
                    </div>
                </div>
                <div class="card container-fluid mb-3">
                    <ArticleUploadFile/>
                    <div class="card-header row">
                        <p class="card-text col">Submission File</p>
                        <button class="col-2 btn btn-primary" data-bs-toggle="modal" data-bs-target="#uploadFile">Upload New Files</button>
                    </div>
                    <div class="card-body">
                        {articleFile.map((file) => (
                            <div className='row mb-2'>
                                <p  class="card-text col">{file.file_name}</p>
                                <Link class="btn btn-outline-primary col-2 me-3" to={file.article_path} target="_blank" download>Download</Link>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
                
        </div> 
    );
}

export default ArticleSubmission;