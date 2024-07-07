import React,{ useState, useEffect }  from 'react';
import { Link,useParams  } from "react-router-dom";
import api from "../../interceptor/axios"
import Layout from '../../components/Layout';
const ViewArticle = () => {
    const [article,setArticle] = useState([]);
    const [authors,setAuthors] = useState([])
    const [isCopied, setIsCopied] = useState(false);
    const {journal,article_id} = useParams();
    useEffect(() => {
        getArticle();
      }, []);
    const getArticle = async () => {
        const response = await api.get(`http://localhost:3001/article/${article_id}`)
        setArticle(response.data);
        setAuthors(response.data.authors)
        console.log(response.data)
    };
    async function copyTextToClipboard(text) {
          return await navigator.clipboard.writeText(text);
      }
    const handleCopyClick = async () => {
        // Asynchronously call copyTextToClipboard
        
        const cite = authors.map((author)=>{
            let array_name=author.name.split(" ");
            let first_name=array_name[0];
            return (`${array_name[array_name.length-1]}, ${first_name[0]}., `)
        }) + `(${article.year}), "${article.title}", ${article.journal_title}, ${article.volume}(${article.issue}), doi: ${article.article_path}`
        copyTextToClipboard(cite)
          .then(() => {
            // If successful, update the isCopied state value
            setIsCopied(true);
            setTimeout(() => {
              setIsCopied(false);
            }, 1500);
          })
          .catch((err) => {
            console.log(err);
          });
        await api.patch(`http://localhost:3001/article/cite/${article_id}`)
      }
    
    return (
        <Layout>
        <div className="container-fluid">
            <div class="card w-75 m-3 p-5 mx-auto">
                <div class="card-body ">
                <h3 class="card-title fw-bold mb-5"> {article.title}</h3>
                <p className='text-secondary'>Year Published: {article.year}</p>
                    {authors.map((author) => (
                        <div className="mb-2"> 
                            <div class="fw-bold">{author.name}</div>
                            <p class="card-text">{author.affiliation}, {author.country}</p>
                        </div>
                    ))}
                    <p className='fw-bold mt-4 mb-4'>DOI: <Link className="fw-light" to={article.article_path}>{article.article_path}</Link></p>
                    <p className='fw-bold mb-4'>Keywords: <span className='fw-normal'>{article.keywords}</span></p>
                    <p className='fw-bold mb-4'>Cite :
                        {/* Bind our handler function to the onClick button property */}
                        <button onClick={handleCopyClick}>
                            <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                        </button>    
                        {/* <span className='fw-normal'> 
                            {authors.map((author)=>{
                                let array_name=author.name.split(" ");
                                let first_name=array_name[0];
                                return (<span>{array_name[array_name.length-1]}, {first_name[0]}., </span>)
                            })}
                            ({article.year}), "{article.title}", {article.journal_title}, {article.volume}({article.issue}), doi: {article.article_path}
                        </span> */}
                    </p>
                    <p class="fw-bold">Abstract</p>
                    <p class="card-text">{article.abstract}</p>
                    <p class="card-text" >Issue: <Link to={`${journal}/issue/${article.volume}/${article.issue}`} class="card-text mb-3" >Vol. {article.volume} No. {article.issue} ({article.year})</Link> </p> 
                    
                    <Link to={`view`} class="btn btn-sm btn-outline-primary col-1">PDF</Link>
                </div>
                    
            </div>
        </div>
        </Layout>
    );
}

export default ViewArticle;