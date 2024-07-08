import React,{ useState, useEffect }  from 'react';
import { Link,useParams  } from "react-router-dom";
import api from "../../interceptor/axios"
import Layout from '../../components/Layout';
import NavbarJournal from '../../components/NavbarJournal';
const Issue = () => {
    const [listIssue,setIssue] = useState([]);
    const [journalData,setJournalData] = useState([]);
    const {journal} = useParams();
    useEffect(() => {
        getIssue();
        getJournal();
      }, []);
    const getIssue = async () => {
        const response = await api.get(`http://localhost:3001/issue/${journal}`)
        setIssue(response.data);
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
                        <h5 className='card-title'>Issue Archives</h5>
                        {listIssue.map((issue) => (
                            <ul class="list-group">
                                <Link to={`${issue.volume}/${issue.number}`} class="list-group-item">
                                    <p class="card-title text-primary fw-bold"> Vol. {issue.volume} No. {issue.number} ({issue.year})</p>
                                </Link>
                            </ul>
                        ))}
                    </div>
                </div>
                
            </div>
        </Layout>
    );
}

export default Issue;