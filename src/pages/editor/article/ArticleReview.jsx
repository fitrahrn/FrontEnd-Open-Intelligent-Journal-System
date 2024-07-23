import React, { useState, useEffect } from 'react';
import {Link,useParams} from "react-router-dom";
import api from "../../../interceptor/axios"
import axios from 'axios';
import ArticleAddReviewers from './ArticleAddReviewers';
import ArticleAddNewReviews from './ArticleAddNewReviews';
import ArticleDetailReviews from './ArticleDetailReview';
const ArticleReview = ({data,role}) => {
    const [listReviews,setReviews] = useState([]);
    const {article_id} = useParams();
    const [msg,setMsg] = useState("");
    const [result1, setResult1] = useState("");
    const [result2, setResult2] = useState("");
    const [result3, setResult3] = useState("");
    useEffect(() => {
        getReviews();
      }, []);
    
    const getReviews = async () => {
        
        const response = await api.get(`https://backend-dot-oijs-429910.et.r.appspot.com/reviews/${article_id}`)
        const listFile = response.data
        for(let i=0;i<listFile.length;i++){
            let article_path = response.data[i].article_file_path
            const article_path_split = article_path.split("/");
            let fileName = article_path_split[article_path_split.length - 1]
            listFile[i].file_name = fileName
        }
        setReviews(listFile);
    }
    const answerReview = async (workflowPhase,status) => {
        const formData = new FormData();
        formData.append("workflow_phase",workflowPhase);
        formData.append("status",status);
        try {
            await api.patch(`https://backend-dot-oijs-429910.et.r.appspot.com/article/${article_id}`, formData, {
                "Content-type": "multipart/form-data",
            });
            for(let i=0;i<data.authors.length;i++){
                await api.post(`https://backend-dot-oijs-429910.et.r.appspot.com/email/submission`, {
                    email: data.authors[i].email,
                    author:data.authors[i].name,
                    title:data.title,
                    subtitle:data.subtitle,
                    decision:"Submission "+ status,
                    journal: data.journal.title,
                });
            }
            
        } catch (error) {
            setMsg(error);
        }
        window.location.reload();
    };
    const Predict = async (title,abstract) => {
        const formData = new FormData();
        formData.append("title",title);
        formData.append("abstract",abstract);
        try {
            let response = await axios.post('http://127.0.0.1:5000/predict', formData);
            setResult1(response.data.prediction)
            setResult2(response.data.prediction2)
            setResult3(response.data.prediction3)
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    const detailReviews = document.getElementById('detailReviews')
    if (detailReviews) {
    detailReviews.addEventListener('show.bs.modal', event => {
        // Button that triggered the modal
        const button = event.relatedTarget
        // Extract info from data-bs-* attributes
        const recipient1 = button.getAttribute('data-bs-review-author')
        const recipient2= button.getAttribute('data-bs-review-editor')
        // If necessary, you could initiate an Ajax request here
        // and then do the updating in a callback.

        // Update the modal's content.
        const authorReview = detailReviews.querySelector('#authorReview')
        const editorReview = detailReviews.querySelector('#editorReview')
        authorReview.textContent = `${recipient1}`
        editorReview.textContent = `${recipient2}`
    })
    }
    return (
        <div class="tab-pane fade p-3" id="review"  role="tabpanel" aria-labelledby="review-tab" >
            
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
                            {role ==="editor" && review.review_rounds===listReviews.length?<ArticleAddReviewers data={review} title={data.title} subtitle={data.subtitle}/> :<div></div>}
                                <div class="row no-gutters card-header ">
                                    <p class="card-text col">Reviewers</p>
                                    {role ==="editor"  && review.review_rounds===listReviews.length?<button class="col-2 btn btn-primary" data-bs-toggle="modal" data-bs-target="#addReviewers">Add Reviewers</button> :<div></div>}
                                </div>
                                
                                <div class="card-body row">
                                    <div class="row card-body justify-content-between">
                                        <p class="card-subtitle mb-2 text-body-secondary col-3">Name</p>
                                        <p class="card-subtitle mb-2 text-body-secondary col-2">Review Status</p>
                                        <p class="card-subtitle mb-2 text-body-secondary col-2">Date Due</p>
                                        <p class="card-subtitle mb-2 text-body-secondary col-2">Date Completed</p>
                                        <p class="card-subtitle mb-2 text-body-secondary col-2"></p>
                                    </div>
                                    {review.reviewers.map((reviewers) => (
                                        <ul class="list-group list-group-flush">
                                            <ArticleDetailReviews data={reviewers}/>
                                            <li class="list-group-item">
                                                <div class="row justify-content-between">
                                                    <p class="card-text col-3">{reviewers.user.name}</p>
                                                    {reviewers.recommendation? <p class="card-text col-2">{reviewers.recommendation}</p> : <p class="card-text col-2">Not Reviewed</p>}
                                                    <p class="card-text col-2">{reviewers.date_due}</p>
                                                    <p class="card-text col-2">{reviewers.date_completed}</p>
                                                    {reviewers.author_review ? <button className='btn btn-primary col-2'data-bs-toggle="modal" data-bs-target="#detailReviews" data-bs-review-author={reviewers.author_review} data-bs-review-editor={reviewers.editor_review}>Reviews Detail</button>:<div className=' col-2'></div>}
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
            <p className='card-text'>The review process has not yet been initiated.</p> 
            }
            <ArticleAddNewReviews/>
            {role ==="editor" && data.workflow_phase === "reviewing"?<div className='row justify-content-end'>
                
                <button onClick={()=>answerReview("reviewing","need revisions")} class="btn btn-outline-warning col-2 m-1" >Request Revisions</button>
                <button onClick={()=>answerReview("declined","declined")} class="btn btn-danger col-2 m-1" >Decline Submission</button>
                <button onClick={()=>answerReview("copyedited","accepted")} class="btn btn-primary col-2 m-1" >Accept Submission</button>
                <button class="btn btn-outline-primary col-2 m-1" data-bs-toggle="modal" data-bs-target="#addNewReview">Add New Review Rounds</button>
            </div>:<div></div>}
            {data.workflow_phase==="declined" ?
                <div class="card mb-3">
                    <div class="card body border-light m-3">
                        <h5 className='card-title text-danger'>Declined</h5>
                        <p className='card-text'>Your submission has been declined! You can get journal recommendation based on your title and abstract by clicking this button</p>
                        <button className='btn btn-sm btn-primary' onClick={()=>Predict(data.title,data.abstract)}>Recommend Journal</button>
                    </div>
                </div>
                :<div></div>
            }
            {result1 !== ""?<div className="card mb-3" >
                <div className='card-body '>
                    <p className='card-text'>Journal Recommend Result: </p>
                    {result1.includes("Journal") ?<p className='card-label fw-bold'>1. {result1}</p>:<p className='card-label fw-bold'>1. Journal of {result1}</p>}
                    {result2.includes("Journal") ?<p className='card-label fw-bold'>2. {result2}</p>:<p className='card-label fw-bold'>2. Journal of {result2}</p>}
                    {result3.includes("Journal") ?<p className='card-label fw-bold'>3. {result3}</p>:<p className='card-label fw-bold'>3. Journal of {result3}</p>}
                </div>
                    
            </div>:<div></div>}
        </div> 
    );
}

export default ArticleReview;