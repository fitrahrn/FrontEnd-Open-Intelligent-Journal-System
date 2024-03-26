import React from 'react';
import LayoutSubmission from '../../components/LayoutSubmission';
const Submit = () => {
    return (
        <LayoutSubmission>
            <div className="App">
            <article class="card">
                <div className="content-container">
                    <h1>Submit an Article</h1>
                    <h2>1. Section Policy</h2>
                    <h3>Submission Requirement</h3>
                    <div>
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="plaintext">The submission has not been previously published, nor is it before another journal for consideration </label>
                            <label>(or an explanation has been provided in Comments to the Editor). </label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label>The submission file is in OpenOffice, Microsoft Word, or RTF document file format.  </label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label>Where available, URLs for the references have been provided. </label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label>The text is single-spaced; uses a 12-point font; employs italics, rather than underlining (except with URL addresses); </label>
                            <label>and all illustrations, figures, and tables are placed within the text at the appropriate points, rather than at the end.  </label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label>	The text adheres to the stylistic and bibliographic requirements outlined in the Author Guidelines. </label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label> Yes, I agree to have my data collected and stored according to the privacy statement. </label>

                        </div>

                    </div>
                    <h2>2. Upload Submission</h2>
                    
                    <form class='formFiles'>
                        <div class="divFiles">
                            <h3>Files</h3>
                            <button class="filter">Add File</button>
                        </div>
                        <div class="divFiles">
                            <span>Title.pdf</span>
                            <button class="review">Edit</button>
                            <button class="view">Remove</button>
                        </div>
                    </form>
                    <h2>3. Enter Meteadata</h2>
                    <form class="result">
                        <div className="field">
                            <label className="label">Prefix</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder='The'/>
                                </div>
                        </div>
                        <div className="field">
                            <label className="label">Title</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder='The'/>
                                </div>
                        </div>
                        <div className="field">
                            <label className="label">Subtitle</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder='The'/>
                                </div>
                        </div>
                        <div className="field">
                            <label className="label">Abstract</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder='The'/>
                                </div>
                        </div>
                        <div className="field">
                            <label className="label">List Of Contributors</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder='The'/>
                                </div>
                        </div>
                        <div className="field">
                            <label className="label">Additional Keywords</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder='The'/>
                                </div>
                        </div>
                    </form>
                    <h2>4. Confirmation</h2>
                    <div class="submit">
                        <button>Finish Submission</button>
                        <button class="cancel">Cancel</button>
                    </div>
                    
                </div>
            </article>
                
            </div>
        </LayoutSubmission>
    );
}

export default Submit;