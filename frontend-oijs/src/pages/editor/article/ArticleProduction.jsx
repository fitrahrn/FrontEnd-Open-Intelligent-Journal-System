import React, { useState, useEffect } from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import ArticleSelectFilePhase from './ArticleSelectFilePhase';
const ArticleProduction = () => {
    const [listProduction,setProduction] = useState([]);
    const {article_id} = useParams();

    useEffect(() => {
        getProductions();
      }, []);
    
    const getProductions = async () => {
        
        const response = await axios.post(`http://localhost:3001/article_file/${article_id}`, {
            phase: "production",
        })
        setProduction(response.data);
    }
    return (
        <div class="tab-pane fade p-3" id="production"  role="tabpanel" aria-labelledby="production-tab" >
            
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
                
        </div> 
    );
}

export default ArticleProduction;