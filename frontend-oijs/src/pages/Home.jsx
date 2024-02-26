import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import cover from '../assets/images/cover.png';
import { Link, useParams } from "react-router-dom";
const Home = () => {
    const [listJournal,setJournal] = useState([
        {
            id:1,
            journalId:"jictra",
            image:cover,
            title:"Journal of ICT Research and Applications",
            issn:"ISSN: 2337-5787",
            eisssn:"E-ISSN: 2338-5499",
            regNumber:"Reg. No. 691-SIC-UPPGT-SIT-1963, Accreditation No. 164/E/KPT/2021",
            publisher:"Published by the Institute for Research and Community Services, Institut Teknologi Bandung.",
            text:"Journal of ICT Research and Applications welcomes full research articles in the area of Information and Communication Technology from the following subject areas: Information Theory, Signal Processing, Electronics, Computer Network, Telecommunication, Wireless & Mobile Computing, Internet Technology, Multimedia, Software Engineering, Computer Science, Information System and Knowledge Management. Abstracts and articles published on Journal of ICT Research and Applications are available online at ITB Journal and indexed by Scopus, Google Scholar, Directory of Open Access Journals, Electronic Library University of Regensburg, EBSCO Open Science Directory, International Association for Media and Communication Research (IAMCR), MIAR: Information Matrix for the Analysis of Journals Universitat de Barcelona, Cabells Directories, Zurich Open Repository and Archive Journal Database, Open Academic Journals Index, Indonesian Publication Index and ISJD-Indonesian Institute of Sciences. The journal is under reviewed by Compendex, Engineering Village."
        },
        {
            id:2,
            journalId:"journal",
            image:cover,
            title:"Journal of ICT Research and Applications 12",
            issn:"ISSN: 2337-5787",
            eisssn:"E-ISSN: 2338-5499",
            regNumber:"Reg. No. 691-SIC-UPPGT-SIT-1963, Accreditation No. 164/E/KPT/2021",
            publisher:"Published by the Institute for Research and Community Services, Institut Teknologi Bandung.",
            text:"Journal of ICT Research and Applications welcomes full research articles in the area of Information and Communication Technology from the following subject areas: Information Theory, Signal Processing, Electronics, Computer Network, Telecommunication, Wireless & Mobile Computing, Internet Technology, Multimedia, Software Engineering, Computer Science, Information System and Knowledge Management. Abstracts and articles published on Journal of ICT Research and Applications are available online at ITB Journal and indexed by Scopus, Google Scholar, Directory of Open Access Journals, Electronic Library University of Regensburg, EBSCO Open Science Directory, International Association for Media and Communication Research (IAMCR), MIAR: Information Matrix for the Analysis of Journals Universitat de Barcelona, Cabells Directories, Zurich Open Repository and Archive Journal Database, Open Academic Journals Index, Indonesian Publication Index and ISJD-Indonesian Institute of Sciences. The journal is under reviewed by Compendex, Engineering Village."
        }

        
    ]);
    
    useEffect(() => {
        getJournals();
      }, []);
    
    const getJournals = async () => {
      };
    console.log(listJournal);
    return (
        <Layout>
            <div id="content">
            {listJournal.map((journal) => (
                <article class="card">
                    <Link to={`/${journal.journalId}`} className="button is-success">
                    <h2 > {journal.title}</h2>
                    </Link>
                    <img class="featured-image-left" src={journal.image}/>
                    <p class="text"> {journal.text}</p>
                    <p class="subtitled">{journal.issn}</p> 
                    <p class="subtitled">{journal.eisssn}</p> 
                    <p class="subtitled">{journal.regNumber}</p> 
                    <p class="subtitled">{journal.publisher}</p> 
                </article>
            ))}
            



        </div>
        </Layout>
    );
}

export default Home;