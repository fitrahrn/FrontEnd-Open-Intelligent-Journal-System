import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import api from "../../../interceptor/axios"
const ArticleAddReviews = ({data}) => {
    const [listArticle,setArticle] = useState([]);
    const [file,setFile] = useState("");
    const [msg, setMsg] = useState("");
    const [success,setSucces] = useState("")
    const {article_id} = useParams();
    const [close,setClose] = useState("")
    useEffect(() => {
        getArticles();
      }, []);
    
    const getArticles = async () => {
        const response = await api.get(`https://backend-oijs-77pyv5kz2q-et.a.run.app/article_file/${article_id}`)
        
        const listFile = response.data
        for(let i=0;i<listFile.length;i++){
            let article_path = response.data[i].article_path
            const article_path_split = article_path.split("/");
            let fileName = article_path_split[article_path_split.length - 1]
            listFile[i].file_name = fileName
        }
        setArticle(listFile);
    }
    const addReviews = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("workflow_phase","reviewing");
        formData.append("status","reviewers assigned");
        try {
            await api.post('https://backend-oijs-77pyv5kz2q-et.a.run.app/reviews', {
                article_id: article_id,
                article_file_path: file
            });
            await api.patch(`https://backend-oijs-77pyv5kz2q-et.a.run.app/article/${article_id}`, formData, {
                "Content-type": "multipart/form-data",
            });
            setSucces("Reviews Round Added")
            window.location.reload();
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
        
        setClose("modal")
    }
    return (
        <div class="modal fade" id="addReview" tabindex="-1" aria-labelledby="addReviewLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addReviewLabel">Add Review Round</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form  onSubmit={addReviews}>
                        <div class="modal-body">
                            <p class="card-title">Choose File to Review</p>
                            <p className="error" style={{color: "red"}}>{msg}</p>
                            <p className="text-success" >{success}</p>
                            {listArticle.map((article) => (
                                <ul class="list-group list-group-flush ">
                                    <li class="list-group-item ">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" id={article.article_path} name="select_file" value={article.article_path} checked={file===article.article_path} onChange={(e) => setFile(e.target.value)}  />
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

export default ArticleAddReviews;