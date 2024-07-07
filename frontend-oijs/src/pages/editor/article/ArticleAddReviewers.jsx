import React, { useState, useEffect } from 'react';
import {Link,useParams} from "react-router-dom";
import api from "../../../interceptor/axios"
const ArticleAddReviewers = ({data}) => {
    const [reviewers,setReviewers] = useState([]);
    const [msg, setMsg] = useState("");
    const [success,setSucces] = useState("")
    const [userId, setUserId] = useState("");
    const [dueDate, setdueDate] = useState(new Date());
    const [close,setClose] = useState("")
    const {journal} = useParams();
    useEffect(() => {
        getReviewers();
      }, []);
    
    const getReviewers = async () => {
        const response = await api.get(`http://localhost:3001/role/reviewers/${journal}`)
        setReviewers(response.data);
        if(reviewers.length>0) setUserId(reviewers[0].user_id)
    }
    const addReviewers = async (e) => {
        e.preventDefault();
        
        try {
            await api.post('http://localhost:3001/reviewers', {
                reviews_id: data.reviews_id,
                user_id:userId,
                date_assigned:new Date(),
                date_due: dueDate
            });
            setSucces("New Reviewers Has Been Added")
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
                        <h1 class="modal-title fs-5" id="addReviewersLabel">Add Review Round</h1>
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
                            <button type="submit" class="mx-2 btn btn-lg btn-primary" data-bs-dismiss={close}>Add Reviews Rounds</button>
                        </div> 
                    </form>
                </div>
            </div>
                
        </div>
    );
}

export default ArticleAddReviewers;