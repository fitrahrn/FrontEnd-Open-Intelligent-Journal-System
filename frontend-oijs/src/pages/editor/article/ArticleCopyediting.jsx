import React, { useState, useEffect } from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import ArticleSelectFilePhase from './ArticleSelectFilePhase';
const ArticleCopyediting = () => {
    const [listCopyEditing,setCopyEditing] = useState([]);
    const [listCopyEdited,setCopyEdited] = useState([]);
    const {article_id} = useParams();

    useEffect(() => {
        getCopyEditings();
        getCopyEditeds();
      }, []);
    
    const getCopyEditings = async () => {
        
        const response = await axios.post(`http://localhost:3001/article_file/${article_id}`, {
            phase: "copyediting",
        })
        setCopyEditing(response.data);
    }
    const getCopyEditeds = async () => {
        
        const response = await axios.post(`http://localhost:3001/article_file/${article_id}`, {
            phase: "copyedited",
        })
        setCopyEdited(response.data);
    }
    return (
        <div class="tab-pane fade p-3" id="copyediting"  role="tabpanel" aria-labelledby="copyediting-tab" >
            
                <div class="card container-fluid mb-3">
                    <ArticleSelectFilePhase data="copyediting"/>
                    <div class="card-header row">
                        <p class="card-text col">Draft File</p>
                        <button class="col-2 btn btn-primary" data-bs-toggle="modal" data-bs-target="#selectFile">Select Files</button>
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
                        <button class="col-2 btn btn-primary" data-bs-toggle="modal" data-bs-target="#selectFile">Select Files</button>
                    </div>
                    <div class="card-body row">
                        {listCopyEdited.length>0? listCopyEdited.map((review) => (
                            <p  class="card-text col">{review.file_name}</p>
                         )) : 
                         <p class="card-text">No Files</p>}
                    </div>
                </div>
                
        </div> 
    );
}

export default ArticleCopyediting;