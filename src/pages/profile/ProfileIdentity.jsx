import React, { useState, useEffect } from 'react';
import api from "../../interceptor/axios"
import axios from "axios"
const ProfileIdentity = () => {
    const [username,setUsername] = useState("")
    const [name, setName] = useState("");
    const [publicName, setPublicName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [orcidId, setOrcidId] = useState("");
    const [affiliation, setAffiliation] = useState("");
    const [mailingAddress, setMailingAddress] = useState("");
    const [signature, setSignature] = useState("");
    const [country, setCountry] = useState("");
    const [msg, setMsg] = useState("");
    useEffect(() => {
        getProfiles();
      }, []);
    const getProfiles = async () => {
        api.defaults.withCredentials=true;
        const response = await api.get(`https://backend-oijs-77pyv5kz2q-et.a.run.app/user/get/username`)
        setUsername(response.data.username)
        setName(response.data.name)
        setPublicName(response.data.public_name)
        setEmail(response.data.email)
        setPhone(response.data.phone)
        setOrcidId(response.data.orcid_id)
        setAffiliation(response.data.affiliation)
        setMailingAddress(response.data.mailing_address)
        setSignature(response.data.signature)
        setCountry(response.data.country)
        
    };
    const updateJournal = async (event) => {
        event.preventDefault(); // ketika disubmit, page tidak reload
        const formData = new FormData();
        formData.append("name",name);
        formData.append("public_name",publicName);
        formData.append("email",email);
        formData.append("current_password","");
        formData.append("new_password", "");
        formData.append("confirm_password", "");
        formData.append("phone", phone);
        formData.append("orcid_id",orcidId);
        formData.append("affiliation",affiliation);
        formData.append("mailing_address",mailingAddress);
        formData.append("signature",signature);
        formData.append("country",country);
        formData.append("file","")
        try {
            await api.patch(`https://backend-oijs-77pyv5kz2q-et.a.run.app/user/update`, formData, {
            "Content-type": "multipart/form-data",
            });
        } catch (error) {
            setMsg(error)
        }
    };


    return (
        <div class="tab-pane fade show active p-3" id="identity"  role="tabpanel" aria-labelledby="identity-tab" >
            
            <form onSubmit={updateJournal} class="box">
                <p class="has-text-centered">{msg}</p>
                <div class= "mb-3">
                    <label class="form-label fw-bold">Username</label>
                    <p className='card-text'>{username}</p>
                </div>
                <div class= "mb-3">
                    <label class="form-label fw-bold">Name</label>
                    <div class="controls">
                        <input type="text" class="form-control"  value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                </div>
                <div class= "mb-3">
                    <label class="form-label fw-bold">Preferred Public Name</label>
                    <p class="card-subtitle">How do you prefer to be addressed? Salutations, middle names and suffixes can be added here if you would like.</p>
                    <div class="controls">
                        <input type="text" class="form-control"  value={publicName} onChange={(e) => setPublicName(e.target.value)}/>
                    </div>
                </div>
                <div >
                <button class="float-end m-2 btn btn-primary btn-lg">Update</button>
                </div>
            </form>
                
        </div> 
    );
}

export default ProfileIdentity;