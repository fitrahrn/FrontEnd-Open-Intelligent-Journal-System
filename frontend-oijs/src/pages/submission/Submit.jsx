import React from 'react';
import LayoutSubmission from '../../components/LayoutSubmission';
const Submit = () => {
    return (
        <LayoutSubmission>
            <div className="App">
            <article class="card">
                <div className="content-container">
                    <h1>Submit an Article</h1>
                    <h2>Section Policy</h2>
                    <h3>Submission Requirement</h3>
                    <div>
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="plaintext">The submission has not been previously published, nor is it before another journal for consideration (or an explanation has been provided in Comments to the Editor). </label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p>The submission file is in OpenOffice, Microsoft Word, or RTF document file format.  </p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p>Where available, URLs for the references have been provided. </p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p>The text is single-spaced; uses a 12-point font; employs italics, rather than underlining (except with URL addresses); and all illustrations, figures, and tables are placed within the text at the appropriate points, rather than at the end.  </p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p>	The text adheres to the stylistic and bibliographic requirements outlined in the Author Guidelines. </p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p> Yes, I agree to have my data collected and stored according to the privacy statement. </p>

                        </div>
                        
                    </div>
                </div>
            </article>
                
            </div>
        </LayoutSubmission>
    );
}

export default Submit;