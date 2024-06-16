import React, { useState, useEffect } from 'react';
import LayoutArticle from '../../../components/LayoutArticle';
import {Link,useParams} from "react-router-dom";
import axios from "axios";
const ArticleReview = ({data}) => {
    const [listReviews,setReviews] = useState([]);
    const {article_id} = useParams();

    useEffect(() => {
        getReviews();
      }, []);
    
    const getReviews = async () => {
        console.log(data)
        const response = await axios.get(`http://localhost:3001/reviews/${article_id}`)
        const listFile = response.data
        for(let i=0;i<listFile.length;i++){
            let article_path = response.data[i].article_file_path
            const article_path_split = article_path.split("/");
            let fileName = article_path_split[article_path_split.length - 1]
            listFile[i].file_name = fileName
        }
        setReviews(listFile);
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
                                    <p  class="card-text col">{review.file_name}.pdf</p>
                                </div>
                            </div>
                            <div class="card container-fluid mb-3">
                                <div class="row no-gutters card-header ">
                                        <p class="card-text col">Reviewers</p>
                                        <button class="col-2 btn btn-primary" data-bs-toggle="modal" data-bs-target="#addReview">Add Reviewers</button>
                                    </div>
                                <div class="card-body row">
                                    <p  class="card-text col"></p>
                                    {/* <Link class="btn btn-outline-primary col-2 me-3" to={data.article_path} target="_blank" download>Download</Link> */}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    )
                )
             : 
            <div>

            </div> }
            
        </div> 
    );
}

export default ArticleReview;