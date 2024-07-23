import React, { useState, useEffect } from 'react';
import LayoutAdmin from '../../components/LayoutAdmin';
import api from "../../interceptor/axios"
import {Link, } from "react-router-dom";
const HostJournal = () => {
    const [listJournal,setJournal] = useState([]);
    useEffect(() => {
        getJournals();
      }, []);
    const getJournals = async () => {
        const response = await api.get(`https://backend-dot-oijs-429910.et.r.appspot.com/journals`)
        setJournal(response.data);
    };
    const deleteJournal = async (path) => {
        try {
          await api.delete(`https://backend-dot-oijs-429910.et.r.appspot.com/journal/${path}`);
          getJournals();
        } catch (error) {
          console.log(error);
        }
    };

    console.log(listJournal)
    return (
        <LayoutAdmin>
            <div class="container-fluid">
                <div class="content-container">
                    <div class="card m-3 p-3">
                        <div class="row card-body">
                            <h5 class="card-title col">Hosted Journals</h5>
                            <Link class="col-2" to={`create`}><button class="btn btn-outline-primary w-100" >Create Journal</button></Link>
                        </div>
                        <div class="row card-body">
                            <p class="card-subtitle mb-2 text-body-secondary col-4">Name</p>
                            <p class="card-subtitle mb-2 text-body-secondary col-4">Path</p>
                        </div>
                        {listJournal.map((journal) => (
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <div class="row justify-content-between">
                                        <p class="card-text col-4">{journal.title}</p>
                                        <p class="card-text col-4">{journal.path}</p>
                                        <div class="btn-group col-4 ">
                                            <button onClick={() => deleteJournal(journal.path)} class="btn btn-outline-danger">Delete</button>
                                            <Link to={`edit/${journal.path}`} class="btn btn-outline-warning">Edit</Link>    
                                            <button href="#" class="btn btn-outline-primary">Setting</button>
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

export default HostJournal;