import React, { useState, useEffect } from 'react';
import axios from "axios";
const ProfileContact = () => {
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
        axios.defaults.withCredentials=true;
        const response = await axios.get(`http://localhost:3001/user/get/username`)
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
            await axios.patch(`http://localhost:3001/user/update`, formData, {
            "Content-type": "multipart/form-data",
            });
        } catch (error) {
            setMsg(error)
        }
    };


    return (
        <div class="tab-pane fade p-3" id="contact"  role="tabpanel" aria-labelledby="contact-tab" >
            <form onSubmit={updateJournal} class="box">
                <p class="has-text-centered">{msg}</p>
                <div class= "mb-3">
                    <label class="form-label">Email</label>
                    <div class="controls">
                        <input type="text" class="form-control"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div class= "mb-3">
                    <label class="form-label">Signature</label>
                    <div class="controls">
                        <textarea type="text" class="form-control"  value={signature} onChange={(e) => setSignature(e.target.value)}/>
                    </div>
                </div>
                <div class= "mb-3">
                    <label class="form-label">Phone</label>
                    <div class="controls">
                        <input type="text" class="form-control"  value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                </div>
                <div class= "mb-3">
                    <label class="form-label">Affiliation</label>
                    <div class="controls">
                        <input type="text" class="form-control"  value={affiliation} onChange={(e) => setAffiliation(e.target.value)}/>
                    </div>
                </div>
                <div class= "mb-3">
                    <label class="form-label">MailingAddress</label>
                    <div class="controls">
                        <input type="text" class="form-control"  value={mailingAddress} onChange={(e) => setMailingAddress(e.target.value)}/>
                    </div>
                </div>
                <div class= "mb-3">
                    <label class="form-label">Country</label>
                    <div class="controls">
                        <input type="text" class="form-control"  value={country} onChange={(e) => setCountry(e.target.value)}/>
                    </div>
                </div>
                <div >
                <button class="float-end m-2 btn btn-primary btn-lg">Update</button>
                </div>
            </form>
                
        </div> 
    );
}

export default ProfileContact;