import React from 'react';
import LayoutSubmission from '../../components/LayoutSubmission';
import {Link, } from "react-router-dom";
const Review = () => {
    return (
        <LayoutSubmission>
            <div className="App">
                <article class="card">
                    <span class="oneLine">
                        <span class="headerTitle">
                            <h2 class="title">My Assigned</h2>
                        </span>
                        
                    </span>
                    <ul>
                        <li>
                            <div class="listSubmission">
                                <div>
                                    <span>author</span>
                                    <div>The Title: This is Title</div>
                                </div>
                                <div class="rightSubmission">
                                    <Link to={`article`}><button class="view">Review</button></Link>
                                </div>                    
                            </div>
                        </li>
                        <li>
                            <div class="listSubmission">
                                <div>
                                    <span>penulis</span>
                                    <div>The Bangkit Final report: Bangkit </div>
                                </div>
                                <div class="rightSubmission">
                                    <span>Review Submitted</span>
                                    <button class="view">Review</button>
                                </div>                    
                            </div>
                        </li>
                    </ul>
                    
                </article>
            </div>
        </LayoutSubmission>
    );
}

export default Review;