import React,{ useState, useEffect }  from 'react';
import { Link,useParams  } from "react-router-dom";
import api from "../interceptor/axios"
import Layout from '../components/Layout';
const Search = () => {
    const [listArticle,setArticle] = useState([]);
    const {title} = useParams();
    useEffect(() => {
        getArticle();
      }, []);
    const getArticle = async () => {
        const response = await api.post(`https://oijs-429910.et.r.appspot.com/article/search`, {
            title: title,
        })
        setArticle(response.data.filter((article)=> article.workflow_phase==="published"));
    };
    return (
        <Layout>
            <div className="container-fluid">
                {listArticle.length>0 ?  listArticle.map((article) => (
                    <div class="card m-3 mx-auto">
                        <Link to={`/${article.journal.path}/article/${article.article_id}`} class="card-title text-decoration-none">
                            <p class="card-header"> {article.title}</p>
                        </Link>
                        <div class="card-body p-3">
                            <p class="card-title">Published in {article.journal.title}</p>
                            <p class="card-text">{article.authors}</p>
                            <p class="card-text">{article.abstract}</p>
                            <p class="card-text" >Year: {article.year} | Volume: {article.volume} | Issue: {article.issue}</p> 
                            <button class="btn btn-sm btn-outline-primary col-1 float-start">PDF</button>
                        </div>
                        
                    </div>
                )):<p className='card-text'>Search result empty...</p>}
                
            </div>
        </Layout>
    );
}

export default Search;