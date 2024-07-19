import React,{ useState, useEffect }  from 'react';
import { Link,useParams , useNavigate } from "react-router-dom";
import api from "../../interceptor/axios"
import Layout from '../../components/Layout';
import NavbarJournal from '../../components/NavbarJournal';
const Journal = () => {
    const [listArticle,setArticle] = useState([]);
    const [journalData,setJournalData] = useState([]);
    const {journal} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getJournal();
        getArticle();
        
      }, []);
    const getArticle = async () => {
        try {
            const response = await api.get(`http://localhost:3001/articles/${journal}`)
            setArticle(response.data.filter((article)=> article.workflow_phase==="published"));
        } catch (error) {
            if (error.response) {
                if(error.response.status===409){
                    navigate(`*`);
                }
            }
        }
    };
    const getJournal= async () => {
        try {
            const response = await api.get(`http://localhost:3001/journal/${journal}`)
            setJournalData(response.data);
        } catch (error) {
            if (error.response) {
                if(error.response.status===404){
                    navigate(`*`);
                }
            }
        }
        
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