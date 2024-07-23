import React, { useState, useEffect } from 'react';
import api from "../../interceptor/axios"
import axios from "axios"
const ProfileRoles = () => {
    const [roles, setRoles] = useState([]);
    const [listJournal, setListJournal] = useState([]);
    const [journalId,setJournalId] = useState("")
    const [journal,setJournal] = useState("")
    const [request, setRequest] = useState("");
    const [success,setSuccess] = useState("")
    const [msg, setMsg] = useState("");
    useEffect(() => {
        getRoles();
        getJournals();
      }, []);
    const getRoles = async () => {
        api.defaults.withCredentials=true;
        const response = await api.get(`https://backend-dot-oijs-429910.et.r.appspot.com/role/user`)
        setRoles(response.data)
        setJournalId(response.data[0].journal.journal_id)
    };
    const getJournals = async () => {
        api.defaults.withCredentials=true;
        const response = await api.get(`https://backend-dot-oijs-429910.et.r.appspot.com/journals`)
        console.log(response.data)
        setListJournal(response.data);
        setJournal(response.data[0].path)
    };
    const requestRoles = async (e) => {
        e.preventDefault();
        console.log(journalId)
        try {
            await api.post('https://backend-dot-oijs-429910.et.r.appspot.com/role/request', {
                journal_id: journalId,
                request: request
            });
            setSuccess("New role has been requested");
            getRoles();
            getJournals();
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    const registerToNewJournal = async (e) => {
        e.preventDefault();
        try {
            await api.post('https://backend-dot-oijs-429910.et.r.appspot.com/role', {
                journal_id: journal
            });
            setSuccess("Register to new jurnal has been sucessfull");
            getRoles();
            getJournals();
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }


    return (
        <div class="tab-pane fade p-3" id="roles"  role="tabpanel" aria-labelledby="roles-tab" >
            <div class= "mb-3">
                <label class="form-label fw-bold">Roles</label>
                {roles.map((role) => (
                    <div className='card mb-2'>
                        <div className='card-header no-gutters'>Roles in {role.journal.title}</div>
                        <div className='card-body'>
                            <ul class="list-group ">
                                {role.administrator?<li class="list-group-item">
                                     <p class="card-text col-1">Administrator</p>
                                </li>: <div></div>}
                                {role.lead_editor?<li class="list-group-item">
                                     <p class="card-text col-1">Lead Editor</p>
                                </li>: <div></div>}
                                {role.editor? <li class="list-group-item">
                                    <p class="card-text col-1">Editor</p>
                                </li>: <div></div>}
                                {role.reviewer?<li class="list-group-item">
                                     <p class="card-text col-1">Reviewer</p>
                                </li>: <div></div>}
                                {role.author ?<li class="list-group-item">
                                     <p class="card-text col-1">Author</p>
                                </li>: <div></div>}
                                {role.reader?<li class="list-group-item">
                                     <p class="card-text col-1">Reader</p>
                                </li>  : <div></div>}
                            </ul>
                            
                        </div>
                        {role.request !==null ? 
                                <div class="card-footer text-body-secondary">
                                    You have role request in role {role.request}
                                </div>: <div></div>
                            }
                    </div>
                    )
                )}
            </div>
            <form onSubmit={requestRoles} class="box">
            <label class="form-label fw-bold">Request Roles</label>
                <p className="error" style={{color: "red"}}>{msg}</p>
                <p className="text-success" >{success}</p>
                <div className='card'>
                    <div className='card-header no-gutters'>Request New Role</div>
                    <div className='card-body'>
                        <label class="form-select-label">Select Journal to Request New Role? </label>
                        <select class="form-select mb-3" onChange={(e) => setJournalId(e.target.value)} value={journalId} required>
                        {roles.map((role) => (
                            <option key={role.journal.journal_id} value={role.journal.journal_id}>
                            {role.journal.title}
                            </option>
                        ))}
                        </select>
                        <label class="form-select-label">Select New Role to Request? </label>
                        <select class="form-select mb-3" onChange={(e) => setRequest(e.target.value)} value={request} required>
                            <option value="lead_editor">Lead Editor</option>
                            <option value="editor">Editor</option>
                            <option value="reviewer">Reviewer</option>
                            <option value="author">Author</option>
                        </select>
                        <button type='submit' class="float-end m-2 btn btn-primary btn-lg">Request</button>
                    </div>
                    
                </div>
            </form>
            <form onSubmit={registerToNewJournal} class="box">
            <label class="form-label fw-bold">Register to New Journal</label>
                <p className="error" style={{color: "red"}}>{msg}</p>
                <p className="text-success" >{success}</p>
                <div className='card'>
                    <div className='card-header no-gutters'>Request New Journal as Reader</div>
                    <div className='card-body'>
                        <label class="form-select-label">Select Journal to Register? </label>
                        <select class="form-select mb-3" onChange={(e) => setJournal(e.target.value)} value={journal} required>
                        {listJournal.map((option) => (
                            <option key={option.journal_id} value={option.journal_id}>
                            {option.title}
                            </option>
                        ))}
                        </select>
                        <label class="form-select-label">You will be registered as a reader to this journal. </label>
                        <label class="form-select-label">You can request new roles after register to new journal. </label>
                        <button type='submit' class="float-end m-2 btn btn-primary btn-lg">Register</button>
                    </div>
                </div>
            </form>
                
        </div> 
    );
}

export default ProfileRoles;