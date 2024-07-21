import api from "../../interceptor/axios"
import axios from "axios"
import React, { useState, useEffect } from 'react';
import {Link,useParams} from "react-router-dom";
import NavbarCardArticle from "../../components/NavbarCardArticle";
import ArticleSubmission from "../editor/article/ArticleSubmission";
import ArticleReview from "../editor/article/ArticleReview";
import ArticleCopyediting from "../editor/article/ArticleCopyediting";
import ArticleProduction from "../editor/article/ArticleProduction";
import ArticlePublication from "../editor/article/ArticlePublication";
import Layout from "../../components/Layout";
const SubmissionDetail = () => {
    const [article,setArticle] = useState("");
    const {journal,article_id} = useParams();
    useEffect(() => {
        getArticles();
      }, []);
    const getArticles = async () => {
        
        const response = await api.get(`https://oijs-429910.et.r.appspot.com/article/${article_id}`)
        setArticle(response.data);
        
    };
    return (
        <Layout>
            <div class="container-fluid">
                <div class="content-container">
                    <div class="card m-3 ">
                        <NavbarCardArticle/>
                        <div class="tab-content" id="myTabContent">
                            <ArticleSubmission  data={article} role={"author"}/>
                            <ArticleReview data={article} role={"author"}/>
                            <ArticleCopyediting  data={article} role={"author"}/>
                            <ArticleProduction  data={article} role={"author"}/>
                            <ArticlePublication  data={article} role={"author"}/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default SubmissionDetail;