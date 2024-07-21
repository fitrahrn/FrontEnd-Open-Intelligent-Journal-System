import React from 'react';
import ArticleList from '../../components/editor/ArticleList';
const EditorArchives = ({data}) => {
    return (
        <div class="tab-pane fade p-3" id="archives"  role="tabpanel" aria-labelledby="archives-tab" >
            <ArticleList data={data}/>
        </div> 
            
    );
}

export default EditorArchives;