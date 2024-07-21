import React, { useState, useEffect } from 'react';
import {Link,useParams} from "react-router-dom";
import api from "../../../interceptor/axios"
const ArticleAddReviewers = ({data,title,subtitle}) => {
    const [reviewers,setReviewers] = useState([]);
    const [editor,setEditor] = useState([]);
    const [msg, setMsg] = useState("");
    const [success,setSucces] = useState("")
    const [userId, setUserId] = useState("");
    const [dueDate, setdueDate] = useState(new Date());
    const [close,setClose] = useState("")
    const {journal} = useParams();
    useEffect(() => {
        getReviewers();
        getEditors();
      }, []);
    
    const getReviewers = async () => {
        const response = await api.get(`https://oijs-429910.et.r.appspot.com/role/reviewers/${journal}`)
        setReviewers(response.data);
        console.log(response.data)
        if(reviewers.length>0) setUserId(reviewers[0].user_id)
    }
    const getEditors = async()=>{
        const response = await api.get(`https://oijs-429910.et.r.appspot.com/user/get/username`)
        setEditor(response.data);
        
    }
    const addReviewers = async (e) => {
        e.preventDefault();
        console.log(data.reviews_id)

        const email = reviewers.find((user)=>user.user_id==userId);
        console.log(dueDate)
        setSucces("New Reviewers Has Been Added")
        try {
            await api.post('https://oijs-429910.et.r.appspot.com/reviewers', {
                reviews_id: data.reviews_id,
                user_id:userId,
                date_assigned:new Date(),
                date_due: dueDate
            });
            await api.post(`https://oijs-429910.et.r.appspot.com/email/reviewer`, {
                email: email.user.email,
                title:title,
                subtitle:subtitle,
                editor_name:editor.name,
                editor_email:editor.email,
                website:`https://localhost:3001/${journal}/submission/${data.article_id}`,
                due_date:dueDate,
            });
            
            window.location.reload();
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
        setClose("modal")
    }
    return (
        <div class="modal fade" id="addReviewers" tabindex="-1" aria-labelledby="addReviewersLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addReviewersLabel">Add Reviewers in Review Rounds</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form  onSubmit={addReviewers}>
                        <div class="modal-body">
                            <p class="card-title">Choose Reviewers to Add</p>
                            <p className="error" style={{color: "red"}}>{msg}</p>
                            <p className="text-success" >{success}</p>
                            {reviewers.map((reviewer) => (
                                <ul class="list-group list-group-flush ">
                                    <li class="list-group-item ">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" id={reviewer.user_id} name="select_user_id" value={reviewer.user_id}  onChange={(e) => setUserId(e.target.value)}  />
                                            <label class="form-check-label" for={reviewer.user_id} >
                                                {reviewer.user.name}
                                            </label>
                                        </div>
                                        
                                    </li>
                                </ul>
                                )
                            )}
                            <p class="card-title">Select Due Date</p>
                            <div class="form-input">
                                <input class="form-input" type="date" id="dateDue" name="select_file" selected={dueDate} onChange={(e) => setdueDate(e.target.value)}  />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="mx-2 btn btn-lg btn-danger" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="mx-2 btn btn-lg btn-primary" data-bs-dismiss={close}>Add Reviewers</button>
                        </div> 
                    </form>
                </div>
            </div>
                
        </div>
    );
}

export default ArticleAddReviewers;