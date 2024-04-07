import React from 'react';
import LayoutArticle from '../../../components/LayoutArticle';
const ArticlePublication = () => {
    return (
        <LayoutArticle>
            <div className="App">
            <article class="card">
                <div className="content-container">
                    <h1>Publication</h1>
                    <h2>1. Title & Abstract</h2>
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
                                    <input type="text" className="input" placeholder='Improving the Performance of Low-resourced Speaker Identification with Data Preprocessing'/>
                                </div>
                        </div>
                        <div className="field">
                            <label className="label">Subtitle</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder='Data Processing'/>
                                </div>
                        </div>
                        <div className="field">
                            <label className="label">Abstract</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder='Improving the Performance of Low-resourced Speaker Identification with Data Preprocessing'/>
                                </div>
                        </div>
                        <div className="field">
                            <label className="label">List Of Contributors</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder='Articlei Lai Phyu, Hay Mar Soe Naing, Win Pa Pa'/>
                                </div>
                        </div>
                        <div className="field">
                            <label className="label">Additional Keywords</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder='Data Processing, Speaker Identification'/>
                                </div>
                        </div>
                        <button class="view">Save</button>
                    </form>
                    <h2>2. Contributors</h2>
                    
                    <form class='formFiles'>
                        <div class="divFiles">
                            <h3>List of Contributors</h3>
                            <button class="filter">Add Contributor</button>
                        </div>
                        <div>
                            <table class="tablesReviewer">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Primary Contact</th>
                                    <th>In Browse Lists</th>
                                </tr>
                                <tr>
                                    <td>author</td>
                                    <td>author@gmail.com</td>
                                    <td>Author</td>
                                    <td>&#x2713;</td>
                                    <td>&#x2713;</td>
                                </tr>
                                
                            </table>
                        </div>
                    </form>
                    <h2>3. Enter Metadata</h2>
                    <form class="result">
                        <div className="field">
                            <label className="label">Additional Keywords</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder='Data Processing, Speaker Identification'/>
                                </div>
                        </div>
                        <button class="view">Save</button>
                    </form>
                    <h2>4. Galleys</h2>
                    <div class='formFiles'>
                        <div class="divFiles">
                            <h3>Galleys</h3>
                            <button class="filter">Add Galley</button>
                        </div>

                    </div>
                    <h2>5. Permissions & Disclosure</h2>
                    <div class='formFiles'>
                        <form class="result">
                            <div className="field">
                                <label className="label">Copyright Holder</label>
                                <p>Copyright will be assigned automatically to Test Journal when this is published.</p>
                                    <div className="control">
                                        <input type="text" className="input" />
                                        <button class="view">Override</button>
                                    </div>

                            </div>
                            <div className="field">
                                <label className="label">Copyright Year</label>
                                <p>The copyright year will be set automatically when this is published in an issue.</p>
                                    <div className="control">
                                        <input type="text" className="input" />
                                        <button class="view">Override</button>
                                    </div>
                            </div>
                            <div className="field">
                                <label className="label">License URL</label>
                                    <div className="control">
                                        <input type="text" className="input" />
                                    </div>
                            </div>
                            <button class="filter">Save</button>
                        </form>
                        

                    </div>
                    <h2>4. Issue</h2>
                    <div class='formFiles'>
                        <form class="result" >
                            <label>Issue</label>
                            <p>This has not been scheduled for publication in an issue. <button class="filter">Assign to Issue</button></p>
                            <label>Section</label>
                            <select >
                                <option >Articles</option>
                            </select>
                            <div class="divFiles">
                                <h3>Cover Image</h3>
                                <button class="filter">Upload Files</button>
                            </div>
                            <div class="divFiles">
                                <span>Cover.png</span>
                                <button class="view">Download</button>
                            </div>
                            <div className="field">
                                <label className="label">Pages</label>
                                <div className="control">
                                    <input type="text" className="input"/>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">URL Path</label>
                                <p>An optional path to use in the URL instead of the ID.</p>
                                <div className="control">
                                    <input type="text" className="input"/>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Date Published</label>
                                <p>The publication date will be set automatically when the issue is published. Do not enter a publication date unless the article was previously published elsewhere and you need to backdate it.</p>
                                <div className="control">
                                    <input type="text" className="input"/>
                                </div>
                            </div>
                            <button class="filter">Save</button>
                        </form>
                        
                    </div>
                    
                </div>
            </article>
                
            </div>
        </LayoutArticle>
    );
}

export default ArticlePublication;