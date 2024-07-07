import React,{ useState, useEffect }  from 'react';
import { Link,useParams  } from "react-router-dom";
import api from "../../interceptor/axios"
import Layout from '../../components/Layout';
const Journal = () => {
    const [listArticle,setArticle] = useState([]);
    const {journal} = useParams();
    useEffect(() => {
        getArticle();
      }, []);
    const getArticle = async () => {
        const response = await api.get(`http://localhost:3001/articles/${journal}`)
        setArticle(response.data);
    };
    console.log(listArticle)
    return (
        <Layout>
                <div className="container-fluid">
                    {listArticle.map((article) => (
                        <div class="card m-3 mx-auto">
                            <Link to={`article/${article.article_id}`} class="card-title text-decoration-none">
                                <p class="card-header"> {article.title}</p>
                            </Link>
                            <div class="card-body p-3">
                                <p class="card-text">{article.authors}</p>
                                <p class="card-text">{article.abstract}</p>
                                <p class="card-text" >Year: {article.year} | Volume: {article.volume} | Issue: {article.issue}</p> 
                                <button class="btn btn-sm btn-outline-primary col-1 float-start">PDF</button>
                            </div>
                              
                        </div>
                    ))}
                    
                </div>
        </Layout>
    );
}

export default Journal;