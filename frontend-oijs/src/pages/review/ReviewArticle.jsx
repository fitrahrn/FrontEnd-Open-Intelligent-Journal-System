import React, {useState , useEffect } from 'react';
import {useNavigate,Link,useParams } from "react-router-dom";
import axios from "axios";
import Layout from '../../components/Layout';
import ReviewAddDiscussion from './ReviewAddDiscussion';
const ReviewArticle = () => {
    const [review,setReview] = useState([]);
    const [reviewer,setReviewer] = useState([]);
    const [msg, setMsg] = useState("");
    const [check, setCheck] = useState(false);
    const [editorReview,setEditorReview] = useState("")
    const [authorReview,setAuthorReview] = useState("")
    const [preview,setPreview] = useState("");
    const [documentName,setDocumentName] = useState("No Document Selected");
    const [discusssions,setDiscusssions] = useState([])
    const [file,setFile] = useState("");
    const [recommendation,setRecommendation] = useState("")
    const { article_id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        getReviews();
      }, []);
    const getReviews = async () => {
        axios.defaults.withCredentials=true;
        const response = await axios.get(`http://localhost:3001/reviews/${article_id}`)
        const listFile = response.data[0]
        let article_path = response.data[0].article_file_path
        const article_path_split = article_path.split("/");
        let fileName = article_path_split[article_path_split.length - 1]
        listFile.file_name = fileName
        setReview(listFile);
        const responseReviewer = await axios.get(`http://localhost:3001/reviewers/user/${listFile.reviews_id}`)
        setReviewer(responseReviewer.data)
        const responseDiscussion = await axios.get(`http://localhost:3001/discussion/${listFile.reviews_id}`)
        setDiscusssions(responseDiscussion.data);
        console.log(responseDiscussion)
    };

    const ReviewArticle = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("reviewers_id",reviewer.reviewers_id);
        formData.append("editor_review",editorReview);
        formData.append("author_review",authorReview);
        formData.append("recommendation",recommendation);
        formData.append("date_completed",new Date());
        formData.append("file",file)
        console.log(formData)
        try {
            await axios.patch(`http://localhost:3001/reviewers`,formData, {
                "Content-type" : "multipart/form-data"
            });
            navigate("/review");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
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
                    <h1 className="h1 mb-3 fw-normal text-center mt-3">Review an Article</h1>
                    <form className="content-container" onSubmit={ReviewArticle}>
                        <div className="card m-3 p-3 ps-4">
                            <p className="error" style={{color: "red"}}>{msg}</p>
                            
                            <h2 className="h2 card-title col">1. Request for Review</h2>
                            <p className='card-text'>You have been selected as a potential reviewer of the following submission. Below is an overview of the submission, as well as the timeline for this review. We hope that you are able to participate.</p>
                            
                            <h5 class="card-title fw-bold mt-2">Article Title</h5>
                            {review.article !== undefined ? <p class="card-text mb-2">{review.article.title}</p>: <div></div>}
                            <h5 class="card-title fw-bold mt-2">Abstract</h5>
                            {review.article !== undefined ? <p class="card-text mb-2">{review.article.abstract}</p>: <div></div>}
                            <h5 class="card-title fw-bold mt-2">Review Type</h5>
                            <p class="card-text mb-2">Anonymous Reviewer/Anonymous Author</p>

                            <div class="card mb-3">
                                <div class="card-header fw-bold">
                                    Review File
                                </div>
                                <div class="card-body row">
                                    <p  class="card-text col">{review.file_name}</p>
                                    <Link class="btn btn-outline-primary col-2 me-3" to={review.article_file_path} target="_blank" download>Download</Link>
                                </div>
                            </div>
                            <h5 class="card-title fw-bold mt-2">Review Schedule</h5>
                            <div class="row p-2">
                                <div className='col-2'>
                                    <input class="form-control " type="text" value={reviewer.date_assigned}disabled readonly/>
                                    <p class="card-text mb-2">Review Date Assigned</p>
                                </div>
                                <div className='col-2'>
                                    <input class="form-control " type="text" value={reviewer.date_due}disabled readonly/>
                                    <p class="card-text mb-2">Review Due Date</p>
                                </div>
                                
                            </div>
                            <div className="form-check text-start my-1">
                                <input id="check" class="form-check-input" type="checkbox" value={check} onChange={(e) => setCheck(e.target.value)} required/>
                                <label htmlFor="check" class="form-check-label"> Yes, I agree to have my data collected and stored according to the privacy statement. </label>
                            </div>
                        </div>
                        <div className="card  m-3 p-3 ps-4">
                            <h2 className="h2 card-title col">2. Review Guidelines</h2>
                            <p class="card-text mb-2">This publisher has not set any reviewer guidelines.</p>
                        </div>
                        <div className="card  m-3 p-3 ps-4">
                            <h2>3. Download & Review</h2>
                            <div class="card mb-3">
                                <div class="card-header fw-bold">
                                    Review File
                                </div>
                                <div class="card-body row">
                                    <p  class="card-text col">{review.file_name}</p>
                                    <Link class="btn btn-outline-primary col-2 me-3" to={review.article_file_path} target="_blank" download>Download</Link>
                                </div>
                            </div>
                            <label className="form-label">Review</label>
                            <p className='card-subtitle'>Enter (or paste) your review of this submission into the form below.</p>
                            <div className="mb-3">
                                <label className="form-label">For Author and Editor</label>
                                    <div className="control">
                                        <textarea type="text" className="form-control" placeholder='Author & Editor Review' value={authorReview} onChange={(e) => setAuthorReview(e.target.value)} required/>
                                    </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">For Editor Only</label>
                                    <div className="control">
                                        <textarea type="text" className="form-control" placeholder='Editor Review' value={editorReview} onChange={(e) => setEditorReview(e.target.value)} required/>
                                    </div>
                            </div>
                            <label className="form-label">Upload</label>
                            <p className='card-subtitle'>Upload files you would like the editor and/or author to consult, including revised versions of the original review file(s).</p>
                            <input class="form-control" type="file" id="document" name="document" accept=".pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"  onChange={loadDocument} onClick={() =>setPreview("")}/>
                            <div class="card mb-3 container-fluid mt-3">
                                <ReviewAddDiscussion data={review}/>
                                <div class="row no-gutters card-header ">
                                    <p class="card-text col">Review Discussion</p>
                                    <button class="col-2 btn btn-primary" data-bs-toggle="modal" data-bs-target="#addDiscussion">Add Discussion</button>
                                </div>
                                <div class="row card-body justify-content-between">
                                    <p class="card-subtitle mb-2 text-body-secondary col-3">Subject</p>
                                    <p class="card-subtitle mb-2 text-body-secondary col-2">Form</p>
                                    <p class="card-subtitle mb-2 text-body-secondary col-2">Last Reply</p>
                                    <p class="card-subtitle mb-2 text-body-secondary col-2">Replies</p>
                                    <p class="card-subtitle mb-2 text-body-secondary col-1">Closed</p>
                                    <p class="card-subtitle mb-2 text-body-secondary col-2"></p>
                                </div>
                                {discusssions.map((discussion) => (
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <div class="row justify-content-between">
                                                <p class="card-text col-3">{discussion.subject}</p>
                                                <p class="card-text col-2">{discussion.name_first_send}
                                                    <br/>{new Date(discussion.time_first_send).toLocaleString("en-US")}</p>
                                                <p class="card-text col-2">{discussion.name_last_send}
                                                    <br/>{new Date(discussion.time_last_send).toLocaleString("en-US")}</p>
                                                <p class="card-text col-2">{discussion.messages.length-1}</p>
                                                <p class="card-text col-1">{discussion.closed}</p>
                                                <div class="btn-group col-2" role="group">
                                                <button class="col-2 btn btn-primary" data-bs-toggle="modal" data-bs-target="#addDiscussion">View</button>   
                                                    
                                                </div>
                                            </div>
                                            
                                        </li>

                                    </ul>
                                    )
                                    )
                                }
                            </div>
                            <label className="form-label">Recommendation</label>
                            <p className='card-subtitle form-select-label'>Select a recommendation and submit the review to complete the process. You must enter a review or upload a file before selecting a recommendation.</p>
                            <select class="form-select mb-3" onChange={(e) => setRecommendation(e.target.value)}>
                                <option value="accepted">Accept Submission</option>
                                <option value="revisions required">Revisions Required</option>
                                <option value="resubmit for review">Resubmit for Review</option>
                                <option value="declined">Decline for Submission</option>
                            </select>
                        </div>
                        <div className="card border-light m-3 p-3">
                            <div className="row justify-content-end" >
                                <button type="cancel" class="col-2 mx-2 btn btn-lg btn-danger">Cancel</button>
                                <button type="submit" class="col-2 mx-2 btn btn-lg btn-primary">Submit</button>
                            </div>

                        </div>    
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default ReviewArticle;