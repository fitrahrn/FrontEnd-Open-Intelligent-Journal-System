import React,{ useState, useEffect }  from 'react';
import { Link,useParams  } from "react-router-dom";
import api from "../../interceptor/axios"
import { Document, Page } from 'react-pdf';
import Layout from '../../components/Layout';
import { pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();
const ViewPDF = () => {
    const [article,setArticle] = useState([]);
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const {journal,article_id} = useParams();
    useEffect(() => {
        getArticle();
      }, []);
    const getArticle = async () => {
        const response = await api.get(`https://oijs-429910.et.r.appspot.com/article/${article_id}`)
        setArticle(response.data);
    };
    const nextPages = () =>{
        if(numPages>pageNumber)setPageNumber(pageNumber+1)
    }
    const previousPages = () =>{
        if(pageNumber>1)setPageNumber(pageNumber-1)
    }

    const onDocumentLoadSuccess= ({ numPages})=> {
        setNumPages(numPages);
    };
    return (
        <Layout>
            <div class="card w-50 m-auto mt-3 p-4">
                <div class="card-body">
                    <Document className="ms-5" file={article.article_path} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} />
                        <div className='row align-items-center'>
                            <button className='col btn btn-primary' onClick={()=>previousPages()} >Previous Pages</button>
                            <p className='col ms-5'>Page {pageNumber} of {numPages}</p>
                            <button className='col btn btn-primary' onClick={()=>nextPages()} >Next Pages</button>
                        </div>
                    </Document>
                    
                </div>
                
            </div>
        </Layout>
    );
}

export default ViewPDF;