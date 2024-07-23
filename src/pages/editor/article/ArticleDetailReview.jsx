import React, { useState, useEffect } from 'react';
import {Link,useParams} from "react-router-dom";
import api from "../../../interceptor/axios"
const ArticleDetailReviews = ({data}) => {
    const [reviewers,setReviewers] = useState([]);
    const [msg, setMsg] = useState("");
    const [success,setSucces] = useState("")
    const [userId, setUserId] = useState("");
    const [dueDate, setdueDate] = useState(new Date());
    const [close,setClose] = useState("")
    const {journal} = useParams();
    useEffect(() => {
        getReviewers();
      }, []);
    
    const getReviewers = async () => {
        const response = await api.get(`https://backend-dot-oijs-429910.et.r.appspot.com/reviewers/${data.reviewers_id}`)
        console.log(response.data)
        setReviewers(response.data);
    }

    return (
        <div class="modal fade" id="detailReviews" tabindex="-1" aria-labelledby="detailReviewsLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="detailReviewsLabel">Review Details</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p class="modal-title fw-bold">Reviewer Comments for Editor</p>
                        <p className='card-text' id='editorReview'>Message</p>
                        <p class="modal-title fw-bold">Reviewer Comments for Author</p>
                        <p className='card-text' id='authorReview'>Message</p>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="mx-2 btn btn-lg btn-primary" data-bs-dismiss="modal">Close Review</button>
                    </div> 
                </div>
            </div>
                
        </div>
    );
}

export default ArticleDetailReviews;