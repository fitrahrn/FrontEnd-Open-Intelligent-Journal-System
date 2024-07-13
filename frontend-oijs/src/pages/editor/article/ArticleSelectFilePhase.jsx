import React, { useState, useEffect } from 'react';
import {Link,useParams} from "react-router-dom";
import api from "../../../interceptor/axios"
const ArticleSelectFilePhase = ({phase}) => {
    const [ArticleFiles,setArticleFiles] = useState([]);
    const [msg, setMsg] = useState("");
    const [file,setFile] = useState(0)
    const {article_id} = useParams();
    const [success,setSuccess] = useState("")
    const [close,setClose] = useState("")
    useEffect(() => {
        getArticleFiles();
      }, []);
    
    const getArticleFiles = async () => {
        const response = await api.get(`http://localhost:3001/article_file/${article_id}`)
        const listFile = response.data
        for(let i=0;i<listFile.length;i++){
            let article_path = response.data[i].article_path
            const article_path_split = article_path.split("/");
            let fileName = article_path_split[article_path_split.length - 1]
            listFile[i].file_name = fileName
        }
        setArticleFiles(listFile);
    }
    const selectArticleFiles = async (e) => {
        e.preventDefault();
        try {
            await api.patch(`http://localhost:3001/article_file/${file}`, {
                phase:"copyediting"
            });
            setSuccess("New Files Has Been Added")
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
        setFile("modal")
    }
    return (
        <div class="modal fade" id="addFile" tabindex="-1" aria-labelledby="addFileLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addFileLabel">Add File</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form  onSubmit={selectArticleFiles}>
                        <div class="modal-body">
                            <p className="text-success" >{success}</p>
                            <p class="card-title">Choose File to Add</p>
                            <p className="error" style={{color: "red"}}>{msg}</p>
                            {ArticleFiles.map((article) => (
                                <ul class="list-group list-group-flush ">
                                    <li class="list-group-item ">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" id={article.article_file_id} name="select_file" value={article.article_file_id} checked={file.toString()===article.article_file_id.toString()} onChange={(e) => setFile(e.target.value)}  />
                                            <label class="form-check-label" for={article.article_file_id} >
                                                {article.file_name}
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                                )
                            )}
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

export default ArticleSelectFilePhase;