import React, { useState, useEffect } from 'react';
import {Link,useParams} from "react-router-dom";
import api from "../../../interceptor/axios"
const ArticleSelectFilePhase = ({phase}) => {
    const [ArticleFiles,setArticleFiles] = useState([]);
    const [msg, setMsg] = useState("");
    const [file,setFile] = useState("")
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
        console.log(listFile)
        setArticleFiles(listFile);
    }
    const selectArticleFiles = async (e) => {
        e.preventDefault();
        
        try {
            await api.patch(`http://localhost:3001/article_file/${article_id}`, {
                article_id: file.article_id,
                article_path: file.article_path,
                phase:phase
            });
            setSuccess("New ArticleFiles Has Been Added")
            setClose("modal")
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
        setFile("modal")
    }
    return (
        <div class="modal fade" id="selectFile" tabindex="-1" aria-labelledby="selectFileLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="selectFileLabel">Add File</h1>
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
                                            <input class="form-check-input" type="radio" id={article.article_path} name="select_file" value={article} checked={file===article} onChange={(e) => setFile(e.target.value)}  />
                                            <label class="form-check-label" for={article.article_path} >
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
                            <button type="submit" class="mx-2 btn btn-lg btn-primary" data-bs-dismiss={close}>Add Reviews Rounds</button>
                        </div> 
                    </form>
                </div>
            </div>
                
        </div>
    );
}

export default ArticleSelectFilePhase;