import React, { useState, useEffect } from 'react';
import {Link,useParams} from "react-router-dom";
import api from "../../interceptor/axios"
import axios from "axios"
const ReviewAddDiscussion = ({data}) => {
    const [msg, setMsg] = useState("");
    const [success,setSucces] = useState("");
    const [subject,setSubject] = useState("");
    const [message,setMessage] = useState("")
    const [close,setClose] = useState("");
    const [preview,setPreview] = useState("");
    const [documentName,setDocumentName] = useState("No Document Selected");
    const [file,setFile] = useState("");
    const {article_id} = useParams();
    
    const addDiscussion = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("reviews_id",data.reviews_id);
        formData.append("subject",subject);
        formData.append("message",message);
        formData.append("date_send",new Date());
        formData.append("file",file)
        try {
            await api.post(`https://backend-oijs-77pyv5kz2q-et.a.run.app/discussion`,formData, {
                "Content-type" : "multipart/form-data"
            });
            setClose("modal")
            setSucces("New Discussion Has Been Added")
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
        <div class="modal fade" id="addDiscussion" tabindex="-1" aria-labelledby="addDiscussionLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addDiscussionLabel">Add New Discussion</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form  onSubmit={addDiscussion}>
                        <div class="modal-body">
                            <p class="card-title">Add Discussion</p>
                            <p className="text-success" >{success}</p>
                            <div className="mb-3">
                                <label className="form-label">Subject</label>
                                    <div className="control">
                                        <input type="text" className="form-control" placeholder='Author & Editor Review' value={subject} onChange={(e) => setSubject(e.target.value)} required/>
                                    </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                    <div className="control">
                                        <textarea type="text" className="form-control" placeholder='Author & Editor Review' value={message} onChange={(e) => setMessage(e.target.value)} required/>
                                    </div>
                            </div>
                            <label className="form-label">Upload Attached Files</label>
                            <input class="form-control" type="file" id="document" name="document" accept=".pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"  onChange={loadDocument} onClick={() =>setPreview("")}/>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="mx-2 btn btn-lg btn-danger" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="mx-2 btn btn-lg btn-primary" data-bs-dismiss={close}>Add Reviews Rounds</button>
                        </div> 
                    </form>
                </div>
            </div>
                
        </div>
    );
}

export default ReviewAddDiscussion;