import React from 'react';
import LayoutArticle from '../../../components/LayoutArticle';
import {Link,useParams} from "react-router-dom";
const ArticleReview = ({data}) => {
    return (
        <div class="tab-pane fade p-3" id="review"  role="tabpanel" aria-labelledby="review-tab" >
            <div>
                <div class="card container-fluid mb-3">
                    <div class="row no-gutters card-header ">
                            <p class="card-text col">Reviewers</p>
                            <Link class="col-2 btn btn-outline-primary" to={`submit`}>Add Reviewer</Link>
                        </div>
                    <div class="card-body row">
                        <p  class="card-text col">{data.title}.pdf</p>
                        {/* <Link class="btn btn-outline-primary col-2 me-3" to={data.article_path} target="_blank" download>Download</Link> */}
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="card-header">
                        Review File
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

export default ArticleReview;