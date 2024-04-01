import React from 'react';
import LayoutArticle from '../../../components/LayoutArticle';
const ArticleSubmission = () => {
    return (
        <LayoutArticle>
            <div className="App">
            <article class="card">
                <div className="content-container">
                    <h1>Submission</h1>
                    <div class='formFiles'>
                        <div class="divFiles">
                            <h3>Submission Files</h3>
                        </div>
                        <div class="divFiles">
                            <span>Title.pdf</span>
                            <button class="view">Download</button>
                        </div>
                    </div>
                    <form class='formFiles'>
                        <div class="divFiles">
                            <h3>Pre-Review Discussions</h3>
                            <button class="filter">Add Discusiion</button>
                        </div>
                    </form>
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
                        <button>Send to to Review</button>
                        <button class="view">Accept and Skip Review</button>
                        <button class="cancel">Decline Submission</button>
                    </div>
                    
                </div>
            </article>
                
            </div>
        </LayoutArticle>
    );
}

export default ArticleSubmission;