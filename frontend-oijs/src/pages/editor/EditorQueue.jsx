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
                                    <button class="view">View</button>
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
                                    <span>1/2</span>
                                    <button class="review">Review</button>
                                    <button class="view">View</button>
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