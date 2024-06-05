import Layout from '../../components/Layout';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import {Link, } from "react-router-dom";
const Submission = () => {
    const [listArticle,setArticle] = useState([]);
    useEffect(() => {
        getArticles();
      }, []);
    const getArticles = async () => {
        axios.defaults.withCredentials=true;
        const response = await axios.get(`http://localhost:3001/articles/submission`)
        console.log(response.data)
        setArticle(response.data);
        console.log(listArticle)
    };
    const deleteJournal = async (path) => {
        try {
          await axios.delete(`http://localhost:3001/journal/${path}`);
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
                            <h5 class="card-title col">Hosted Journals</h5>
                            <Link class="col-2" to={`create`}><button class="btn btn-outline-primary w-100" >Create Journal</button></Link>
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
                                        <div class="btn-group col-2" role="group">
                                            <button  class="btn btn-outline-danger">Delete</button>
                                            <button href='#' class="btn btn-outline-warning align-middle">Edit</button>    
                                            <button href="#" class="btn btn-outline-primary">View</button>
                                            
                                        </div>
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