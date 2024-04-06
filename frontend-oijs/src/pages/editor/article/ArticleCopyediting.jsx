import React from 'react';
import LayoutArticle from '../../../components/LayoutArticle';
const ArticleCopyediting = () => {
    return (
        <LayoutArticle>
            <div className="App">
            <article class="card">
                <div className="content-container">
                    <h1>Copyediting</h1>
                    <div class='formFiles'>
                        <div class="divFiles">
                            <h3>Draft Files</h3>
                            <button class="filter">Upload/Select Files</button>
                        </div>
                        <div class="divFiles">
                            <span>Title.pdf</span>
                            <button class="view">Download</button>
                        </div>
                    </div>
                    <form class='formFiles'>
                        <div class="divFiles">
                            <h3>Copyediting Discussion</h3>
                            <button class="filter">Add Discusiion</button>
                        </div>
                    </form>
                    <form class='formFiles'>
                        <div class="divFiles">
                            <h3>Copyedited</h3>
                            <button class="filter">Upload/Select Files</button>
                        </div>
                    </form>
                    <div class="submit">
                        <button>Send to Production</button>
                    </div>
                    
                </div>
            </article>
                
            </div>
        </LayoutArticle>
    );
}

export default ArticleCopyediting;