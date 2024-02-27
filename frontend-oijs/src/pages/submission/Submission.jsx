import React from 'react';
import LayoutSubmission from '../../components/LayoutSubmission';
const Submission = () => {
    return (
        <LayoutSubmission>
            <div className="App">
                <article class="card">
                    <span class="oneLine">
                        <h2 class="title">My Assigned</h2>
                        <button class="filter">Filters</button>
                        <button class="filter">New Submission</button>
                    </span>
                    
                </article>
            </div>
        </LayoutSubmission>
    );
}

export default Submission;