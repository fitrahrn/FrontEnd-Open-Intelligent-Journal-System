import React, { useState, useEffect } from 'react';
import api from "../../interceptor/axios"
import axios from "axios"
const ProfilePassword = () => {
    const [name, setName] = useState("");
    const [publicName, setPublicName] = useState("");
    const [email, setEmail] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
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
        const response = await api.get(`https://oijs-429910.et.r.appspot.com/user/get/username`)
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
        formData.append("current_password",currentPassword);
        formData.append("new_password", newPassword);
        formData.append("confirm_password", confirmPassword);
        formData.append("phone", phone);
        formData.append("orcid_id",orcidId);
        formData.append("affiliation",affiliation);
        formData.append("mailing_address",mailingAddress);
        formData.append("signature",signature);
        formData.append("country",country);
        formData.append("file","")
        try {
            await api.patch(`https://oijs-429910.et.r.appspot.com/user/update`, formData, {
            "Content-type": "multipart/form-data",
            });
        } catch (error) {
            setMsg(error);
        }
    };


    return (
        <div class="tab-pane fade p-3" id="password"  role="tabpanel" aria-labelledby="password-tab" >
            
            <form onSubmit={updateJournal} class="box">
                <p class="has-text-centered">{msg}</p>
                <div class= "mb-3">
                    <label class="form-label fw-bold">Current Password</label>
                    <div class="controls">
                        <input type="text" class="form-control"  value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)}/>
                    </div>
                </div>
                <div class= "mb-3">
                    <label class="form-label fw-bold">New Password</label>
                    <p className='fw-light card-subtitle'>The password must be at least 6 characters.</p>
                    <div class="controls">
                        <input type="text" class="form-control"  value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                    </div>
                </div>
                <div class= "mb-3">
                    <label class="form-label fw-bold">Confirm New Password</label>
                    <div class="controls">
                        <input type="text" class="form-control"  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>
                </div>
                <div >
                <button class="float-end m-2 btn btn-primary btn-lg">Update</button>
                </div>
            </form>
                
        </div> 
    );
}

export default ProfilePassword;