import React,{ useState, useEffect }  from 'react';
import { Link,useNavigate,useParams  } from "react-router-dom";
import api from "../../interceptor/axios"
import Layout from '../../components/Layout';
import NavbarJournal from '../../components/NavbarJournal';
const IssueCurrent = () => {
    const [listIssue,setIssue] = useState([]);
    const [journalData,setJournalData] = useState([]);
    const {journal} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getIssue();
      }, []);
    const getIssue = async () => {
        const response = await api.get(`https://backend-dot-oijs-429910.et.r.appspot.com/issue/${journal}`)
        const issue = response.data.filter((issue)=> issue.appear===true).pop()
        navigate(`/${journal}/issue/${issue.volume}/${issue.number}`);
    };

}
export default IssueCurrent;