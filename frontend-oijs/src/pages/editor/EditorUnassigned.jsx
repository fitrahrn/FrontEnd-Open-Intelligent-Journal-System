import React from 'react';
import ArticleList from '../../components/editor/ArticleList';
const EditorUnassigned = ({data}) => {
    return (
        <div class="tab-pane fade p-3" id="unassigned"  role="tabpanel" aria-labelledby="unassigned-tab" >
            <ArticleList data={data}/>
        </div> 
    );
}

export default EditorUnassigned;