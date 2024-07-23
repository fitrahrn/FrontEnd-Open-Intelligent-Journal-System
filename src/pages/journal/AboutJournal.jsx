import React, { useState, useEffect } from 'react';
import { useParams  } from "react-router-dom";
import Layout from '../../components/Layout';
import cover from '../../assets/images/cover.png';
import api from "../../interceptor/axios"
const AboutJournal = () => {
    const [journalData,setJournalData] = useState([]);
    const {journal} = useParams();
    useEffect(() => {
        getJournals();
      }, []);
    
    const getJournals = async () => {
        const response = await api.get(`https://backend-dot-oijs-429910.et.r.appspot.com/journal/${journal}`)
        setJournalData(response.data);
    };
    return (
        <Layout>
        <div class="container-fluid">
            <div class="card m-3 p-3 w-75 mx-auto" >
                <div class="row g-0">
                    <div class="col-md-2 pt-4">
                        <img class="img-fluid rounded-start" src={journalData.image_path} alt = {cover}/>
                    </div>
                    <div class="col-md-10">
                        <div class="card-body">
                            <h3 class="card-title"> About Journal</h3>
                            <a href={`/${journalData.path}`} class="card-title text-decoration-none">
                                <h2 class="card-title"> {journalData.title}</h2>
                            </a>
                            <p class="card-text"> {journalData.description}</p>
                            <p class="card-text">ISSN: {journalData.issn}</p> 
                            <p class="card-text">E-ISSN: {journalData.e_issn}</p> 
                            <p class="card-text">{journalData.reg_number}</p> 
                            <p class="card-text">Published by the {journalData.publisher}</p> 
                        </div>
                    
                        
                    </div>
                </div>
                
            </div>
        </div>
        </Layout>
    );
}

export default AboutJournal;