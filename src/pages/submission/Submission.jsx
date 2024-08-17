import Layout from '../../components/Layout';
import React, { useState, useEffect } from 'react';
import {Link, } from "react-router-dom";
import api from "../../interceptor/axios"
const Submission = () => {
    const [listArticle,setArticle] = useState([]);
    const [msg,setMsg] = useState([])
    useEffect(() => {
        getArticles();
      }, []);
    const getArticles = async () => {
        try {
            const response = await api.get(`https://backend-oijs-77pyv5kz2q-et.a.run.app/articles/submission`)
            setArticle(response.data);
          } catch (error) {
            setMsg('Error fetching protected data:', error);
          }
    };
    const deleteArticle = async (id) => {
        try {
            await api.delete(`https://backend-oijs-77pyv5kz2q-et.a.run.app/contributors/${id}`);
            await api.delete(`https://backend-oijs-77pyv5kz2q-et.a.run.app/article_file/${id}`);
            await api.delete(`https://backend-oijs-77pyv5kz2q-et.a.run.app/article/${id}`);
            getArticles();
        } catch (error) {
          console.log(error);
        }
    };
    
    return (
        <Layout>
            <div class="container-fluid">
                <div class="content-container">
                    <div class="card m-3 p-3">
                        <div class="row card-body">
                            <h5 class="card-title col">Article Submitted</h5>
                            <Link class="col-2" to={`submit`}><button class="btn btn-outline-primary w-100" >Create Article</button></Link>
                        </div>
                        <div class="row card-body justify-content-between">
                        <p class="card-subtitle mb-2 text-body-secondary col-3">Journal</p>
                            <p class="card-subtitle mb-2 text-body-secondary col-3">Title</p>
                            <p class="card-subtitle mb-2 text-body-secondary col-2">Review Status</p>
                            <p class="card-subtitle mb-2 text-body-secondary col-2">Workflow Phase</p>
                            <p class="card-subtitle mb-2 text-body-secondary col-2"></p>
                        </div>
                        {listArticle.map((article) => (
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <div class="row justify-content-between">
                                        <p class="card-text col-3">{article.journal_title}</p>
                                        <p class="card-text col-3">{article.article.title}</p>
                                        <p class="card-text col-2">{article.article.status}</p>
                                        <p class="card-text col-2">{article.article.workflow_phase}</p>
    
                                        {article.article.workflow_phase==="submitted"?
                                        <div class="btn-group col-2" role="group">
                                            <button onClick={() => deleteArticle(article.article_id)} class="btn btn-outline-danger">Delete</button>
                                            <button class="btn btn-outline-warning align-middle"><Link class="link-underline-opacity-0 link-warning" to={`edit/${article.article.article_id}`} >Edit</Link></button>  
                                            <button class="btn btn-outline-primary align-middle"><Link class="link-underline-opacity-0 link-primary" to={`article/${article.article.article_id}`} >View</Link></button>   
                                            
                                        </div>
                                        :<button class="btn btn-outline-primary col-2"><Link class="link-underline-opacity-0 link-primary" to={`article/${article.article.article_id}`} >View</Link></button>}
                                    </div>
                                    
                                </li>

                            </ul>
                             )
                            )
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Submission;