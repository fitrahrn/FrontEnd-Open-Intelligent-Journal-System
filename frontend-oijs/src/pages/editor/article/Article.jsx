import axios from "axios";
import React, { useState, useEffect } from 'react';
import {Link,useParams} from "react-router-dom";
import NavbarCardArticle from "../../../components/NavbarCardArticle";
import LayoutEditor from "../../../components/LayoutEditor"
import ArticleSubmission from "./ArticleSubmission";
import ArticleReview from "./ArticleReview";
import ArticleCopyediting from "./ArticleCopyediting";
import ArticleProduction from "./ArticleProduction";
import ArticlePublication from "./ArticlePublication";
const Article = () => {
    const [article,setArticle] = useState("");
    const {journal,article_id} = useParams();
    useEffect(() => {
        getArticles();
      }, []);
    const getArticles = async () => {
        axios.defaults.withCredentials=true;
        const response = await axios.get(`http://localhost:3001/article/${article_id}`)
        setArticle(response.data);
        
    };
    return (
        <LayoutEditor>
            <div class="container-fluid">
                <div class="content-container">
                    <div class="card m-3 ">
                        <NavbarCardArticle/>
                        <div class="tab-content" id="myTabContent">
                            <ArticleSubmission  data={article}/>
                            <ArticleReview data={article}/>
                            <ArticleCopyediting  data={article}/>
                            <ArticleProduction  data={article}/>
                            <ArticlePublication  data={article}/>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutEditor>
    );
}

export default Article;