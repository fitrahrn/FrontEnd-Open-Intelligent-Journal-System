import React, { useState, useEffect } from 'react';
import api from "../interceptor/axios"
import Layout from '../components/Layout';
const Dashboard = () => {
    const [roles, setRoles] = useState([]);
    const [administrator,setAdministrator] = useState(false);
    const [editor,setEditor] = useState(false);
    const [reviewer,setReviewer] = useState(false);
    const [author,setAuthor] = useState(false);
    const [reader,setReader] = useState(false);
    useEffect(() => {
        getRoles();
      }, []);
    const getRoles = async () => {
        api.defaults.withCredentials=true;
        const response = await api.get(`https://backend-oijs-77pyv5kz2q-et.a.run.app/role/user`)
        for(let i=0;i<response.data.length;i++){
            if(response.data[i].administrator) setAdministrator(true);
            if(response.data[i].lead_editor) setEditor(true);
            if(response.data[i].editor) setEditor(true);
            if(response.data[i].reviewer) setReviewer(true);
            if(response.data[i].author) setAuthor(true);
            if(response.data[i].reader) setReader(true);
        }
        setRoles(response.data)
    };
    return (
        <Layout>
            <div class="container-fluid">
                <div className='card m-3'>
                    <h5 className='card-header'>Dashboard</h5>
                    <div className='card-body p-3'>
                        <p className='card-title'>Choose page to open:</p>
                            <ul class="list-group ">
                                {administrator ? <li class="list-group-item">
                                    <a className="btn" href="/admin/journal">Administrator</a>
                                </li>:<div></div>}
                                {editor ? <li class="list-group-item">
                                     <p class="card-text">Editor</p>
                                     <ul class="list-group list-group-flush">
                                        {roles.map((role) => (
                                            <li className='list-group-item'><a href={`${role.journal.path}/submission`} className='btn'>{role.journal.title}</a></li>
                                        ))}
                                     </ul>
                                     
                                </li>:<div></div>}
                                {reviewer ? <li class="list-group-item">
                                    <a className="btn" href="/review">Reviewer</a>
                                </li>:<div></div>}
                                {author ? <li class="list-group-item">
                                    <a className="btn" href="/submission">Author</a>
                                </li>:<div></div>}
                                {reader ? <li class="list-group-item">
                                    <a className="btn" href="/">Reader</a>
                                </li>:<div></div>}
                            </ul>
                            
                        </div>

                </div>
                    
            </div>
        </Layout>
    );
}

export default Dashboard;