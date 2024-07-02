import axios from "axios";
import React, { useState, useEffect } from 'react';
import {Link,useParams} from "react-router-dom";
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
        
        const response = await axios.get(`http://localhost:3001/articles/${journal}`)
        setArticle(response.data);
    };
    
    return (
        <LayoutEditor>
            <div class="container-fluid">
                <div class="content-container">
                    <div class="card m-3 ">
                        <NavbarCardSubmission/>
                        <div class="tab-content" id="myTabContent">
                            <EditorSubmission  data={listArticle.filter((article)=>article.status ==="reviewers assigned")}/>
                            <EditorUnassigned data={listArticle.filter((article)=>article.status ==="not reviewed")}/>
                            <EditorArchives  data={listArticle.filter((article)=>article.status ==="archived")}/>
                        </div>
                            
                        
                    </div>
                </div>
            </div>
        </LayoutEditor>
    );
}

export default Editor;