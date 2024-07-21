import React from 'react';
import ArticleList from '../../components/editor/ArticleList';
const EditorSubmission = ({data}) => {
    console.log(data)
    return (
        <div class="tab-pane fade show active p-3" id="queue"  role="tabpanel" aria-labelledby="queue-tab" >
            <ArticleList data={data}/>
        </div> 
            
    );
}

export default EditorSubmission;