import React , { useState, useEffect }from 'react';
import LayoutAdmin from '../../components/LayoutAdmin';
import api from "../../interceptor/axios"
const ManageUser = () => {
    const [listUser,setUser] = useState([]);
    useEffect(() => {
        getUsers();
      }, []);
    const getUsers = async () => {
        const response = await api.get(`https://backend-oijs-77pyv5kz2q-et.a.run.app/users`)
        setUser(response.data);
    };
    
    console.log(listUser)
    return (
        <LayoutAdmin>
            <div class="container-fluid">
                <div class="content-container">
                    <div class="card m-3 p-3" >
                        <div class="row card-body  ">
                            <h5 class="card-title col">Users</h5>
                        </div>
                        <div class="row card-body">
                            <p class="card-subtitle mb-2 text-body-secondary col-3">Name</p>
                            <p class="card-subtitle mb-2 text-body-secondary col-3">Username</p>
                            <p class="card-subtitle mb-2 text-body-secondary col-3">Email</p>
                        </div>
                        
                        {listUser.map((user) => (
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <div class="row">
                                        <p class="card-text col-3">{user.name}</p>
                                        <p class="card-text col-3">{user.username}</p>
                                        <p class="card-text col-3">{user.email}</p>
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

export default ManageUser;