import React from 'react';
import Layout from '../components/Layout';
import cover from '../assets/images/cover.png';
const Home = () => {
    return (
        <Layout>
            <div id="content">
            
            <article class="card">
                <h2 >Fitur dari Siri</h2>
               <p> <img class="featured-image-left" src={cover}/></p>
                <p class="text"> Journal of ICT Research and Applications welcomes full research articles in the area of Information and Communication Technology from the following subject areas: Information Theory, Signal Processing, Electronics, Computer Network, Telecommunication, Wireless & Mobile Computing, Internet Technology, Multimedia, Software Engineering, Computer Science, Information System and Knowledge Management.
                Abstracts and articles published on Journal of ICT Research and Applications are available online at ITB Journal and indexed by Scopus, Google Scholar, Directory of Open Access Journals, Electronic Library University of Regensburg, EBSCO Open Science Directory, International Association for Media and Communication Research (IAMCR), MIAR: Information Matrix for the Analysis of Journals Universitat de Barcelona, Cabells Directories, Zurich Open Repository and Archive Journal Database, Open Academic Journals Index, Indonesian Publication Index and ISJD-Indonesian Institute of Sciences. The journal is under reviewed by Compendex, Engineering Village.</p>
                <p >ISSN: 2337-5787</p> 
                <p>E-ISSN: 2338-5499</p> 
                <p>Reg. No. 691-SIC-UPPGT-SIT-1963, Accreditation No. 164/E/KPT/2021</p> 
                <p>Published by the Institute for Research and Community Services, Institut Teknologi Bandung.</p>  
            </article>



        </div>
        </Layout>
    );
}

export default Home;