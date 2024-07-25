import React,{ useState, useEffect }  from 'react';
import { Link,useParams  } from "react-router-dom";
import api from "../../interceptor/axios"
import Layout from '../../components/Layout';
import NavbarJournal from '../../components/NavbarJournal';
const IssueArticle = () => {
    const [listArticle,setArticle] = useState([]);
    const [journalData,setJournalData] = useState([]);
    const {journal,volume,number} = useParams();
    const [listIssue,setIssue] = useState([]);
    useEffect(() => {
        getArticle();
        getIssue();
        getJournal();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    const getArticle = async () => {
        const response = await api.get(`https://backend-oijs-77pyv5kz2q-et.a.run.app/articles/${journal}/${volume}/${number}`)
        setArticle(response.data.filter((article)=> article.workflow_phase==="published"));
    };
    const getIssue = async () => {
        const response = await api.get(`https://backend-oijs-77pyv5kz2q-et.a.run.app/issue/${journal}/${volume}/${number}`)
        setIssue(response.data);
    };
    const getJournal= async () => {
        const response = await api.get(`https://backend-oijs-77pyv5kz2q-et.a.run.app/journal/${journal}`)
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
                        <p class="card-title text-primary fw-bold"> Vol. {listIssue.volume} No. {listIssue.number} ({listIssue.year})</p>
                        {listArticle.map((article) => (
                            <div class="card m-3 mx-auto">
                                <Link to={`/${journal}/article/${article.article_id}`} class="card-title text-decoration-none">
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

export default IssueArticle;