import React, { useState, useEffect } from 'react';
import LayoutAdmin from '../../components/LayoutAdmin';
import axios from "axios";
const HostJournal = () => {
    const [listJournal,setJournal] = useState([]);
    
    useEffect(() => {
        getJournals();
      }, []);
    
    const getJournals = async () => {
        const response = await axios.get(`http://localhost:3001/journals`)
        setJournal(response.data);
    };
    const deleteJournal = async (path) => {
        try {
          await axios.delete(`http://localhost:3001/journal/${path}`);
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
                    <div class="card m-3 p-3" >
                        <div class="row card-body  ">
                            <h5 class="card-title col">Hosted Journals</h5>
                            <button class="btn btn-outline-primary col-2">Create Journal</button>
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
                                            <button href="#" class="btn btn-outline-warning">Edit</button>
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