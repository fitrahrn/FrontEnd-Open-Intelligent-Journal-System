import React, { useState, useEffect } from 'react';
import {Link,useParams} from "react-router-dom";
import api from "../../../interceptor/axios"
const ArticleAddContributors = ({data}) => {
    const [contributors,setContributors] = useState([]);
    const [msg, setMsg] = useState("");
    const [success,setSucces] = useState("")
    const [userId, setUserId] = useState("");
    const [dueDate, setdueDate] = useState(new Date());
    const [close,setClose] = useState("")
    const {article_id} = useParams();
    
    useEffect(() => {
        getUsers();
      }, []);
    
    const getUsers = async () => {
        const response = await api.get(`http://localhost:3001/get/contributors`)
        setContributors(response.data);
        if(contributors.length>0) setUserId(contributors[0].user_id)
    };
    const addContributors = async (e) => {
        e.preventDefault();
        
        try {
            await api.post('http://localhost:3001/contributors', {
                article_id:article_id,
                user_id:userId
            });
            setSucces("New Contributors Has Been Added")
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
        setClose("modal")
    }
    return (
        <div class="modal fade" id="addContributors" tabindex="-1" aria-labelledby="addContributorsLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addContributorsLabel">Add Review Round</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form  onSubmit={addContributors}>
                        <div class="modal-body">
                            <p class="card-title">Choose New Contributors to Add</p>
                            <p className="error" style={{color: "red"}}>{msg}</p>
                            <p className="text-success" >{success}</p>
                            {contributors.map((user) => (
                                <ul class="list-group list-group-flush ">
                                    <li class="list-group-item ">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" id={user.user_id} name="select_user_id" value={user.user_id}  onChange={(e) => setUserId(e.target.value)}  />
                                            <label class="form-check-label" for={user.user_id} >
                                                {user.name}
                                            </label>
                                        </div>
                                        
                                    </li>
                                </ul>
                                )
                            )}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="mx-2 btn btn-lg btn-danger" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="mx-2 btn btn-lg btn-primary" data-bs-dismiss={close}>Add New Contributors</button>
                        </div> 
                    </form>
                </div>
            </div>
                
        </div>
    );
}

export default ArticleAddContributors;