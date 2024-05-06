import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import cover from '../assets/images/cover.png';
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const Home = () => {
    const [listJournal,setJournal] = useState([]);
    
    useEffect(() => {
        getJournals();
      }, []);
    
    const getJournals = async () => {
        const response = await axios.get(`http://localhost:3001/allJournals`)
        setJournal(response.data);
    };
    console.log(listJournal)
    return (
        <Layout>
            <div id="content">
            {listJournal.map((journal) => (
                <article class="card">
                    <Link to={`/${journal.path}`} className="button is-success">
                    <h2 > {journal.title}</h2>
                    </Link>
                    <img class="featured-image-left" src={journal.image_path} alt = {cover}/>
                    <p class="text"> {journal.description}</p>
                    <p class="subtitled">ISSN: {journal.issn}</p> 
                    <p class="subtitled">E-ISSN: {journal.e_issn}</p> 
                    <p class="subtitled">{journal.reg_number}</p> 
                    <p class="subtitled">Published by the {journal.publisher}</p> 
                </article>
            ))}
            



        </div>
        </Layout>
    );
}

export default Home;