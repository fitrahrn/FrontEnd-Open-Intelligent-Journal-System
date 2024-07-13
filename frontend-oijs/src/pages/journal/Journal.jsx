import React,{ useState, useEffect }  from 'react';
import { Link,useParams  } from "react-router-dom";
import api from "../../interceptor/axios"
import Layout from '../../components/Layout';
import NavbarJournal from '../../components/NavbarJournal';
const Journal = () => {
    const [listArticle,setArticle] = useState([]);
    const [journalData,setJournalData] = useState([]);
    const {journal} = useParams();
    useEffect(() => {
        getArticle();
        getJournal();
      }, []);
    const getArticle = async () => {
        const response = await api.get(`http://localhost:3001/articles/${journal}`)
        setArticle(response.data.filter((article)=> article.workflow_phase==="published"));
    };
    const getJournal= async () => {
        const response = await api.get(`http://localhost:3001/journal/${journal}`)
        setJournalData(response.data);
    };
    return (
        <Layout>
            <div className="container-fluid">
                <div class="card m-3 mx-auto">
                    <div className='card-header'>
                        <h3 className='card-title'>{journalData.title}</h3>
                        <NavbarJournal/>
                    </div>
                    
                    <div className='card-body'> 
                        
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
                </div>
                
            </div>
        </Layout>
    );
}

export default Journal;