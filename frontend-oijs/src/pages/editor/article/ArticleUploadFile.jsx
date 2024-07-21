import React, { useState, useEffect } from 'react';
import {Link,useParams} from "react-router-dom";
import api from "../../../interceptor/axios"
const ArticleUploadFile = ({phase}) => {
    const [msg, setMsg] = useState("");
    const {article_id} = useParams();
    const [success,setSuccess] = useState("")
    const [close,setClose] = useState("")
    const [preview,setPreview] = useState("");
    const [documentName,setDocumentName] = useState("No Document Selected");
    const [file,setFile] = useState("");
    const uploadFile = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("article_id",article_id);
        formData.append("file",file)
        try {
            await api.post(`https://oijs-429910.et.r.appspot.com/article_file`,formData);
            setSuccess("New Files Has Been Uploaded")
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
        setFile("modal")
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
        <div class="modal fade" id="uploadFile" tabindex="-1" aria-labelledby="uploadFileLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="uploadFileLabel">Add File</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form  onSubmit={uploadFile}>
                        <div class="modal-body">
                            <p className="text-success" >{success}</p>
                            <p class="card-title">Upload New Article File</p>
                            <p className="error" style={{color: "red"}}>{msg}</p>
                            <label for="document" class="form-label">Upload Submission* </label>
                            <input class="form-control" type="file" id="document" name="document" accept=".pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"  onChange={loadDocument} onClick={() =>setPreview("")}/>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="mx-2 btn btn-lg btn-danger" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="mx-2 btn btn-lg btn-primary" data-bs-dismiss={close}>Add File</button>
                        </div> 
                    </form>
                </div>
            </div>
                
        </div>
    );
}

export default ArticleUploadFile;