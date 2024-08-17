import React from 'react';
const ArticleDetailReviews = () => {
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