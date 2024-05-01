import React,{ useState, useEffect }  from 'react';
import LayoutJournal from '../../components/LayoutJournal';
import { Link,useParams  } from "react-router-dom";
import axios from "axios";
const Journal = () => {
    const [listArticle,setArticle] = useState([]);
    const {journal} = useParams();
    useEffect(() => {
        getArticle();
      }, []);
    const getArticle = async () => {
        const response = await axios.get(`http://localhost:3001/journal/${journal}/article`)
        setArticle(response.data);
    };
    console.log(listArticle)
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