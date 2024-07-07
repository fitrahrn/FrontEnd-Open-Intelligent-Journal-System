import api from "../../interceptor/axios"
import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import NavbarCardSubmission from "../../components/NavbarCardSubmission";
import EditorSubmission from "./EditorSubmission"
import EditorArchives from "./EditorArchive";
import EditorUnassigned from "./EditorUnassigned";
import LayoutEditor from "../../components/LayoutEditor";
const Editor = () => {
    const [listArticle,setArticle] = useState([]);
    const {journal} = useParams();
    useEffect(() => {
        getArticles();
      }, []);
    const getArticles = async () => {
        
        const response = await api.get(`http://localhost:3001/articles/${journal}`)
        setArticle(response.data);
    };
    
    return (
        <LayoutEditor>
            <div class="container-fluid">
                <div class="content-container">
                    <div class="card m-3 ">
                        <NavbarCardSubmission/>
                        <div class="tab-content" id="myTabContent">
                            <EditorSubmission  data={listArticle.filter((article)=>article.workflow_phase ==="reviewing" || article.workflow_phase ==="copyedited"||article.workflow_phase ==="production")}/>
                            <EditorUnassigned data={listArticle.filter((article)=>article.workflow_phase ==="submitted")}/>
                            <EditorArchives  data={listArticle.filter((article)=>article.workflow_phase ==="published"||article.workflow_phase ==="scheduled")}/>
                        </div>
                            
                        
                    </div>
                </div>
            </div>
        </LayoutEditor>
    );
}

export default Editor;