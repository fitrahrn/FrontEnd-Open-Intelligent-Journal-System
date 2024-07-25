import React , { useState, useEffect }from 'react';
import LayoutAdmin from '../../components/LayoutAdmin';
import api from "../../interceptor/axios"
const RoleRequest = () => {
    const [listRoleRequest,setRoleRequest] = useState([]);
    useEffect(() => {
        getRoleRequests();
      }, []);
    const getRoleRequests = async () => {
        const response = await api.get(`https://backend-oijs-77pyv5kz2q-et.a.run.app/role/request`)
        setRoleRequest(response.data);
    };
    
    const acceptRequest = async (role_id) => {
        try {
            await api.post('https://backend-oijs-77pyv5kz2q-et.a.run.app/role/request/answer', {
                role_id: role_id,
                accept: true
            });
            getRoleRequests();
        } catch (error) {
          console.log(error);
        }
    };
    const rejectRequest = async (role_id) => {
        try {
            await api.post('https://backend-oijs-77pyv5kz2q-et.a.run.app/role/request/answer', {
                role_id: role_id,
                accept: false
            });
            getRoleRequests();
        } catch (error) {
          console.log(error);
        }
    };
    console.log(listRoleRequest)
    return (
        <LayoutAdmin>
            <div class="container-fluid">
                <div class="content-container">
                    <div class="card m-3 p-3" >
                        <div class="row card-body  ">
                            <h5 class="card-title col">Role Request</h5>
                        </div>
                        <div class="row card-body">
                            <p class="card-subtitle mb-2 text-body-secondary col-3">Journal</p>
                            <p class="card-subtitle mb-2 text-body-secondary col-2">Name</p>
                            <p class="card-subtitle mb-2 text-body-secondary col-3">Current Role</p>
                            <p class="card-subtitle mb-2 text-body-secondary col-2">Request</p>
                            
                        </div>
                        
                        {listRoleRequest.map((role) => (
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <div class="row">
                                        <p class="card-text col-3">{role.journal_title}</p>
                                        <p class="card-text col-2">{role.user.name}</p>
                                        <p class="card-text col-3">
                                            {role.administrator ? <span className='card-text'>Administrator, </span> : <span></span> }
                                            {role.lead_editor ? <span className='card-text'>Lead Editor, </span> : <span></span> }
                                            {role.editor ? <span className='card-text'>Editor, </span> : <span></span> }
                                            {role.reviewer ? <span className='card-text'>Reviewer, </span> : <span></span> }
                                            {role.author ? <span className='card-text'>Author, </span> : <span></span> }
                                            {role.reader ? <span className='card-text'>Reader</span> : <span></span> }
                                        </p>
                                        <p class="card-text col-2">{role.request}</p>
                                        <div class="btn-group col-2 ">
                                                <button onClick={()=>rejectRequest(role.role_id)} class="btn btn-danger">Reject</button>
                                                <button onClick={()=>acceptRequest(role.role_id)} class="btn btn-primary">Accept</button>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                             )
                            )
                        }
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    );
}

export default RoleRequest;