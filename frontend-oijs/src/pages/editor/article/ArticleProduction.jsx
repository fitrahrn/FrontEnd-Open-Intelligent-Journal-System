import React from 'react';
import LayoutArticle from '../../../components/LayoutArticle';
const ArticleProduction = () => {
    return (
        <LayoutArticle>
            <div className="App">
            <article class="card">
                <div className="content-container">
                    <h1>Production</h1>
                    <div class='formFiles'>
                        <div class="divFiles">
                            <h3>Production Ready Files</h3>
                            <button class="filter">Upload File</button>
                        </div>
                        <div class="divFiles">
                            <span>Title.pdf</span>
                            <button class="view">Download</button>
                        </div>
                    </div>
                    <form class='formFiles'>
                        <div class="divFiles">
                            <h3>Production Discussion</h3>
                            <button class="filter">Add Discusiion</button>
                        </div>
                    </form>
                    <div class="submit">
                        <button>Schedule For Publication</button>
                    </div>
                    
                </div>
            </article>
                
            </div>
        </LayoutArticle>
    );
}

export default ArticleProduction;