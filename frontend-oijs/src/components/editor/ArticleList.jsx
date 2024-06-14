import React from 'react';
import { Link } from 'react-router-dom';
const ArticleList = ({data}) => {
    return (
        <div>
            <div class="row card-body justify-content-between list-group-flush">
            <p class="card-subtitle mb-2 text-body-secondary col-3">Author</p>
                <p class="card-subtitle mb-2 text-body-secondary col-3">Title</p>
                <p class="card-subtitle mb-2 text-body-secondary col-2">Review Status</p>
                <p class="card-subtitle mb-2 text-body-secondary col-2">Workflow Phase</p>
                <p class="card-subtitle mb-2 text-body-secondary col-1"></p>
            </div>
            {data.map((article) => (
                <ul class="list-group ">
                    <li class="list-group-item">
                        <div class="row justify-content-between">
                            <p class="card-text col-3">{article.authors}</p>
                            <p class="card-text col-3">{article.title}</p>
                            <p class="card-text col-2">{article.status}</p>
                            <p class="card-text col-2">{article.workflow_phase}</p>
                            <Link to={`${article.article_id}`} class="btn btn-outline-primary btn-sm col-1 m-3">View</Link>
                        </div>
                        
                    </li>

                </ul>
                )
            )}
        </div>
    );
}

export default ArticleList;