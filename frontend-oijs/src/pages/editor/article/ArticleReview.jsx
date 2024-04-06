import React from 'react';
import LayoutArticle from '../../../components/LayoutArticle';
const ArticleReview = () => {
    return (
        <LayoutArticle>
            <div className="App">
            <article class="card">
                <div className="content-container">
                    <h1>Review</h1>
                    <div class='formFiles'>
                        <div class="divFiles">
                            <h3>Review Files</h3>
                            <button class="filter">Upload/Select Files</button>
                        </div>
                        <div class="divFiles">
                            <span>Title.pdf</span>
                            <button class="view">Download</button>
                        </div>
                    </div>
                    <form class='formFiles'>
                        <div class="divFiles">
                            <h3>Reviewers</h3>
                            <button class="filter">Add Reviewers</button>
                        </div>
                        <table class="tablesReviewer">
                            <tr>
                                <td>
                                    <span>Reviewer</span>
                                </td>
                                <td>
                                    <h4>Request Accepted </h4>
                                    <span>Review due: 2024-04-26</span>
                                </td>
                                <td>
                                    <span>Anonymous Reviewer/<br/>Anonymous Author </span>
                                </td>
                            </tr>
                        </table>
                    </form>
                    <div class='formFiles'>
                        <div class="divFiles">
                            <h3>Revisions</h3>
                            <button class="filter">Upload Files</button>
                        </div>
                        <div class="divFiles">
                            <span>Title.pdf</span>
                            <button class="view">Download</button>
                        </div>
                    </div>
                    <div class='formFiles'>
                        <div class="divFiles">
                            <h3>Review Discussions</h3>
                            <button class="filter">Add Discussion</button>
                        </div>
                        <table class="tablesReviewer">
                            <th>Name</th>
                            <th>From</th>
                            <th>Last Reply</th>
                            <th>Replies</th>
                            <th>Closed</th>
                        </table>
                    </div>
                    <form class='formFiles'>
                        <div class="divFiles">
                            <h3>Participants</h3>
                            <button class="filter">Assign</button>
                        </div>
                        <div>
                            <div>

                            </div>
                            <h4>Journal Editor</h4>
                            <div class="listSubmission">
                                <span>Joe Smith</span>
                                <div class="rightSubmission">
                                    <button id='pdf'>Remove</button><button id='pdf'>Edit</button><button id='pdf'>Notify</button>
                                </div> 
                            </div> 
                            <h4>Author</h4>
                            <div class="listSubmission">
                                <span>Will Smith</span>
                                <div class="rightSubmission">
                                    <button id='pdf'>Remove</button><button id='pdf'>Edit</button><button id='pdf'>Notify</button>
                                </div> 
                            </div> 
                        </div>
                    </form>
                    <div class="submit">
                        <button class="view">Request Revisions</button>
                        <button>Accept Submission</button>
                        <button class="cancel">Decline Submission</button>
                    </div>
                    
                </div>
            </article>
                
            </div>
        </LayoutArticle>
    );
}

export default ArticleReview;