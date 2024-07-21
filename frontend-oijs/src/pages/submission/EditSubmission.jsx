import React, {useState , useEffect } from 'react';
import {useNavigate,Link,useParams } from "react-router-dom";
import api from "../../interceptor/axios"
import axios from "axios"
import Layout from '../../components/Layout';
const EditSubmission = () => {
    const { id } = useParams();
    const [prefix, setPrefix] = useState("");
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [abstract, setAbstract] = useState("");
    const [keywords, setKeywords] = useState("");
    const [comment, setComment] = useState("");
    const [workflowPhase, setWorkflowPhase] = useState("");
    const [status, setStatus] = useState("");
    const [preview,setPreview] = useState("");
    const [documentName,setDocumentName] = useState("No Document Selected");
    const [file,setFile] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        getArticleById();
        // eslint-disable-next-line
      }, []);
    
      const getArticleById = async () => {
        const article = await api.get(`https://oijs-429910.et.r.appspot.com/article/${id}`);
        
        setPrefix(article.data.prefix);
        setTitle(article.data.title);
        setSubtitle(article.data.subtitle);
        setAbstract(article.data.abstract);
        setKeywords(article.data.keywords);
        setComment(article.data.comment);
        setWorkflowPhase(article.data.workflow_phase);
        setStatus(article.data.status);
        setFile(article.data.article);
        setPreview(article.data.image_path)
      };
    
      const updateArticle = async (event) => {
        event.preventDefault(); // ketika disubmit, page tidak reload
        const formData = new FormData();
        formData.append("prefix",prefix);
        formData.append("title",title);
        formData.append("subtitle",subtitle);
        formData.append("abstract",abstract);
        formData.append("comment",comment);
        formData.append("keywords",keywords);
        formData.append("workflow_phase",workflowPhase);
        formData.append("status",status);
        formData.append("file",file)
        try {
            await api.patch(`https://oijs-429910.et.r.appspot.com/article/${id}`, formData, {
              "Content-type": "multipart/form-data",
            });
            navigate(`/submission`);
          } catch (error) {
            console.log(error);
          }
      };
    const loadDocument = (event) => {
        const document = event.target.files[0];
        if (document) {
            setDocumentName(document.name);
            setFile(document);
            setPreview(URL.createObjectURL(document));
        } else {
            setDocumentName("No File Selected");
            setFile("");
        }
      };
    return (
        <Layout>
            <div className="container-fluid">
                <div className="content-container">
                    <h1 className="h1 mb-3 fw-normal text-center mt-3">Edit your submission</h1>
                    <form className="content-container" onSubmit={updateArticle}>
                        <div className="card m-3 p-3">
                            <h2 className="h2 card-title col">1. Change Submission</h2>
                            
                            <label for="document" class="form-label">Change Submission* </label>
                            <input class="form-control" type="file" id="document" name="document" accept=".pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"  onChange={loadDocument} onClick={() =>setPreview("")}/>
                        </div>
                        <div className="card m-3 p-3">
                            <h2>3. Edit Metadata</h2>
                            <div className="result">
                                <div className="mb-3">
                                    <label className="form-label">Prefix*</label>
                                        <div className="control">
                                            <input type="text" className="form-control" placeholder='Prefix' value={prefix} onChange={(e) => setPrefix(e.target.value)} required/>
                                        </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Title*</label>
                                        <div className="control">
                                            <input type="text" className="form-control" placeholder='Title'value={title} onChange={(e) => setTitle(e.target.value)} required/>
                                        </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Subtitle*</label>
                                        <div className="control">
                                            <input type="text" className="form-control" placeholder='Subtitle' value={subtitle} onChange={(e) => setSubtitle(e.target.value)}/>
                                        </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Abstract*</label>
                                        <div className="control">
                                            <textarea type="text" className="form-control" placeholder='Abstract' value={abstract} onChange={(e) => setAbstract(e.target.value)}/>
                                        </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Additional Keywords</label>
                                        <div className="control">
                                            <input type="text" className="form-control" placeholder='Keywords' value={keywords} onChange={(e) => setKeywords(e.target.value)}/>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="card border-light m-3 p-3">
                            <div className="row justify-content-end" >
                                <button type="cancel" class="col-2 mx-2 btn btn-lg btn-danger">Cancel</button>
                                <button type="submit" class="col-2 mx-2 btn btn-lg btn-primary">Finish Submission</button>
                            </div>

                        </div>    
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default EditSubmission;