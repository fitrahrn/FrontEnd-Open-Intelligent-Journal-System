import React from 'react';
import LayoutSubmission from '../../components/LayoutSubmission';
const ReviewArticle = () => {
    return (
        <LayoutSubmission>
            <div className="App">
            <article class="card">
                <div className="content-container">
                    <h1>Review Article: The Title</h1>
                    <h2>1. Request for Review</h2>
                    <p>You have been selected as a potential reviewer of the following submission. Below is an overview of the submission, as well as the timeline for this review. We hope that you are able to participate.</p>
                    <h3>Article Title</h3>
                    <p>The Article Title</p>
                    <h3>Abstract</h3>
                    <p>Abstract for the article</p>
                    <h3>Review Type</h3>
                    <p>Anonymous Reviewer/Anonymous Author </p>
                    <div class='formFiles'>
                        <div class="divFiles">
                            <h3>Review Files</h3>
                        </div>
                        <div class="divFiles">
                            <span>Title.pdf</span>
                            <button class="view">Download</button>
                        </div>
                    </div>
                    <h3>Review Schedule</h3>
                    
                    <p>Editor's Request     = 2024-03-29</p>
                    <p>Response Due Date    = 2024-04-26</p>
                    <p>Review Due Date      = 2024-04-26</p>
                    
                    <div>
                            <input type="checkbox" />
                            <label>Yes, I agree to have my data collected and stored according to the privacy statement. </label>
                    </div>
                    <div class="submit">
                        <button>Accept Review, Continue to Step #2</button>
                        <button class="cancel">Decline Review Request</button>
                    </div>
                    <h2>2. Guidelines</h2>
                    <h3>Reviewer Guidlines</h3>
                    <p>This publisher has not set any reviewer guidelines.</p>
                    
                    <h2>3. Download and Review</h2>
                    <div class="divFiles">
                            <span>Title.pdf</span>
                            <button class="view">Download</button>
                    </div>
                    <h3>Review</h3>
                    <div className="field">
                        <label className="label">For Author and Editor</label>
                            <div className="control">
                                <textarea name="paragraph_text" cols="50" rows="10"></textarea>
                            </div>
                    </div>
                    <div className="field">
                        <label className="label">For Editor only</label>
                            <div className="control">
                                <textarea name="paragraph_text" cols="50" rows="10"></textarea>
                            </div>
                    </div>
                    <h3>Upload</h3>
                    <p>Upload files you would like the editor and/or author to consult, including revised versions of the original review file(s).</p>
                    <form class='formFiles'>
                        <div class="divFiles">
                            <h3>Reviewer Files</h3>
                            <button class="filter">Upload File</button>
                        </div>
                        <div class="divFiles">
                            <span>Title.pdf</span>
                            <button class="review">Edit</button>
                            <button class="view">Remove</button>
                        </div>
                    </form>
                    <form class='formFiles'>
                        <div class="divFiles">
                            <h3>Review Discussions</h3>
                            <button class="filter">Add Discusiion</button>
                        </div>
                    </form>
                    <h3>Recommendation</h3>
                    <label>Select a recommendation and submit the review to complete the process. You must enter a review or upload a file before selecting a recommendation.</label>
                        <select >
                            <option >Accept Submission </option>
                            <option>Revisions Required </option>
                            <option >Resubmit for Review</option>
                            <option >Resubmit Elsewhere </option>
                            <option >Decline Submission </option>
                        </select>
                    <h2>4. Confirmation</h2>
                    <div class="submit">
                        <button>Submit Review</button>
                        <button class="review">Save for Later</button>
                        <button class="cancel">Go Back</button>
                    </div>
                    
                </div>
            </article>
                
            </div>
        </LayoutSubmission>
    );
}

export default ReviewArticle;