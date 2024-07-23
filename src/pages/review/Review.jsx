import Layout from '../../components/Layout';
import api from "../../interceptor/axios"
import React, { useState, useEffect } from 'react';
import {Link, } from "react-router-dom";
import axios from "axios"
const Review = () => {
    const [listReview,setReview] = useState([]);
    useEffect(() => {
        getReviews();
      }, []);
    const getReviews = async () => {
        api.defaults.withCredentials=true;
        const response = await api.get(`https://backend-dot-oijs-429910.et.r.appspot.com/reviewers/review`)
        setReview(response.data);
        console.log(response.data)
    };
    
    return (
        <Layout>
            <div class="container-fluid">
                <div class="content-container">
                    <div class="card m-3 p-3">
                        <h5 class="card-body card-title">Review Assigned</h5>
                        <div class="row card-body justify-content-between">
                            <p class="card-subtitle mb-2 text-body-secondary col-3">Journal</p>
                            <p class="card-subtitle mb-2 text-body-secondary col-3">Title</p>
                            <p class="card-subtitle mb-2 text-body-secondary col-2">Review Status</p>
                            <p class="card-subtitle mb-2 text-body-secondary col-2">Due Date</p>
                            <p class="card-subtitle mb-2 text-body-secondary col-2"></p>
                        </div>
                        {listReview.map((reviewers) => (
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <div class="row justify-content-between">
                                        <p class="card-text col-3">{reviewers.journal_title}</p>
                                        <p class="card-text col-3">{reviewers.review.article.title}</p>
                                        {reviewers.recommendation? <p class="card-text col-2">{reviewers.recommendation}</p> : <p class="card-text col-2">Not Reviewed</p>}
                                        <p class="card-text col-2">{reviewers.date_due}</p>
                                        <div class="btn-group col-2" role="group">
                                            <Link  to={`${reviewers.review.article_id}`}><button class="btn btn-outline-primary" >Review Article</button></Link>
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

export default Review;