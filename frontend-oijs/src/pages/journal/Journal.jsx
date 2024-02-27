import React,{ useState, useEffect }  from 'react';
import LayoutJournal from '../../components/LayoutJournal';
import { Link,useParams  } from "react-router-dom";
const Journal = () => {
    const [listArticle,setArticle] = useState([
        {
            id: 1,
            title: "Improving the Performance of Low-resourced Speaker Identification with Data Preprocessing",
            writer: "Articlei Lai Phyu, Hay Mar Soe Naing, Win Pa Pa",
            year: 2023,
            volume: 13,
            issue: 3,
            doi: "https://doi.org/10.5614/itbj.ict.res.appl.2023.17.3.1",

        },
        {
            id: 2,
            title: "An Efficient Intrusion Detection System to Combat Cyber Threats using a Deep Neural Network Model ",
            writer: "Mangayarkarasi Ramaiah, C. Vanmathi, Mohammad Zubair Khan, M. Vanitha, M. Deepa ",
            year: 2022,
            volume: 11,
            issue: 1,
            doi: "https://doi.org/10.5614/itbj.ict.res.appl.2023.17.3.2 ",

        }

        
    ]);
    console.log(listArticle);
    return (
        <LayoutJournal>
                <div id="content">
                    {listArticle.map((article) => (
                        <article class="card">
                        <Link to={`/`} className="button is-success">
                        <h2 >{article.title}</h2>
                        </Link>
                        <p >{article.writer}</p>
                        <p >Year: {article.year} | Volume: {article.volume} | Issue: {article.issue}</p> 
                        <p >Abstract <button id='pdf'>PDF</button></p>  
                        <p >DOI: <a href= {article.doi}>{article.doi}</a> </p>
                    </article>
                    ))}
                    
                </div>
        </LayoutJournal>
    );
}

export default Journal;