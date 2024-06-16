import React, { useState, useEffect } from 'react';
import LayoutArticle from '../../../components/LayoutArticle';
import {Link,useParams} from "react-router-dom";
import axios from "axios";
import ArticleAddReviews from './ArticleAddReviews';
const ArticleSubmission = ({data}) => {
    const [listContributors,setContributors] = useState([]);
    const {article_id} = useParams();

    useEffect(() => {
        getContributors();
      }, []);
    
    const getContributors = async () => {
        console.log(data)
        const response = await axios.get(`http://localhost:3001/contributors/article/${article_id}`)
        setContributors(response.data);
    }
    
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
                        <div class="btn-group float-end" role="group">
                            <button class="btn btn-outline-danger">Decline Submission</button>
                            <button class="btn btn-outline-primary">Accept and Skip Review</button>    
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addReview">Send to Review</button>
                        </div>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="card-header">
                        Participants
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
                <div class="card mb-3">
                    <div class="card-header">
                        Submission File
                    </div>
                    <div class="card-body row">
                        <p  class="card-text col">{data.title}.pdf</p>
                        <Link class="btn btn-outline-primary col-2 me-3" to={data.article_path} target="_blank" download>Download</Link>
                    </div>
                </div>
            </div>
                
        </div> 
    );
}

export default ArticleSubmission;