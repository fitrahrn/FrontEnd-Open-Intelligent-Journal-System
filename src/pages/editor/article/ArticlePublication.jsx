import React, { useState, useEffect } from 'react';
import {useParams } from "react-router-dom";
import api from "../../../interceptor/axios"
const ArticlePublication = ({data}) => {
    const [prefix, setPrefix] = useState("");
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [abstract, setAbstract] = useState("");
    const [keywords, setKeywords] = useState("");
    const [comment, setComment] = useState("");
    const [workflowPhase, setWorkflowPhase] = useState("");
    const [status, setStatus] = useState("");
    const [preview,setPreview] = useState("");
    const [file,setFile] = useState("");
    const [copyrightHolder,setCopyrightHolder] = useState("");
    const [copyrightYear,setCopyrightYear] = useState("");
    const [license,setLicense] = useState("")
    const [listContributors,setContributors] = useState([]);
    const [issueId,setIssueId] = useState(1);
    const [issue,setIssue] = useState("");
    const [page,setPage] = useState("");
    const [urlPath,setUrlPath] = useState("");
    const [datePublished,setDatePublished] = useState();
    const { article_id } = useParams();
    const [msg,setMsg] = useState("")
    useEffect(() => {
        getArticleById();
        getContributors();
        getIssue();
      }, []);
    const getIssue = async () => {
        
        const response = await api.get(`https://backend-dot-oijs-429910.et.r.appspot.com/issue/id/${issueId}`)
        setIssue(response.data);
    };
    const getContributors = async () => {
        const response = await api.get(`https://backend-dot-oijs-429910.et.r.appspot.com/contributors/article/${article_id}`)
        setContributors(response.data);
    }
    const getArticleById = async () => {
        const article = await api.get(`https://backend-dot-oijs-429910.et.r.appspot.com/article/${article_id}`);
        
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
        setIssueId(article.data.issue_id)
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
        await api.patch(`https://backend-dot-oijs-429910.et.r.appspot.com/article/${article_id}`, formData, {
            "Content-type": "multipart/form-data",
        });
        } catch (error) {
        console.log(error);
        }
    };
    const answerReview = async (workflowPhase,status) => {
        const formData = new FormData();
        formData.append("workflow_phase",workflowPhase);
        formData.append("status",status);
        try {
            await api.patch(`https://backend-dot-oijs-429910.et.r.appspot.com/article/${article_id}`, formData, {
              "Content-type": "multipart/form-data",
            });
          } catch (error) {
            setMsg(error);
          }
        getArticleById();
    };
    return (
        <div class="tab-pane fade p-3" id="publication"  role="tabpanel" aria-labelledby="publication-tab" >
            <div className='card mb-3'>
                <div className='card-body row justify-content-between' >
                    <span className='card-text col-7 fw-bold'>
                        Status: 
                        {data.workflow_phase !=="published" || data.workflowPhase==="scheduled" ?
                            <p className='card-text fw-light'>Unscheduled</p> :
                            <p  className='card-text fw-light'>Scheduled for Published</p>}
                    </span>
                    <button className="btn btn-outline-primary col-2 m-1">Preview</button>
                    <button onClick={()=>answerReview("published","accepted")}className="btn btn-primary col-2 m-1">Scheduled for Publication</button>
                </div>
            </div>
            <div class="card mb-3">
                <div class="card-header">
                    Title & Abstract
                </div>
                <div class="card-body">
                    <form className="content-container" onSubmit={updateArticle}>
                        <label className="form-label">Prefix</label>
                        <div className="control">
                            <input type="text" className="form-control" placeholder='Prefix' value={prefix} onChange={(e) => setPrefix(e.target.value)}/>
                        </div>
                        <label className="form-label">Title</label>
                        <div className="control">
                            <input type="text" className="form-control" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                        <label className="form-label">Subtitle</label>
                        <div className="control">
                            <input type="text" className="form-control" placeholder='subtitle' value={subtitle} onChange={(e) => setSubtitle(e.target.value)}/>
                        </div>
                        <label className="form-label">Abstract</label>
                        <div className="control">
                            <textarea   type="text" className="form-control" placeholder='abstract' value={abstract} onChange={(e) => setAbstract(e.target.value)}/>
                        </div>
                        <button type="submit" class="float-end m-2 btn btn-lg btn-primary">Save</button>  
                    </form>
                </div>
            </div>
            <div class="card container-fluid mb-3">
                <div class="card-header row">
                    <p class="card-text col">Contributors</p>
                    {/* <button class="col-2 btn btn-primary" data-bs-toggle="modal" data-bs-target="#selectFile">Add Contributors</button> */}
                </div>
                <div class="card-body">
                    <div class="row justify-content-between card-body">
                        <p class="card-subtitle mb-2 text-body-secondary col-3">Name</p>
                        <p class="card-subtitle mb-2 text-body-secondary col-3">Email</p>
                        <p class="card-subtitle mb-2 text-body-secondary col-3">Role</p>
                    </div>
                    {listContributors.map((user) => (
                        <ul class="list-group list-group-flush ">
                            <li class="list-group-item ">
                                <div class="row justify-content-between">
                                    <p class="card-text col-3">{user.user.name}</p>
                                    <p class="card-text col-3">{user.user.email}</p>
                                    <p class="card-text col-3">Author</p>
                                </div>
                                
                            </li>

                        </ul>
                        )
                    )}
                </div>
            </div>
            <div class="card mb-3">
                <div class="card-header">
                    Metadata
                </div>
                <div class="card-body">
                    <form className="content-container" onSubmit={updateArticle}>
                        <label className="form-label">Keywords</label>
                        <div className="control">
                            <input   type="text" className="form-control" placeholder='keywords' value={keywords} onChange={(e) => setKeywords(e.target.value)}/>
                        </div>
                        <button type="submit" class="float-end m-2 btn btn-lg btn-primary">Save</button>  
                    </form>
                </div>
            </div>
            <div class="card container-fluid mb-3">
                <div class="card-header row">
                    <p class="card-text col">Galleys</p>
                    <button class="col-2 btn btn-primary" data-bs-toggle="modal" data-bs-target="#">Add Galley</button>
                </div>
                <div class="card-body row">
                    <p class="card-text">No Items</p>
                </div>
            </div>
            <div class="card mb-3">
                <div class="card-header">
                    Permissions & Disclosure
                </div>
                <div class="card-body">
                    <form className="content-container">
                        <label className="form-label">Copyright Holder</label>
                        <p class="card-subtitle">Copyright will be assigned automatically to Test Journal when this is published.</p>
                        <div className="control">
                            <input   type="text" className="form-control"  value={copyrightHolder} onChange={(e) => setCopyrightHolder(e.target.value)}/>
                        </div>
                        <label className="form-label">Copyright Year</label>
                        <p class="card-subtitle">The copyright year will be set automatically when this is published in an issue.</p>
                        <div className="control">
                            <input   type="text" className="form-control"  value={copyrightYear} onChange={(e) => setCopyrightYear(e.target.value)}/>
                        </div>
                        <label className="form-label">License URL</label>
                        <div className="control">
                            <input   type="text" className="form-control" value={license} onChange={(e) => setLicense(e.target.value)}/>
                        </div>
                        <button type="submit" class="float-end m-2 btn btn-lg btn-primary">Save</button>  
                    </form>
                </div>
            </div>
            <div class="card mb-3">
                <div class="card-header">
                    Issue
                </div>
                <div class="card-body">
                    <form className="content-container">
                        <label className="form-label">Issue</label> 
                        <div className="row">
                            <p className='card-text col'>This has been assigned to Vol. {issue.volume} No. {issue.number} ({issue.year}): example issue </p>
                            <button class="col-2 btn btn-primary" data-bs-toggle="modal" data-bs-target="#">Change issue</button>
                        </div>
                        <label className="form-label">Section</label>
                        <select class="form-select mb-3">
                            <option value="article">Articles</option>
                        </select>
                        <label className="form-label">Page</label>
                        <div className="control">
                            <input   type="text" className="form-control" value={page} onChange={(e) => setPage(e.target.value)}/>
                        </div>
                        <label className="form-label">Url Path</label>
                        <p class="card-subtitle">An optional path to use in the URL instead of the ID.</p>
                        <div className="control">
                            <input   type="text" className="form-control" value={urlPath} onChange={(e) => setUrlPath(e.target.value)}/>
                        </div>
                        <label className="form-label">Date Published</label>
                        <p class="card-subtitle">The publication date will be set automatically when the issue is published. Do not enter a publication date unless the article was previously published elsewhere and you need to backdate it.</p>
                        <div className="control">
                            <input   type="text" className="form-control" value={datePublished} onChange={(e) => setDatePublished(e.target.value)}/>
                        </div>
                        <button type="submit" class="float-end m-2 btn btn-lg btn-primary">Save</button> 
                         
                    </form>
                </div>
            </div>
        </div> 
    );
}

export default ArticlePublication;