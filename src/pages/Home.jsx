import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import cover from '../assets/images/cover.png';
import api from "../interceptor/axios"
const Home = () => {
    const [listJournal,setJournal] = useState([]);
    
    useEffect(() => {
        getJournals();
      }, []);
    
    const getJournals = async () => {
        const response = await api.get(`https://backend-oijs-77pyv5kz2q-et.a.run.app/journals`)
        setJournal(response.data);
    };
    return (
        <Layout>
        <div class="container-fluid">
            {listJournal.map((journal) => (
                <div class="card m-3 p-3 w-75 mx-auto" >
                    <div class="row g-0">
                        <div class="col-md-2 pt-4">
                            <img class="img-fluid rounded-start" src={journal.image_path} alt = {cover}/>
                        </div>
                        <div class="col-md-10">
                            <div class="card-body">
                                <a href={`/${journal.path}`} class="card-title text-decoration-none">
                                    <h2 class="card-title"> {journal.title}</h2>
                                </a>
                                <p class="card-text"> {journal.description}</p>
                                <p class="card-text">ISSN: {journal.issn}</p> 
                                <p class="card-text">E-ISSN: {journal.e_issn}</p> 
                                <p class="card-text">{journal.reg_number}</p> 
                                <p class="card-text">Published by the {journal.publisher}</p> 
                            </div>
                        
                            
                        </div>
                    </div>
                    
                </div>
                    )
                )
            }
        </div>
        </Layout>
    );
}

export default Home;