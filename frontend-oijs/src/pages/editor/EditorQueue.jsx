import React from 'react';
import LayoutEditor from '../../components/LayoutEditor';
import {Link, } from "react-router-dom";
const EditorQueue = () => {
    return (
        <LayoutEditor>
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
                                    <span>1/1</span>
                                    <button class="review">Review</button>
                                    <Link to={`1`}><button class="view">View</button></Link>
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
                                    <button class="cancel">Submission</button>
                                    <Link to={`/2`}><button class="view">View</button></Link>
                                </div>                    
                            </div>
                        </li>
                    </ul>
                    
                </article>
            </div>
        </LayoutEditor>
    );
}

export default EditorQueue;