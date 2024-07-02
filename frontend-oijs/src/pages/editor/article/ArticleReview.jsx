import React, { useState, useEffect } from 'react';
import {Link,useParams} from "react-router-dom";
import axios from "axios";
import ArticleAddReviewers from './ArticleAddReviewers';
import ArticleAddReviews from './ArticleAddReviews';
const ArticleReview = ({data}) => {
    const [listReviews,setReviews] = useState([]);
    const {article_id} = useParams();

    useEffect(() => {
        getReviews();
      }, []);
    
    const getReviews = async () => {
        
        const response = await axios.get(`http://localhost:3001/reviews/${article_id}`)
        const listFile = response.data
        for(let i=0;i<listFile.length;i++){
            let article_path = response.data[i].article_file_path
            const article_path_split = article_path.split("/");
            let fileName = article_path_split[article_path_split.length - 1]
            listFile[i].file_name = fileName
        }
        console.log(response.data)
        setReviews(listFile);
        
    }
    return (
        <div class="tab-pane fade p-3" id="review"  role="tabpanel" aria-labelledby="review-tab" >
            <ArticleAddReviews/>
            {listReviews.length>0 ?
                listReviews.map((review) => (
                    <div class="card mb-3">
                        <h5 class="card-header">Review Rounds {review.review_rounds}</h5>
                        <div class="card body border-light m-3">
                            <div class="card mb-3">
                                <div class="card-header">
                                    Review File
                                </div>
                                <div class="card-body row">
                                    <p  class="card-text col">{review.file_name}</p>
                                </div>
                            </div>
                            <div class="card container-fluid mb-3">
                                <ArticleAddReviewers data={review}/>
                                <div class="row no-gutters card-header ">
                                    <p class="card-text col">Reviewers</p>
                                    <button class="col-2 btn btn-primary" data-bs-toggle="modal" data-bs-target="#addReviewers">Add Reviewers</button>
                                </div>
                                
                                <div class="card-body row">
                                    <div class="row card-body justify-content-between">
                                        <p class="card-subtitle mb-2 text-body-secondary col-3">Name</p>
                                        <p class="card-subtitle mb-2 text-body-secondary col-2">Review Status</p>
                                        <p class="card-subtitle mb-2 text-body-secondary col-2">Date Due</p>
                                        <p class="card-subtitle mb-2 text-body-secondary col-2">Date Completed</p>
                                    </div>
                                    {review.reviewers.map((reviewers) => (
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">
                                            
                                                <div class="row justify-content-between">
                                                    <p class="card-text col-3">{reviewers.user.name}</p>
                                                    {reviewers.recommendation? <p class="card-text col-2">{reviewers.recommendation}</p> : <p class="card-text col-2">Not Reviewed</p>}
                                                    <p class="card-text col-2">{reviewers.date_due}</p>
                                                    <p class="card-text col-2">{reviewers.date_completed}</p>
                                                </div>
                                                
                                            </li>
                                        </ul>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    )
                )
             : 
            <div>

            </div> 
            }
            <button class="btn btn-primary float-end m-3" data-bs-toggle="modal" data-bs-target="#addReview">Add New Review Rounds</button>
        </div> 
    );
}

export default ArticleReview;